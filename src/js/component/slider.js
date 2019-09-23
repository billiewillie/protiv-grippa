import "slick-carousel";

function slider() {
  if($('.company ul.slider').length) {
    $('.company ul.slider').slick({
      autoplay: true,
    });
  }
}

export default slider();