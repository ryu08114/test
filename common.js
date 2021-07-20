$(function() {
  var hash = location.hash,
      headerHeight = 0;
      
  //ページ内遷移
  $('a[href^="#"]').on('click',function() {
    //headerがfixedの場合、headerの高さを取得
    if($('header').css('position') == 'fixed') {
      headerHeight = $('header').outerHeight();
    }
    var href = $(this).attr('href'),
        target = $(href);
    scroll(target);
  })
  //外部ページから遷移（ハッシュがある場合）
  if(hash) {
    $('body,html').stop().srcrollTop(0);
    var target = $(hash);
    setTimeout(function() {
      scroll(target);
    },400)
  }
  //スクロールする処理を関数化
  function scroll(target) {
    var targetPos = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:targetPos},400);
  }
})
