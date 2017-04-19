$(document).ready(function() {
  $('h1').on('click', function() {
    $('h1').css("background", "white");
    $('h1').css("color", "#313131");
    $(this).css("background", "#313131");
    $(this).css("color", "white");
  });

  $('img').on('click', function() {
    $(this).css('transform', 'scale(2)');
  })
});
