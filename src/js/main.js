import showList from "./component/showlist";
import fixedform from "./component/fixedform";
import slider from "./component/slider";
import showArticle from "./component/articles";

window.addEventListener('load', function() {
    const warning = document.querySelector('section.warning');
    const warningCheck = warning.querySelector('.check input');
    const link = document.querySelector('nav#navigation .link');
    const list = document.querySelector('nav#navigation ul.list');
    warningCheck.addEventListener('click', function() {
        warning.style.display = 'none';
        localStorage.setItem('display', 'none');
    });

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

    if($('.articles')){
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
        });
    }

    $('a.scroll').on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        var attr = $this.attr('href');
        $("html, body").animate({
          scrollTop: $(attr).offset().top-100
        }, 1000);
    });
});

function fixedFlag() {
    if (window.innerWidth > 991 && $('.diploma').length){
        const left = $('li.buy')[0].getBoundingClientRect().left;
        const width = $('li.buy')[0].getBoundingClientRect().width;
        $('.diploma').css('width', width+'px');
        $('.diploma').css('left', left+'px');
        window.addEventListener('scroll', function(){
            if(window.pageYOffset > 0) {
                $('.diploma').addClass('hidden');
            } else {
                $('.diploma').removeClass('hidden');
            }
        });
    }
}
  
fixedFlag();

var getSpan1 = $(".wpcf7-form-control-wrap.your-name").next("span.bar").detach();
$(".wpcf7-form-control-wrap.your-name").append(getSpan1);
var getLabel1 = $(".wpcf7-form-control-wrap.your-name").next("label").detach();
$(".wpcf7-form-control-wrap.your-name").append(getLabel1);

var getSpan2 = $(".wpcf7-form-control-wrap.your-email").next("span.bar").detach();
$(".wpcf7-form-control-wrap.your-email").append(getSpan2);
var getLabel2 = $(".wpcf7-form-control-wrap.your-email").next("label").detach();
$(".wpcf7-form-control-wrap.your-email").append(getLabel2);

var getLabel3 = $(".wpcf7-form-control-wrap.your-message").next("label").detach();
$(".wpcf7-form-control-wrap.your-message").append(getLabel3);


if($('.feedback .open a')){
    $('.feedback .open a').on('click', function(e) {
        $('li.item.hidden').each(function (i, el) {
            $(el).removeClass('hidden');
            $('.feedback .open a').css('display', 'none')
        })
    })
}