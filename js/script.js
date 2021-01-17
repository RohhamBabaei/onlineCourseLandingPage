//===================================== Sticky navBar ============================================

let navOffsetTop = $('.header').height() + 50;

function navBarFixed(){
   if($('.header').length){

      $(window).scroll(function(){
         let scroll = $(window).scrollTop();
         if(scroll>=navOffsetTop){
            $('.header .mainMenu').addClass("navbar-fixed");
         }else{
            $('.header .mainMenu').removeClass("navbar-fixed");
         }
      })

   }
}

navBarFixed();

//=============================================== Enable ToolTips ==================================
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//============================ Initial Owl Carousel =========================
$('.mainContainer .recomArea .owl-carousel').owlCarousel({
   loop: true,
   autoplay: true,
   dots: true,
   responsive:{
      0:{
         items:1 
      }
   }
});
