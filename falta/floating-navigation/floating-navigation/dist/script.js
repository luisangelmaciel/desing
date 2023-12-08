var floatNav = $('.float-nav'),
    mainContent = $('.main-content');

floatNav.on('click', function(e) {
  $(this).toggleClass('closed');
  e.stopPropagation();
  e.preventDefault();
});

mainContent.on('click', function() {
  if (!floatNav.hasClass('closed')) floatNav.addClass('closed');
});