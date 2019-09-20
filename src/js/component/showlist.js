function showList() {
  if(document.querySelector('.faq')) {
    const faq = document.querySelector('.faq');
    const arr = Array.from(faq.querySelectorAll('li.item'));
    const button = faq.querySelector('.block a');

    for(let i = 0; i < arr.length; i++) {
      if(i >= 7) {
        arr[i].style.display = 'none';
      }
      button.addEventListener('click', function() {
        arr[i].style.display = 'block';
        button.style.display = 'none';
      });
    }
  }
}

export default showList();