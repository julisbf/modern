$(document).ready(function () {
  const topBarHeight = $('#top-bar').height();
  const imgSize = ['w_596','w_964','w_1267','w_1440','w_1920'];
  let width = $(window).width(); 
  let currentSize = '';

  $('footer').append( `<small>Copyright &copy; ${(new Date).getFullYear()} Modern. All Rights Reserved.</small>`);
  
  $('.hero__btn').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - topBarHeight}, 0, 'linear');
    $('#top-bar').addClass('top-bar--show');
  });

	$(window).scroll(function () {
    if ($(this).scrollTop() > topBarHeight) { 
      $('#top-bar').addClass('top-bar--show');
    } else {
      $('#top-bar').removeClass('top-bar--show');
    }
  });

  $('[id^=thumb]').each(function(){ 
    let oldUrl = $(this).attr('href'); 
    let newUrl = '';
    const oldSize = 'w_1920';

    if(width >= 1920) {
      newUrl = oldUrl.replace(oldSize, imgSize[4]); 
      currentSize = imgSize[4];
    } else if(width <= 1920 && width >= 1440) {
      newUrl = oldUrl.replace(oldSize, imgSize[3]); 
      currentSize = imgSize[3];
    } else if(width < 1440 && width >= 1199) {
      newUrl = oldUrl.replace(oldSize, imgSize[2]); 
      currentSize = imgSize[2];
    } else if(width < 1199 && width >= 992) {
      newUrl = oldUrl.replace(oldSize, imgSize[1]); 
      currentSize = imgSize[1];
    } else {
      newUrl = oldUrl.replace(oldSize, imgSize[0]); 
      currentSize = imgSize[0];
    }

    $(this).attr('href', newUrl);
  });
  


  $('[data-fancybox]').fancybox({
    protect: true,
    buttons : [
      'zoom',
      'close'
    ]
  });


  $('[data-fancybox="Status"]').fancybox({
     protect: true,
    infobar: false,
    afterLoad : function( instance, current ) {
      instance.addContent([{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_100,c_scale,${currentSize}/v1612202276/modern/gallery/2_Status.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612202283/modern/gallery/3_Status.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_100,c_scale,${currentSize}/v1612202295/modern/gallery/4_Status.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612202280/modern/gallery/5_Status.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612202288/modern/gallery/1_Status.jpg`
      }]);
    }
  });

  $('[data-fancybox="Huarache"]').fancybox({
     protect: true,
    infobar: false,
    afterLoad : function( instance, current ) {
      instance.addContent([{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_100,c_scale,${currentSize}/v1612202961/modern/gallery/2_Huarache.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_100,c_scale,${currentSize}/v1612202966/modern/gallery/3_Huarache.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_100,c_scale,${currentSize}/v1612202963/modern/gallery/1_Huarache.jpg`
      }]);
    }
  });

  $('[data-fancybox="Bang"]').fancybox({
     protect: true,
    infobar: false,
    afterLoad : function( instance, current ) {
      instance.addContent([{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612205581/modern/gallery/2_Bang.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612205579/modern/gallery/3_Bang.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612205610/modern/gallery/1_Bang.jpg`
      }]);
    }
  });

  $('[data-fancybox="Deerupt"]').fancybox({
     protect: true,
    infobar: false,
    afterLoad : function( instance, current ) {
      instance.addContent([{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612217428/modern/gallery/2_Deerupt.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612217435/modern/gallery/3_Deerupt.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612217431/modern/gallery/1_Deerupt.jpg`
      }]);
    }
  });

  $('[data-fancybox="Swatch"]').fancybox({
     protect: true,
    infobar: false,
    afterLoad : function( instance, current ) {
      instance.addContent([{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612205758/modern/gallery/2_Swatch.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612205986/modern/gallery/3_Swatch.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612205758/modern/gallery/4_Swatch.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612205763/modern/gallery/1_Swatch.jpg`
      }]);
    }
  });

  $('[data-fancybox="PrimeKnit"]').fancybox({
     protect: true,
    infobar: false,
    afterLoad : function( instance, current ) {
      instance.addContent([{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/2_PrimeKnit.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121578/modern/gallery/3_PrimeKnit.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121572/modern/gallery/4_PrimeKnit.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121542/modern/gallery/1_PrimeKnit.jpg`
      }]);
    }
  });

  $('[data-fancybox="AIAIAI"]').fancybox({
     protect: true,
    infobar: false,
    afterLoad : function( instance, current ) {
      instance.addContent([{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121541/modern/gallery/2_AiAiAi.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121550/modern/gallery/3_AiAiAi.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:good,c_scale,${currentSize}/v1612121557/modern/gallery/4_AiAiAi.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121541/modern/gallery/1_AiAiAi.jpg`
      }]);
    }
  });

  $('[data-fancybox="Alessi"]').fancybox({
     protect: true,
    infobar: false,
    afterLoad : function( instance, current ) {
      instance.addContent([{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/2_Alessi.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/3_Alessi.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/4_Alessi.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/1_Alessi.jpg`
      }]);
    }
  });

  $('[data-fancybox="Avengers"]').fancybox({
     protect: true,
    infobar: false,
    afterLoad : function( instance, current ) {
      instance.addContent([{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/2_Avengers.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/3_Avengers.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/4_Avengers.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/1_Avengers.jpg`
      }]);
    }
  });

  $('[data-fancybox="Eight"]').fancybox({
     protect: true,
    infobar: false,
    afterLoad : function( instance, current ) {
      instance.addContent([{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/2_Eight.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/1_Eight.jpg`
      }]);
    }
  });

  $('[data-fancybox="Ruby"]').fancybox({
     protect: true,
    infobar: false,
    afterLoad : function( instance, current ) {
      instance.addContent([{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/2_Ruby.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/3_Ruby.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/4_Ruby.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/1_Ruby.jpg`
      }]);
    }
  });

  $('[data-fancybox="R2"]').fancybox({
     protect: true,
    infobar: false,
    afterLoad : function( instance, current ) {
      instance.addContent([{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/2_R2.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/3_R2.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/4_R2.jpg`
      },{
        'type' : 'image', 
        'src'  : `https://res.cloudinary.com/dnlmdpqac/image/upload/q_auto:best,c_scale,${currentSize}/v1612121560/modern/gallery/1_R2.jpg`
      }]);
    }
  });
});