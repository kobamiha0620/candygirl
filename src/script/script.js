// ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  const height = $("#header").height();
  $("#nav_modal").css("top", height);
  $("#fvimg").css('padding-top', height);
});


$(".openbtn").click(function () {
  $(this).toggleClass('active');
  $('.nav_modal').toggleClass('active');

});

$('#nav_modal a[href]').on('click', function (event) {
  $(".openbtn").removeClass('active');

  $('.nav_modal').removeClass('active');

});


function accordion(){
  $('.roadmap__list--btn').click(function(){
    $(this).toggleClass('open');
    $(this).next('.slidblc').children('.roadmap__list--menu').slideToggle();

  });

  $('.terms__list li').click(function(){
    $(this).toggleClass('open');
    $(this).find('.terms__list--menu').slideToggle();
    $(this).find('.terms__list--btn').toggleClass('open');

  });
}
accordion();


// ページ内スクロール
$(function () {
  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});




// $(function(){
//   load_effect();
//   $(window).scroll(function (){
//       scroll_effect();
//   });
// });

// //ふわっとロード
// function load_effect(){
//   var tt = $(window).scrollTop();
//   var hh = $(window).height();
//   $('.load-fade').each(function(){
//       var yy = $(this).offset().top;
//       if (tt > yy - hh){
//           $(this).addClass('done');
//       }
//   });
//   $('.load-up').each(function(){
//       var yy = $(this).offset().top;
//       if (tt > yy - hh){
//           $(this).addClass('done');
//       }
//   });
// }

// //ふわっとスクロール
// function scroll_effect(){
//   var tt = $(window).scrollTop();
//   var hh = $(window).height();
//   $('.scroll-fade').each(function(){
//       var yy = $(this).offset().top+300;//効果発生開始タイミングを操作したい場合は数値を変更する
//       if (tt > yy - hh){
//           $(this).addClass('done');
//       }
//   });
//   $('.scroll-fade2').each(function(){
//       var yy = $(this).offset().top+390;//効果発生開始タイミングを操作したい場合は数値を変更する
//       if (tt > yy - hh){
//           $(this).addClass('done');
//       }
//   });
//   $('.scroll-fade3').each(function(){
//       var yy = $(this).offset().top+480;//効果発生開始タイミングを操作したい場合は数値を変更する
//       if (tt > yy - hh){
//           $(this).addClass('done');
//       }
//   });
//   $('.scroll-up').each(function(){
//       var yy = $(this).offset().top+400;//効果発生開始タイミングを操作したい場合は数値を変更する
//       if (tt > yy - hh){
//           $(this).addClass('done');
//       }
//   });
// }



$('#js_roadimg').on('click', function(){
      $('#image').fadeIn();
      $('.modal_bg').fadeIn();
});
$('#image').on('click', function(){
  $('#image').fadeOut();
  $('.modal_bg').fadeOut();
});
