$(document).ready(function(){
    /*for the sticky*/
    $('.js--section-features').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
            
        }
    }, {offset: '60px;'
    });
    
    /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
*/
 /*Scroll on buttons*/
    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });
    
    $('.js--scroll-to-start').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1000);
        
    });
    /*Animations on scroll*/
    
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    })
    
});



