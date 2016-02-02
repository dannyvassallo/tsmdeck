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
    //Navigation
    anchors: ['intro', 'whatwedo', 'sharecontest'],
    navigation: true,
    navigationPosition: 'right',
    loopBottom: true,
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
      if(anchorLink == 'sharecontest'){
          // remove classes from below
          $('#what-we-do-img').removeClass('animated fadeInUp');
          $('#what-logo').removeClass('animated fadeInLeft');
          $('#what-info-text').removeClass('animated fadeInRight');
      }
    }
  });
});

// Get tour dates for demo

$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "dates.txt",
    dataType: "text",
    success: function(data){
      addDatesToDropDown(data);
    }
  });
});

function addDatesToDropDown(data){
  var parsed = $.csv.toObjects(data);
  $(parsed).each(function(){
    var venue = this.venue;
    $('#tour-dropdown').append($('<option>', {
      value: venue,
      text : venue
    }));
    $('select').material_select();
    $('.dropdown-content li').on('click', function(){
      $('#tour-input').val($('.select-dropdown').val());
      $('#tour-input').next('.error-box').next('span').html('');
    });
  });
}


// Fix inputs
$('input').focus(function(){
  if(this.type != 'checkbox'){
    var query = this.id;
    $("label[for='"+query+"']").addClass('active');
  }
}).blur(function(){
  if($(this).val() != ''){
    // do nothing
  } else if(this.type != 'checkbox'){
    var query = this.id;
    $("label[for='"+query+"']").removeClass('active');
  } else {
    var query = this.id;
    $("label[for='"+query+"']").removeClass('active');
  }
});
