$(function(){
    $('.intbox01').addClass('on');
          
    $(window).scroll(function(){
        var stop = $(window).scrollTop();
                
        $('.brand > div').each(function(index){
               
            var otop =$(this).offset().top;
                 
            if(stop>= (otop - 530)){
                $(this).addClass('on');
            }
        })
    })
});