(function() {
  $('.button-slide').on('click', function() {
    $('html, body').animate({
        scrollTop: $('.profile').offset().top - 20
    }, 800);
  });
  $().on('click', function() {
    $('srticle').animate({
        scrollTop: $('.site-footer').offset().top - 20
    }, 800);
  });
  $('.find').on('click', function() {
    $('html, body, article').animate({
        scrollTop: $('#sosial').offset().top
    }, 750);
  });

})();
