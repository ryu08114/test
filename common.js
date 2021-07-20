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
        target = $(href),
        targetPos = target.offset().top - headerHeight;
    
    scroll(targetPos);
  })
  //外部ページから遷移（ハッシュがある場合）
  if(hash) {
    $('body,html').stop().srcrollTop(0);
    var target = $(hash),
        targetPos = target.offset().top - headerHeight;
    
    setTimeout(function() {
      scroll(targetPos);
    },400)
  }
  function scroll(targetPos) {
    $('body,html').stop().animate({scrollTop:targetPos},400);
  }
})
