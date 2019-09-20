function fixedForm() {
  if (window.innerWidth > 991 && $('.faq form.form').length){
    const left = $('.faq form.form')[0].getBoundingClientRect().left;
    const top = $('.faq form.form')[0].getBoundingClientRect().top-60;
    const width = $('.faq form.form')[0].getBoundingClientRect().width;
    const height = $('.faq form.form')[0].getBoundingClientRect().height;
    window.addEventListener('scroll', function(){
      if(window.scrollY >= top) {
        $('.faq form.form').addClass('fixed');
        $('.faq form.form').css('width', width+'px');
        $('.faq form.form').css('left', left+'px');
        $('.faq .part.warning').css('padding-top', height+40+'px');
      } else {
        $('.faq form.form').removeClass('fixed');
        $('.faq form.form').css('left', 'auto');
        $('.faq .part.warning').css('padding-top', '0px');
      }
    });
  }
}

export default fixedForm();