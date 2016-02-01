//<![CDATA[
    $(window).load(function() { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});
    });
//]]>


function hideAll(){
  $('#tsm-logo').css('opacity', 0);
  $('#what-we-do-img').css('opacity', 0);
  $('#what-logo').css('opacity', 0);
  $('#what-info-text').css('opacity', 0);
}

$(function(){
  hideAll();
  // Init full page
  $('#fullpage').fullpage({
    anchors: ['intro'],
    afterLoad: function(anchorLink){
      var loadedSection = $(this);
      //using anchorLink
      if(anchorLink == 'intro'){
          // remove classes from below
          $('#what-we-do-img').removeClass('animated fadeInUp');
          $('#what-logo').removeClass('animated fadeInLeft');
          $('#what-info-text').removeClass('animated fadeInRight');
          // this section
          $('#tsm-logo').addClass('animated fadeInUp');
      }
      if(anchorLink == 'whatwedo'){
          // Hide previous elements
          $('#tsm-logo').removeClass('animated fadeInUp');
          // show current elements
          $('#what-logo').addClass('animated fadeInLeft');
          setTimeout(function(){
            $('#what-info-text').addClass('animated fadeInRight');
          }, 500);
          setTimeout(function(){
            $('#what-we-do-img').addClass('animated fadeInUp');
          }, 1000);
      }
    }
  });
});
