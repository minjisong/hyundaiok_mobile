//panel
$(document).ready(function(){

    var w = $('.panel').width();
    $('.panel').css('right',-w);
    $('.blackBg').fadeOut(0);
    
    $('.subNav').slideUp(0);
 
    var cnt = 0;
    
    $('.panelIcon').click(function(){
        if(cnt==0){
            $(this).children().addClass('on');
            cnt=1;
           
            $('.blackBg').fadeIn(100);     
            $('.panel').animate({
                right:0 
            },'fast',function(){
                $('html, body').css({
                width:'100%',
                overflow:'hidden',
                height:'100%',
                position:'fixed'
                });
            });
        }else{
            $('.blackBg').trigger('click');
            
        };
        
    });
    
    $('.blackBg').click(function(){
        $('.panel').animate({
            right:-w
        },'fast',function(){
            $('.blackBg').fadeOut(100);
            $('html, body').css({
                overflow:'auto',
                height:'auto',
                position:'static'
            });
            
            $('.mNav > ul > li').removeClass('on');
            $('.subNav').slideUp(0);
            
            
            $('.panelIcon > span').removeClass('on');
            cnt=0;
            
        })
    });
    
    
    $('.topNav').click(function(){
       
        $('.mNav > ul > li').removeClass('on');
        $(this).parent().addClass('on')
        
        var is = $(this).next().is(':hidden'); 
        
        if(is){
        $('.subNav').slideUp(0);
        $(this).next().slideDown('fast');
        }else{
            $('.mNav > ul > li').removeClass('on');
            $('.subNav').slideUp(0);
        }
    });
    

});//panel

//loginopen, joinopen
$(function(){
    $('.loginopen').colorbox({
        iframe:true,
        innerWidth:'100%',
        innerHeight:'100%',
        scrolling:false
    });
});
    $(function(){
    $('.joinopen').colorbox({
        iframe:true,
        innerWidth:'100%',
        innerHeight:'100%'
    });
})





