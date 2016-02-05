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
  $('#share-contest').css('opacity', 0);
  $('#share-ipad').css('opacity', 0);
  $('#imac').css('opacity', 0);
  $('#spotifypromo2').css('opacity', 0);
  $('#imac-header').css('opacity', 0);
  $('#imac-text').css('opacity', 0);
  $('#hashtags').css('opacity', 0);
  $('#insta-text').css('opacity', 0);
  $('#hashtags2').css('opacity', 0);
  $('#insta-text2').css('opacity', 0);
  $('#game-text').css('opacity', 0);
  $('#game-headline').css('opacity', 0);
  $('#gamephone1').css('opacity', 0);
  $('#gamephone2').css('opacity', 0);
  $('#gamephone3').css('opacity', 0);
  $('#tech-head').css('opacity', 0);
  $('#sublime').css('opacity', 0);
  $('#terminal').css('opacity', 0);
  $('#security').css('opacity', 0);
  $('#socials').css('opacity', 0);
  $('#mobile').css('opacity', 0);
  $('#photoshop').css('opacity', 0);
  $('#design').css('opacity', 0);
  $('#analytics').css('opacity', 0);
  $('#work-title').css('opacity', 0);
  $('#tsm-video').css('opacity', 0);
  $('#project-slider').css('opacity', 0);
  $('#tsm-video2').css('opacity', 0);
  $('#project-slider2').css('opacity', 0);
  $('#thanks').css('opacity', 0);
  $('#contact-btn').css('opacity', 0);
}

$(function(){
  hideAll();
  // Init full page
  $('#fullpage').fullpage({
    //Navigation
    anchors: ['intro', 'whatwedo', 'sharecontest', 'spotify', 'instagram', 'games', 'technologies', 'work', 'contact'],
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
          $('#share-ipad').removeClass('animated fadeInDown');
          $('#share-contest').removeClass('animated fadeInUp');
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
          // remove classes from above and below
          $('#what-we-do-img').removeClass('animated fadeInUp');
          $('#what-logo').removeClass('animated fadeInLeft');
          $('#what-info-text').removeClass('animated fadeInRight');
          $('#imac').removeClass('animated fadeInUp');
          $('#imac-header').removeClass('animated fadeInLeft');
          $('#imac-text').removeClass('animated fadeInRight');
          $('#spotifypromo2').removeClass('animated fadeInUp');
          // show current
          $('#share-ipad').addClass('animated fadeInDown');
          setTimeout(function(){
            $('#share-contest').addClass('animated fadeInUp');
          }, 500);
      }
      if(anchorLink == 'spotify'){
          // remove classes from above and below
          $('#share-ipad').removeClass('animated fadeInDown');
          $('#share-contest').removeClass('animated fadeInUp');
          $('#insta-text').removeClass('animated fadeInRight');
          $('#hashtags').removeClass('animated fadeInLeft');
          $('#insta-text2').removeClass('animated fadeInRight');
          $('#hashtags2').removeClass('animated fadeInLeft');
          // show current
          setTimeout(function(){
            $('#imac').addClass('animated fadeInUp');
            $('#spotifypromo2').addClass('animated fadeInUp');
          }, 500);
          setTimeout(function(){
            $('#imac-text').addClass('animated fadeInRight');
          }, 1200);
          $('#imac-header').addClass('animated fadeInLeft');
      }
      if(anchorLink == 'instagram'){
          // remove classes from above
          $('#imac').removeClass('animated fadeInUp');
          $('#imac-header').removeClass('animated fadeInLeft');
          $('#imac-text').removeClass('animated fadeInRight');
          $('#spotifypromo2').removeClass('animated fadeInUp');
          $('#game-text').removeClass('animated fadeInUp');
          $('#game-headline').removeClass('animated fadeInDown');
          $('#gamephone1').removeClass('animated fadeInLeft');
          $('#gamephone2').removeClass('animated fadeInLeft');
          $('#gamephone3').removeClass('animated fadeInLeft');
          // show current
          setTimeout(function(){
            $('#insta-text').addClass('animated fadeInRight');
            $('#insta-text2').addClass('animated fadeInRight');
          }, 500);
          $('#hashtags').addClass('animated fadeInLeft');
          $('#hashtags2').addClass('animated fadeInLeft');
      }
      if(anchorLink == 'games'){
          // remove classes from above and below
          $('#hashtags').removeClass('animated fadeInLeft');
          $('#insta-text').removeClass('animated fadeInRight');
          $('#hashtags2').removeClass('animated fadeInLeft');
          $('#insta-text2').removeClass('animated fadeInRight');
          $('#tech-head').removeClass('animated rollIn');
          $('#sublime').removeClass('animated fadeInDown');
          $('#mobile').removeClass('animated fadeInUp');
          $('#terminal').removeClass('animated fadeInDown');
          $('#photoshop').removeClass('animated fadeInUp');
          $('#security').removeClass('animated fadeInDown');
          $('#design').removeClass('animated fadeInUp');
          $('#socials').removeClass('animated fadeInDown');
          $('#analytics').removeClass('animated fadeInUp');
          // show current
          $('#game-headline').addClass('animated fadeInDown');
          setTimeout(function(){
            $('#game-text').addClass('animated fadeInUp');
          }, 500);
          setTimeout(function(){
            $('#gamephone1').addClass('animated fadeInLeft');
          }, 1000);
          setTimeout(function(){
            $('#gamephone2').addClass('animated fadeInLeft');
          }, 1300);
          setTimeout(function(){
            $('#gamephone3').addClass('animated fadeInLeft');
          }, 1600);
      }
      if(anchorLink == 'technologies'){
          // remove classes from above and below
          $('#game-text').removeClass('animated fadeInUp');
          $('#game-headline').removeClass('animated fadeInDown');
          $('#gamephone1').removeClass('animated fadeInLeft');
          $('#gamephone2').removeClass('animated fadeInLeft');
          $('#gamephone3').removeClass('animated fadeInLeft');
          $('#work-title').removeClass('animated fadeInDown');
          $('#tsm-video').removeClass('animated fadeInUp');
          $('#project-slider').removeClass('animated rotateInDownRight');
          $('#tsm-video2').removeClass('animated fadeInUp');
          $('#project-slider2').removeClass('animated rotateInDownRight');
          // show current
          $('#tech-head').addClass('animated rollIn');
          setTimeout(function(){
            $('#sublime').addClass('animated fadeInDown');
            $('#mobile').addClass('animated fadeInUp');
          }, 1000);
          setTimeout(function(){
            $('#terminal').addClass('animated fadeInDown');
            $('#photoshop').addClass('animated fadeInUp');
          }, 1250);
          setTimeout(function(){
            $('#security').addClass('animated fadeInDown');
            $('#design').addClass('animated fadeInUp');
          }, 1500);
          setTimeout(function(){
            $('#socials').addClass('animated fadeInDown');
            $('#analytics').addClass('animated fadeInUp');
          }, 1750);
      }
      if(anchorLink == 'work'){
          // remove classes from above and below
          $('#tech-head').removeClass('animated rollIn');
          $('#sublime').removeClass('animated fadeInDown');
          $('#mobile').removeClass('animated fadeInUp');
          $('#terminal').removeClass('animated fadeInDown');
          $('#photoshop').removeClass('animated fadeInUp');
          $('#security').removeClass('animated fadeInDown');
          $('#design').removeClass('animated fadeInUp');
          $('#socials').removeClass('animated fadeInDown');
          $('#analytics').removeClass('animated fadeInUp');
          $('#thanks').removeClass('animated fadeInRight');
          $('#contact-btn').removeClass('animated fadeInLeft');
          // show current
          $('#work-title').addClass('animated fadeInDown');
          setTimeout(function(){
            $('#tsm-video').addClass('animated fadeInUp');
            $('#tsm-video2').addClass('animated fadeInUp');
          }, 500);
          setTimeout(function(){
            $('#project-slider').addClass('animated rotateInDownRight');
            $('#project-slider2').addClass('animated rotateInDownRight');
          }, 1000);
      }
      if(anchorLink == 'contact'){
          // remove classes from above
          $('#work-title').removeClass('animated fadeInDown');
          $('#tsm-video').removeClass('animated fadeInUp');
          $('#project-slider').removeClass('animated rotateInDownRight');
          $('#tsm-video2').removeClass('animated fadeInUp');
          $('#project-slider2').removeClass('animated rotateInDownRight');
          // show current
          $('#thanks').addClass('animated fadeInRight');
          $('#contact-btn').addClass('animated fadeInLeft');
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

// get portfolio from TSM

$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://www.trendsettermarketing.net/api/?json=get_posts&post_type=us_portfolio&count=10&order=desc",
    dataType: "json",
    success: function(data){
      var posts = data.posts;
      $(posts).each(function(){
        var title = this.title.replace('&#8221;', '\"').replace('&#8220;', '\"').replace('&#8217;', '\'');
        var image = this.thumbnail_images.medium_large.url;
        var liConstructor = "<li><img src=\""+image+"\"><div class=\"caption center-align\"><h5 class=\"light grey-text text-lighten-3\">"+title+"</h5></div></li>";
        $('.slides').append(liConstructor);
      });
      $('.slider').slider({
        indicators: false
      });
    }
  });
});
