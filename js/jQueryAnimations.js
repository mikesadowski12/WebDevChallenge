//Resize the text of the member's name if it is too long to fit properly
$(function() {
    var span = $('span');
    var fontSize = parseInt(span.css('font-size'));

    do {
        fontSize--;
        span.css('font-size', fontSize.toString() + 'px');
    } while (span.width() >= 400);
});

//Animate the scrolling of href
$(document).ready(function() {
    $(document).on('click', 'a[href^="#"]', function(e) {

      var id = $(this).attr('href');

      var $id = $(id);
      if ($id.length === 0) {
          return;
      }

      // prevent standard hash navigation (avoid blinking in IE)
      e.preventDefault();

      var pos = $id.offset().top;

      setTimeout(function(){
        $('body, html').animate({scrollTop: pos}, "slow");
      },500);
    });
});
