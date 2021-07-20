$(function() {
  var hash = location.hash,
      headerHeight = $('header').outerHeight();
      
  //ページ内遷移
  $('a[href^="#"]').on('click',function() {
    var href = $(this).attr('href'),
        target = $(href),
        targetPos = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:targetPos},400);
    return false;
  })
  //外部ページから遷移
  if(hash) {
    $('body,html').stop().scrollTop(0);
    var target = $(hash),
        targetPos = target.offset().top - headerHeight;
    setTimeout(function() {
      $('body,html').animate({scrollTop:targetPos},400);
    },400)
  }
})
