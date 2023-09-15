$(document).ready(function(){
    $(".banner-slider").owlCarousel({
        items :1,
        autoplay:false,
        autoplayTimeout:2000,
        animateout:'fadeout',
    });


$(".destination").owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:2,
            nav:false
        },
        992:{
            items:3,
            nav:false,
            loop:false
        },
        1200:{
            items:3
        }
    }
});

 $(".organisation").owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:1,
            nav:false
        },
        992:{
            items:3,
            nav:false,
            loop:false
        }
    }
});

$(".slider").owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:2,
            nav:false
        },
        992:{
            items:3,
            nav:false,
            loop:false
        }
    }
});
$('.circuits').owlCarousel({
    items:2,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:2,
            nav:false
        }
       
    }  
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay')
});
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});


});

$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  })









