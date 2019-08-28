//mslider
$(function(){
    $(window).load(function() {
    $('.mslider .flexslider').flexslider({
        directionNav: false,
        slideshowSpeed: 5000
    });
  });
})


//swiper

$(function(){
    var swiper = new Swiper('.swiper-container', { 
        spaceBetween: 20,
        navigation: { 
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev', 
        }, 
        pagination: { 
            el: '.swiper-pagination', 
        }, 
        loop:true           
    }); 
});