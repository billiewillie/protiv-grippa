export default $(".faq ul.list li.item").click(function(e) {
  e.preventDefault();
  let $this = $(this);

  if ($this.hasClass("open")) {
    $this.removeClass("open");
    $this.children('p').slideUp();
  } else {
    $this.children('p').slideDown();
    $this.addClass("open");
  }
});