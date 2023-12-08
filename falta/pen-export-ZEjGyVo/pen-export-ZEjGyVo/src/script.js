(function() {
  var headerPadding = 60;
  var headerBaseFontSize = 30;
  var minHeaderPadding = 20;

  $(window).on('scroll', function() {
    var padding = Math.max(minHeaderPadding, headerPadding - ($(window).scrollTop()/2));
    var delta = 1 - ((padding - minHeaderPadding) / (headerPadding - minHeaderPadding));

    var fontSize = headerBaseFontSize - (10*delta);

    $('header').css({
      padding: padding + 'px ' + headerPadding + 'px',
      fontSize: fontSize
    });

    $('header p').css({
      marginTop: -25*delta,
      opacity: 1 - (1*delta+.2)
     });

    $('header nav a').css({
      fontSize: 55 + (20*delta) + '%'
    })

    requestAnimationFrame(function() {
      $('main').css('paddingTop', $('header').outerHeight());
    })
  }).trigger('scroll');
})();