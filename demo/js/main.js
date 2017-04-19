$(document).ready(function() {
  $('h1').on('click', function() {
    $('h1').css("background", "white");
    $('h1').css("color", "#313131");
    $(this).css("background", "#313131");
    $(this).css("color", "white");
  });

  $('img').on('click', function() {
    $(this).animate({opacity: '1', height: '100%', width: '100%'}, 1000, function() {
      $(this).animate({height: '35%', width: '35%'}, 2000);
    })
    console.log('here');
  })
});
