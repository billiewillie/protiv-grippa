window.addEventListener('load', function() {
    const warning = document.querySelector('section.warning');
    const warningCheck = warning.querySelector('.check input');
    const link = document.querySelector('nav#navigation .link');
    const list = document.querySelector('nav#navigation ul.list');
    warningCheck.addEventListener('click', function() {
        warning.style.display = 'none';
        localStorage.setItem('display', 'none');
    });

    if(localStorage.getItem('display') !== null) {
        const display = localStorage.getItem('display')
        warning.style.display = display;
    }

    link.addEventListener('mouseover', function(e){
        link.classList.add('first__link');
    });
    list.addEventListener('mouseover', function(e){
        link.classList.add('first__link');
    });
    list.addEventListener('mouseleave', function(e){
        link.classList.remove('first__link');
    });
    link.addEventListener('mouseleave', function(e){
        link.classList.remove('first__link');
    });

    if($('.instructions')){
        $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tab__list a').click(function(e){
            e.preventDefault();
            var $this = $(this),
                tabgroup = '#'+$this.parents('.tab__list').data('tabgroup'),
                others = $this.closest('li').siblings().children('a'),
                target = $this.attr('href');
            others.removeClass('active');
            $this.addClass('active');
            $(tabgroup).children('div').hide();
            $(target).show();

            if($('.tab__list > li:last-of-type a').hasClass('active')) {
                $('.instructions').addClass('clicked');
            } else {
                $('.instructions').removeClass('clicked');
            }
        });
    }

    
});