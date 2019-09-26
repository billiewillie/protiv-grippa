function fixedForm() {
  if (window.innerWidth > 991 && $('.faq form.form').length){
    const left = $('.faq .warning')[0].getBoundingClientRect().left;
    const top = $('.faq .warning')[0].getBoundingClientRect().top-60;
    const width = $('.faq .warning')[0].getBoundingClientRect().width;
    const height = $('.faq .warning')[0].getBoundingClientRect().height;
    window.addEventListener('scroll', function(){
      if(window.scrollY >= top) {
        $('.faq .warning').addClass('fixed');
        $('.faq .warning').css('width', width+'px');
        $('.faq .warning').css('left', left+'px');
      } else {
        $('.faq .warning').removeClass('fixed');
        $('.faq .warning').css('left', 'auto');
      }
    });
  }
}

export default fixedForm();