/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/index.scss";

/***/ }),

/***/ "./src/script/script.js":
/*!******************************!*\
  !*** ./src/script/script.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/script.js";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"./japanese": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/japanese.ejs ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./style/index.scss */ "./src/style/index.scss"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./script/script.js */ "./src/script/script.js"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html>\n<html lang=\"ja\">\n  <head>\n  <meta name=\"description\" content=\"世界的アーティスト・天野喜孝氏が発信するファインアート『CANDY GIRL』のNFTコレクション。\n  単なるPFPプロジェクトではなく、多くのユーティリティとホルダーの特典を用意しております。\"/>\n\n\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css\">\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css\">\n  <link rel=\"canonical\" href=\"https://candygirl-nft.com/japanese.html\">\n\n  <title>Candy Girl</title>\n\n  \n  <meta charset=\"utf-8\" />\n\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap\" rel=\"stylesheet\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <head prefix=\"og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#\">\n    <meta property=\"og:url\" content=\"http://candygirl-nft.com\">\n    <meta property=\"og:type\" content=\"website\">\n    <meta property=\"og:image\" content=\"http://candygirl-nft.com/images/ogp.jpg\">\n    <meta property=\"og:title\" content=\"Candy Girl\">\n    <meta property=\"og:description\" content=\"The NFT fine art collection “CANDY GIRL” by world renowned artist Yoshitaka Amano. It’s more than a PFP project, it offers many utilities and holder benefits.\" />\n    <title>Page title</title>\n    <link rel=\"icon\" href=\"/favicon.ico\" />\n</head>\n\n\n  <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\n  <body id=\"home\">\n    <div class=\"content\">\n    <header id=\"header\" class=\"header\">\n  <div class=\"header__inner\">\n    <div class=\"header__spbtn\">\n      <div class=\"openbtn\">\n        <div class=\"openbtn-area\"><span></span><span></span><span></span></div>\n      </div>\n    </div>\n    <h1 class=\"header__ttl\">CANDY GIRL @Yoshitaka Amano</h1>\n      <nav class=\"header__menu\">\n        <a href=\"#ABOUT\" class=\"header__menu--about\">ABOUT</a>\n        <a href=\"#whats\" class=\"header__menu--whats\">What's CANDY GIRL?</a>\n        <a href=\"#amano\" class=\"header__menu--amano\">Yoshitaka Amano</a>\n        <a href=\"#twinplanet\" class=\"header__menu--tp\">Twin Planet</a>\n        <a href=\"#astar\" class=\"header__menu--astar\">Astar Network</a>\n        <a href=\"#RoadMap\" class=\"header__menu--road\">Road Map</a>\n        <a href=\"#TEAM\" class=\"header__menu--team\">TEAM</a>\n        <!-- <a href=\"#terms\" class=\"header__menu--terms\">TERMS</a> -->\n      </nav>\n\n    <p class=\"japan\"><a href=\"/\" class=\"header__jpen\">EN</a></p>\n    <p class=\"english\"><a href=\"/japanese.html\" class=\"header__jpen\">JP</a></p>\n  </div>\n</header>\n\n<!-- SPのやつ -->\n<div class=\"nav_modal\" id=\"nav_modal\">\n  <nav class=\"header__menusp\">\n    <a href=\"#ABOUT\" class=\"header__menusp--about\">ABOUT</a>\n    <a href=\"#whats\" class=\"header__menusp--whats\">What's CANDY GIRL?</a>\n    <a href=\"#amano\" class=\"header__menusp--amano\">Yoshitaka Amano</a>\n    <a href=\"#twinplanet\" class=\"header__menusp--tp\">Twin Planet</a>\n    <a href=\"#astar\" class=\"header__menusp--astar\">Astar Network</a>\n    <a href=\"#RoadMap\" class=\"header__menusp--road\">Road Map</a>\n    <a href=\"#TEAM\" class=\"header__menusp--team\">TEAM</a>\n    <!-- <a href=\"#terms\" class=\"header__menusp--terms\">TERMS</a> -->\n  </nav>\n</div>\n<!-- SPのやつ -->\n\n<!-- カルーセルのやつ -->\n<section class=\"fvimg\" id=\"fvimg\"></section>\n<div class=\"carousel\" >\n  <div><img src=\"./images/img01.jpg\" alt=\"TOPイメージ01\"></div>\n  <div><img src=\"./images/img02.jpg\" alt=\"TOPイメージ02\"></div>\n  <div><img src=\"./images/img03.jpg\" alt=\"TOPイメージ03\"></div>\n  <div><img src=\"./images/img04.jpg\" alt=\"TOPイメージ04\"></div>\n</div>\n\n<!-- カルーセルのやつ -->\n\n\n    <main id=\"main\" class=\"main\">\n\n      <section id=\"ABOUT\" class=\"about\">\n    <div class=\"about__topinner\">\n        <div class=\"about__inner\">\n            <h2 class=\"about__ttl scroll-fade\">ABOUT CANDY GIRL</h2>\n            <p class=\"jptxt scroll-fade\">世界的アーティスト・天野喜孝氏が発信するファインアート『CANDY GIRL』のNFTコレクション。<br>\n                単なるPFPプロジェクトではなく、多くのユーティリティとホルダーの特典を用意しております。<br>\n                <br>\n                私たちのミッションは、CANDY GIRLたちをアート・ミュージック・ストーリー・ファッション・フード・デジタルを複合的に掛け合わせた、グローバル・エンターテイメントを展開することです。\n                <br>\n                リアルとデジタル、両方の世界で、<br>\n                CANDY GIRLたちが飛び回るエコシステムの構築をNFTホルダーたちと築いてまいります。</p>\n\n        </div>\n    </div>\n</section>\n<div class=\"main__middle\" id=\"whats\">\n    <div class=\"main__middle--inner\">\n        <section class=\"whats\">\n            <div class=\"whats__cont\">\n                <div>\n                    <h2 class=\"whats__ttl scroll-fade\">What's Candy GIRL?</h2>\n                    <p class=\"jptxt scroll-fade\">『CANDY GIRL』<br>\n                        最初は、一滴の色だった。<br><br>\n\n                        それは、まるでCANDYのようなきらめく瞳になり、<br>\n                        手足が伸び、身体が生まれ、CANDY GIRLとして動き出した。<br>\n                        <br>\n                        奔放な想像力と欲望のように、カラフルな濁流となってあふれだし、<br>\n                        世界を、その色と光で塗り替えていった。</p>\n                </div>\n                <div class=\"whats__cont--img scroll-fade2\">\n                    <img src=\"./images/img_whtas.png\" alt=\"What's Candy GIRL?\" width=\"406px\" height=\"406px\"\n                        loading=\"lazy\">\n                </div>\n            </div>\n        </section>\n        <section id=\"amano\" class=\"amano scroll-fade\">\n            <div class=\"amano__cont\">\n                <h2 class=\"amano__ttl scroll-fade\">Yoshitaka Amano</h2>\n                <p class=\"jptxt scroll-fade2\">1952年生まれ。静岡県出身。<br>\n                    15歳でアニメーション制作会社「(株)竜の子プロダクション」(現「(株)タツノコプロ」)に入社し、『タイムボカンシリーズ ヤッターマン』 『昆虫物語 みなしごハッチ』『新造人間\n                    キャシャーン』など、多数のキャラクターデザインを手がける。<br>\n                    独立後、「ファイナルファンタジー」シリーズのロゴ、イメージイラストを担当、天野喜孝の世界観が広く知れ渡る大きなきっかけに。<br>\n                    2000年、ヒューゴー賞にノミネート。同年、アイズナー賞を受賞。ニューヨーク、ロンドン、パリなどで評価されているファインアートシリーズをはじめ、数多くの個展を国内外で開催するなど国を超えて人々を惹きつけ、現在も幅広い分野で世界的に活躍を続けている。\n                </p>\n            </div>\n        </section>\n    </div>\n</div>\n\n<div class=\"main__company\" id=\"twinplanet\">\n    <section class=\"twinplanet\">\n        <h2 class=\"twinplanet__ttl scroll-fade\">TWIN PLANET LOGO</h2>\n\n        <div class=\"twinplanet__con\">\n            <div class=\"twinplanet__logo scroll-fade\">\n                <img src=\"./images/logo_tp.svg\" alt=\"twinplanet LOGO\">\n            </div>\n            <div class=\"twinplanet__txts\">\n                <p class=\"jptxt scroll-fade\">株式会社ツインプラネットは、Intellectual\n                    Property(知的財産権)を軸に、エンターテインメント分野において幅広い事業を展開する“IPエージェンシー”。<br><br>\n                    キャラクターは勿論、「ヒト・モノ・コト」あらゆるコンテンツをIPとして捉え、独自IP・共同IP・有力IPの価値を“企画力”“クリエイティブ力”を活かし最大化させ話題を醸成。<br>\n                    プロダクト化、プロモーション、メディア・イベント展開など、さまざまな形でサービスを実施。</p>\n            </div>\n            <p class=\"twinplanet__logosp scroll-fade\">\n                <span>\n                    <img src=\"./images/logo_tp.svg\" alt=\"twinplanet LOGO\">\n                </span>\n            </p>\n        </div>\n    </section>\n    <div class=\"main__company--inner\" id=\"astar\">\n    </div>\n    <div class=\"astar__wrapper\">\n        <section class=\"astar\">\n            <h2 class=\"astar__ttl scroll-fade\">Astar LOGO</h2>\n\n            <div class=\"astar__con\">\n                <div class=\"astar__txts\">\n                    <p class=\"jptxt scroll-fade\">Astar Networkは、渡辺創太氏が立ち上げた日本発のパブリックブロックチェーン。<br><br>\n                        異なるブロックチェーンをつなげ、web3の基幹インフラを目指すポルカドットのパラチェーンに世界で3番目に選ばれており、将来性が期待されている。<br>\n                        <br>\n                        また「dAppsステーキング」というアプリ開発者を支援する仕組みがあるため、web3サービスを開発しやすい環境整備を行っている。</p>\n                </div>\n                <p class=\"astar__logo scroll-fade2\">\n                    <span>\n                        <img src=\"./images/logo_astar.png\" alt=\"ASTAR LOGO\" width=\"634px\" height=\"242px\">\n                    </span>\n                </p>\n            </div>\n\n    </div>\n</div>\n</section>\n\n</div>\n\n<section id=\"RoadMap\" class=\"roadmap\">\n    <div class=\"roadmap__inner\">\n        <div class=\"roadmap__contents\">\n            <h2 class=\"roadmap__ttl scroll-fade\">Road MAP</h2>\n            <div class=\"roadmap__flex scroll-fade\">\n                <div class=\"roadmap__fv\">\n                    <img src=\"./images/img_roadmap.png\" alt=\"ROAD MAP IMAGE\" width=\"1920px\" height=\"1080px\">\n                    <a class=\"roadmap__subttl\" id=\"js_roadimg\"><span>View RoadMap</span></a>\n                </div>\n                <div class=\"roadmap__contxt\">\n                    <ul class=\"roadmap__list\">\n                        <li>\n                            <div class=\"roadmap__list--btn\"></div>\n                            <div class=\"slidblc\">\n                                <div class=\"roadmap__list--ttl\">2022: Launch</div>\n                                <div class=\"roadmap__list--menu\">\n                                    └渋谷芸術祭2022にて<br>\n                                    　　KIKKA GALLERY リニューアルオープン<br>\n                                    └第一弾NFTコレクションミントセール<br>\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"roadmap__list--btn\"></div>\n                            <div class=\"slidblc\">\n                                <div class=\"roadmap__list--ttl\">CANDY POINT 1</div>\n                                <div class=\"roadmap__list--menu\">\n                                    └バーチャルモデリング スタート<br>\n                                    └楽曲 リリース<br>\n                                    └日本最大級のファッションイベントに出演\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"roadmap__list--btn\"></div>\n                            <div class=\"slidblc\">\n                                <div class=\"roadmap__list--ttl\">CANDY POINT 2</div>\n                                <div class=\"roadmap__list--menu\">\n                                    　└STORY BOOK販売<br>\n                                    　└リアルとデジタルが融合した場へ進出\n                                </div>\n                            </div>\n                        </li>\n\n                        <li>\n                            <div class=\"roadmap__list--btn\"></div>\n                            <div class=\"slidblc\">\n                                <div class=\"roadmap__list--ttl\">CANDY POINT 3</div>\n                                <div class=\"roadmap__list--menu\">\n                                    　└世界的ファッションコレクションに出演<br>\n                                    　└バーチャルミュージカルへ\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"roadmap__list--btn\"></div>\n                            <div class=\"slidblc\">\n                                <div class=\"roadmap__list--ttl\">CANDY POINT 4</div>\n                                <div class=\"roadmap__list--menu\">\n                                    └海外でバーチャルミュージカルを展開\n                                </div>\n                            </div>\n                        </li>\n\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<div class=\"modal_bg\"></div>\n\n<div id=\"image\" class=\"roadmap__img\">\n    <div class=\"roadmap__img--inner\">\n        <img src=\"./images/img_kakudai.jpg\" width=\"1920\" height=\"1080\" alt=\"Roadmap\">\n    </div>\n</div>  \n\n\n<section id=\"TEAM\" class=\"team\">\n    <div class=\"team__inner\">\n        <h2 class=\"team__ttl scroll-fade\">TEAM チームメンバー</h2>\n        <ul class=\"team__members\">\n            <li class=\"scroll-fade\">\n                <img src=\"./images/img_team01.png\" width=\"640\" height=\"800\" class=\"pc\" alt=\"@Fukuyan Founder\">\n                <img src=\"./images/img_team01sp.png\" width=\"640\" height=\"906\" class=\"sp\" alt=\"@Fukuyan Founder\">\n            </li>\n            <li class=\"scroll-fade2\">\n                <img src=\"./images/img_team02.png\" width=\"640\" height=\"800\" class=\"pc\" alt=\"@Naruya TP Twin Planet Memberr\">\n                <img src=\"./images/img_team02sp.png\" width=\"640\" height=\"906\" class=\"sp\" alt=\"@Naruya TP Twin Planet Memberr\">\n            </li>\n            <li class=\"scroll-fade3\">\n                <img src=\"./images/img_team03.png\" width=\"640\" height=\"800\" class=\"pc\" alt=\"@himeno Twin Planet Member\">\n                <img src=\"./images/img_team03sp.png\" width=\"640\" height=\"906\" class=\"sp\" alt=\"@himeno Twin Planet Member\">\n            </li>\n        </ul>\n        <ul class=\"team__members\">\n            <li class=\"scroll-fade\">\n                <img src=\"./images/img_team04.png\" width=\"640\" height=\"800\" class=\"pc\" alt=\"@Masa PM\">\n                <img src=\"./images/img_team04sp.png\" width=\"640\" height=\"906\" class=\"sp\" alt=\"@Masa PM\">\n            </li>\n            <li class=\"scroll-fade\">\n                <img src=\"./images/img_team05.png\" width=\"640\" height=\"800\" class=\"pc\" alt=\"@Sota Astar - Never DM Founder of Astar\">\n                <img src=\"./images/img_team05sp.png\" width=\"640\" height=\"906\" class=\"sp\" alt=\"@Sota Astar - Never DM Founder of Astar\">\n            </li>\n            <li class=\"scroll-fade\">\n                <img src=\"./images/img_team06.png\" width=\"640\" height=\"800\" class=\"pc\" alt=\"@Suguru Astar Astar Member\">\n                <img src=\"./images/img_team06sp.png\" width=\"640\" height=\"906\" class=\"sp\" alt=\"@Suguru Astar Astar Member\">\n            </li>\n        </ul>\n    </div>\n</section>\n\n\n<!-- <section id=\"terms\" class=\"terms\">\n    <div class=\"terms__inner\">\n        <h2 class=\"terms__ttl\">Terms 規約</h2>\n\n        <div class=\"terms__contxt\">\n            <ul class=\"terms__list\">\n                <li>\n                    <div class=\"terms__list--btn\"><img src=\"./images/terms_arrow.svg\" alt=\"\" width=\"36px\" height=\"36px\"></div>\n                    <div class=\"slidblc\">\n                        <div class=\"terms__list--ttl\">About Terms</div>\n                        <div class=\"terms__list--menu\">\n                            A. You can buy CANDY GIRL on TofuNFT.\n\n                        </div>\n                    </div>\n                </li>\n\n            </ul>\n        </div>\n    </div>\n</section> -->\n\n    </main>\n  </div>\n    <footer id=\"footer\" class=\"footer\">\n  <div class=\"footer__inner\">\n    <div class=\"footer__logo\">\n     CANDY GIRL @Yoshitaka Amazno\n    </div>\n    <div class=\"footer__sns\">\n      <a href=\"https://twitter.com/candygirl_nft\" target=\"_blank\" rel=\"noreferrer\" class=\"footer__sns--twitter\">Twitter</a>\n      <a href=\"https://discord.com/invite/candygirl\" target=\"_blank\" rel=\"noreferrer\" class=\"footer__sns--candy\">Candy Girl</a>\n    </div>\n  </div>\n</footer>\n\n\n  \n    <" + "script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js\" integrity=\"sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"><" + "/script>\n\n    <" + "script type=\"text/javascript\" charset=\"utf-8\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"><" + "/script>\n<!-------------------JS---------------------------------------------------------------->  \n<" + "script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js\"><" + "/script>\n<!------------------------------------------------------------------------------------->  \n\n  \n\n  <" + "script>\n\n$(function () {\n  $('.carousel').slick({\n    autoplay: true,\n    autoplaySpeed: 2000,\n    infinite: true,\n    arrows: true,\n    dots: false,\n\n  });\n});\n  <" + "/script>\n\n  </body>\n\n  \n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);
})();

/******/ })()
;
//# sourceMappingURL=japanese.js.map