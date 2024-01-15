const glob = require("glob");
const fs = require("fs");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

// srcディレクトリと拡張子を消す
// ex: ./src/index.html -> ./index
const arrangePath = (fullPath) => {
  const removedExtension = fullPath.match(/(.+\/.+?).[a-z]+([?#;].*)?$/)[1];
  const removedSrcDir = removedExtension.replace(/src\//, "");
  return removedSrcDir;
};

// src配下の全てのejsパスを取得する
const getAllEjs = () => {
  const ejsList = glob.sync("./src/**/[!_]*.ejs");
  return ejsList;
};

const getEntry = () => {
  const entry = {};
  getAllEjs().forEach((v) => {
    entry[arrangePath(v)] = v;
  });
  return entry;
};

// src配下の全てのejsを、ejsからhtmlに変換するプラグインを作成する
const getHtmlPlugins = () => {
  const ejsList = getAllEjs();
  const htmlWebpackPlugins = ejsList.map((v) => {
    return new HtmlWebpackPlugin({
      filename: arrangePath(v) + ".html",
      template: v,
      chunks: [arrangePath(v)], // デフォルトはallなので全てのcssやjsが挿入されてしまう
    });
  });
  return htmlWebpackPlugins;
};

module.exports = {
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
    publicPath: "/",
    assetModuleFilename: 'images/[name][ext][query]'

  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: [
          {
            loader: "html-loader",
            options: {
              sources: {
                // copy-webpack-pluginでpublicをまるごとコピーするためcss, js以外の名前解決は行わない
                urlFilter: (attribute, value, resourcePath) => {
                  if (/\.(scss|sass)$/.test(value)) {
                    return true;
                  }
                  if (/\.(js)$/.test(value)) {
                    return true;
                  }
                  return false;
                },
              },
              minimize: false,
            },
          },
          {
            loader: "template-ejs-loader",
            options: {
              includer: (originalPath, parsedPath) => {
                let filename = "";
                if (/^\./.test(originalPath)) {
                  // includeでパスが'.'から始まる場合
                  filename = parsedPath;
                } else if (/^\//.test(originalPath)) {
                  // includeでパスが'/'から始まる場合
                  filename = path.resolve(__dirname, "src", "." + originalPath);
                } else {
                  filename = path.resolve(__dirname, "src", originalPath);
                }

                if (filename && fs.existsSync(filename)) {
                  return { filename };
                }
                // ファイルが存在しない場合
                throw new Error("Not Found: could not resolve " + originalPath);
              },
            },
          },
        ],
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false } },
          "sass-loader",
        ],
      },
            //Asset Modules の設定
            {
              //対象とするアセットファイルの拡張子を正規表現で指定
              test: /\.(png|svg|jpe?g|gif)$/i,
              //画像をコピーして出力
              type: 'asset/resource'  
            },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "src"),
    ],
    roots: [path.resolve(__dirname, "src")],
  },
  plugins: [
    // webpackの仕様上, 余計なjsファイルが生まれるので削除
    new RemoveEmptyScriptsPlugin({
      extensions: /\.(css|scss|sass|less|styl|ejs|html)([?].*)?$/,
      remove: /main\.(js|mjs)$/,
    }),
    // htmlをdistに出力
    ...getHtmlPlugins(),
    // cssをdistに出力
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css",
    }),
    // publicフォルダーをdistにコピー
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "images"),
          to: path.resolve(__dirname, "dist/images"),
        },
      ],
    }),
  ],
  devtool: "source-map",

};
