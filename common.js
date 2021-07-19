$(function() {
  //外部ページから遷移
  var hash = location.hash,
      headerHeight = $('header').outerHeight();
  if(hash) {
    $('body,html').stop().scrollTop(0);
    var target = $(hash),
        targetPos = target.offset().top - headerHeight;
    $('body,html').animate({scrollTop:targetPos},400);
    return false;
  }
  
  //ページ内遷移
  
  $('a[href^="#"]').on('click',function() {
    var href = $(this).attr('href'),
        target = $(href),
        targetPos = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:targetPos},400);
    return false;
  })
})