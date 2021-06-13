$(function(){


    //mixitup part start
    var containerEl = document.querySelector('.project-main');

    var mixer = mixitup(containerEl, {
        animation: {
            duration: 1000
        }
    });

//venobox
$('.venobox').venobox(); 

//Back to top
 $('.back-to-top').click(function(){
     $('html,  body').animate({scrollTop:0},5000);
 });

// Recent Post slider

$('.recent-post-main').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding:0,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              centerMode:false,
            }
        },
         {
             breakpoint: 992,
             settings: {
               slidesToShow: 2,
               centerMode:false,
             }
           },
           {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              centerMode:true,
            }
          },
      ]
});
		






});