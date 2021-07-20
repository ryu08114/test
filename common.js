$(function() {
  var hash = location.hash,
      headerHeight = 0;
  
  //headerが追従する場合、headerの高さを取得（追従しない場合は不要）
  if($('header').length > 0) {
    headerHeight = $('header').outerHeight();
  }
      
  //ページ内遷移
  $('a[href^="#"]').on('click',function() {
    scrollToLink($($(this).attr('href')));
  })
  //外部ページから遷移（ハッシュがある場合）
  if(hash) {
    $('body,html').stop().animate({scrollTop:0},4);
    setTimeout(function() {
      scrollToLink($(hash));
    },400)
  }
  //スクロールする処理を関数化
  function scrollToLink(target) {
    var targetPos = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:targetPos},400);
  }
})
