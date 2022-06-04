// $('#blogCarousel').carousel({
//     interval: 5000
// });
// testimonial
$(document).ready(function(){
    $(".testimonial .indicators li").click(function(){
      var i = $(this).index();
      var targetElement = $(".testimonial .tabs li");
      targetElement.eq(i).addClass('active');
      targetElement.not(targetElement[i]).removeClass('active');
              });
              $(".testimonial .tabs li").click(function(){
                  var targetElement = $(".testimonial .tabs li");
                  targetElement.addClass('active');
                  targetElement.not($(this)).removeClass('active');
              });
          });
  $(document).ready(function(){
      $(".slider .swiper-pagination span").each(function(i){
          $(this).text(i+1).prepend("0");
      });
  });
// contact part
  document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
// //   smooth scrolling effect
// $('#home a').on('click', function(event){
//     if(this.hash !==''){
//         event.preventDefault();

//         const hash= this.hash;

//         $('html, body').animate(
//             {
//             scrollTop: $(hash).offset().top -15
//              },
//              1100
//              );
//     }
// });
// Menu
const navbar= document.querySelector('.navbar');
const closeMenu= document.querySelector('.closeMenu');
const openMenu= document.querySelector('.openMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
  navbar.style.display= 'flex';
  navbar.style.top= '0';

}
function close(){
  navbar.style.top='-100%';
}