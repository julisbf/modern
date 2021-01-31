$(document).ready(function () {
  const topBarHeight = $('#top-bar').height();
  const imgSize = ['w_596','w_964','w_1267','w_1440','w_1920'];
  let width = $(window).width(); 
  
  $('.hero__btn').on('click', function(e) {
    console.log('trigger');
    e.preventDefault();
    $('body').animate({ scrollTop: $($(this).attr('href')).offset().top - topBarHeight}, 0, 'linear');
    $('#top-bar').addClass('top-bar--show');
  });

	$('body').scroll(function () {
    if ($(this).scrollTop() > topBarHeight) { 
      $('#top-bar').addClass('top-bar--show');
    } else {
      $('#top-bar').removeClass('top-bar--show');
    }
  });

  $('[id^=thumb]').each(function(){ 
    let oldUrl = $(this).attr("href"); // Get current url
    let newUrl = ''; // Create new url
    const oldSize = 'w_1920';

    if(width >= 1920) {
      newUrl = oldUrl.replace(oldSize, imgSize[4]); 
    } else if(width <= 1920 && width >= 1440) {
      newUrl = oldUrl.replace(oldSize, imgSize[3]); 
    } else if(width < 1440 && width >= 1199) {
      newUrl = oldUrl.replace(oldSize, imgSize[2]); 
    } else if(width < 1199 && width >= 992) {
      newUrl = oldUrl.replace(oldSize, imgSize[1]); 
    } else {
      newUrl = oldUrl.replace(oldSize, imgSize[0]); 
    }

    $(this).attr("href", newUrl); // Set herf value
  });
  


  $('[data-fancybox]').fancybox({
    protect: true,
    buttons : [
      'zoom',
      'close'
    ]
  });

  $('[data-fancybox="PrimeKnit"]').fancybox({
    afterShow : function( instance, current ) {
      console.info( instance );
      instance.addContent([{
        'type' : 'image', 
        'src'  : 'https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:eco,c_scale,w_1920/v1612121560/modern/gallery/2_PrimeKnit.jpg'
      },{
        
        'type' : 'image', 
        'src'  : 'https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:eco,c_scale,w_1920/v1612121560/modern/gallery/3_PrimeKnit.jpg'
      },{
        'type' : 'image', 
        'src'  : 'https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:eco,c_scale,w_1920/v1612121560/modern/gallery/4_PrimeKnit.jpg'
      }]);
    }
  });
});