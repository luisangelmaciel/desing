jQuery(document).ready(function( $ ) {

    /**
     * Mobile Nav
     *
     * Hubspot Standard Toggle Menu
     */

    $('.custom-menu-primary').addClass('js-enabled'); 
    $('.header-container-wrapper').before('<div class="mobile-trigger cta_border_button" tabindex="0"><button class="open-opt" aria-label="abrir menu"><svg id="icon-menu" viewBox="0 0 26 20" style="fill: var(--color-primario);"><path d="M1.3.638C.582.638 0 1.205 0 1.904c0 .7.582 1.267 1.3 1.267h23.4c.718 0 1.3-.567 1.3-1.267S25.418.638 24.7.638H1.3zm0 8.233c-.718 0-1.3.567-1.3 1.267s.582 1.266 1.3 1.266h23.4c.718 0 1.3-.567 1.3-1.266 0-.7-.582-1.267-1.3-1.267H1.3zm0 8.233c-.718 0-1.3.568-1.3 1.267 0 .7.582 1.267 1.3 1.267h23.4c.718 0 1.3-.567 1.3-1.267s-.582-1.267-1.3-1.267H1.3z" fill-rule="nonzero"></path></svg></button><button aria-label="cerrar menu" class="close-opt"><svg id="icon-close" viewBox="0 0 26 20" style="fill: var(--color-primario);"><path d="M19.169 2.623c.507-.508.518-1.32.023-1.815-.494-.495-1.307-.484-1.815.023L.831 17.377c-.507.508-.518 1.32-.023 1.815.494.495 1.307.484 1.815-.023L19.169 2.623zM2.623.83C2.115.324 1.303.313.808.808.313 1.302.324 2.115.83 2.623l16.546 16.546c.508.507 1.32.518 1.815.023.495-.494.484-1.307-.023-1.815L2.623.831z" fill-rule="nonzero"></path></svg></button></div>');
    $('.custom-menu-primary .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"><i></i></div>');
    $('.mobile-trigger').click(function() {
        $(this).next('.custom-menu-primary .hs-menu-wrapper').slideToggle(0);
        $('body').toggleClass('mobile-open');
        $('.child-trigger').removeClass('child-open');
        $('.hs-menu-children-wrapper').slideUp(200);
        return false;
    });
    
    $('.child-trigger').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });
    


    

    /**
     * Small Header on Page Scroll
    */
    
    $(window).scroll(function(){

        // Variables
        var $body = $("body");
        var windowScrollTop = $(window).scrollTop() > 15;
        var secondRowOffset = $(".body-container .row-fluid-wrapper:nth-child(1)").offset();

        if(secondRowOffset && windowScrollTop > secondRowOffset.top){
            $body.addClass("small-header");
        }
        else {
            $body.removeClass("small-header");
        }
    });


    /**
    * Blog subscribe
    */

    // Set placeholder text for email input
    window.onload = function () {
    $('.widget-type-blog_subscribe .input :input[type="email"]').attr("placeholder", "Email").attr('style', 'text-align:center;');};

});


$(document).ready(function() {
    if ($('.notification-top-bar').length){
       $('body').addClass('notification-bar-true');
    }
});



$(document).ready(function(){
  if(!sessionStorage.alertShown) {
     $(".notification-top-bar").fadeIn("slow").append("");
   $(".close a").click(function() {
      $(".banner").fadeOut("fast");
       $("body").removeClass("notification-bar-true");
     sessionStorage.alertShown = true; //set to true so they aren't shown again
   })
}
  else{
   $(".notification-top-bar").css("display", "none");
    $("body").removeClass("notification-bar-true");
  }
});