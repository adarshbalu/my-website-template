$(document).ready(function() {
    
    
    /*STICKY NAVIGATION*/
    
    
    $('.js--section-features').waypoint(function(direction) {
        
                                if(direction=="down") {
                                    
                                    $('nav').addClass('sticky');
                                    
                                } 
                                else {
                                    
                                    $('nav').removeClass('sticky');
                                    
                                    
                                }
                                
                            }
                                ,{
                                    
                                    offset:'60px;'
                                    
                                
                               
                                       
                                });
    
    
    
    /*SCROLL TO SECTION ON BUTTON CLICK*/
    
    
                      
                      $('.js--scroll-to-plans').click(function(){
                                                     
                                                     $('html,body').animate({
        
                                                        scrollTop:$('.js--section-plans').offset().top } , 1000 );
    
                                                     
                                                     });
    
                     $('.js--scroll-to-para').click(function(){
                                                     
                                                     $('html,body').animate({
        
                                                        scrollTop:$('.js--section-features').offset().top } , 1000 );
    
                                                     
                                                     });
                      
                      
    /*SMOOTH SCROLL USING ID AND ANCHORS */
                
           /* $(function(){    
              $('a[href*=#]: not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                   || location.hostname == this.hostname) {

                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                       if (target.length) {
                         $('html,body').animate({
                             scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
            });
    */
    
    
    
    /*ANIMATION ON SCROLL*/
    
    
    
    $('.js--wp-1').waypoint(function(direction) {
        
        $('.js--wp-1').addClass('animated fadeIn');
    }
    ,{
        offset:'50%'
    }) ;
    
    
    $('.js--wp-2').waypoint(function(direction) {
        
        $('.js--wp-2').addClass('animated fadeInUp');
    }
    ,{
        offset:'50%'
    }) ;
    
    
    
    $('.js--wp-3').waypoint(function(direction) {
        
        $('.js--wp-3').addClass('animated fadeIn');
    }
    ,{
        offset:'50%'
    }) ;
    
    
    
    $('.js--wp-4').waypoint(function(direction) {
        
        $('.js--wp-4').addClass('animated pulse');
    }
    ,{
        offset:'50%'
    });
    
    /*NAVIGATION MENU*/
    
    
    $('.js--mobile-nav-icon').click(function(){
                                   
                                   var nav=$('.js--main-nav');
                                    var icon=$('.js--mobile-nav-icon i');
                                    nav.slideToggle(200);
                                    if(icon.hasClass('icon-md-menu')){
                                        icon.addClass('icon-md-close');
                                        icon.removeClass('icon-md-menu');
                                        
                                        
                                    } 
                                    else
                                    {
                                        icon.addClass('icon-md-menu');
                                        icon.removeClass('icon-md-close');
                                    }
    
    
});
    
    
    
    });