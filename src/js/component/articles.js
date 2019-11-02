function showArticle() {
  if(document.querySelector('.articles')) {
    let btn = `<div class="show"><a>Больше полезных статей</a></div>`;
    const listArr = Array.from(document.querySelectorAll('ul.list'));
    const AMOUNT = 10;
    
    for(let i = 0; i < listArr.length; i++) {
      if(listArr[i].children.length > AMOUNT) {
        listArr[i].insertAdjacentHTML('afterend', btn);
        for(let j = 0; j < AMOUNT; j++) {
          listArr[i].children[j].classList.add('open');
        }
      } else {
        for(let j = 0; j < listArr[i].children.length; j++) {
          listArr[i].children[j].classList.add('open');
        }
      }
    }

    const btnsArr = Array.from(document.querySelectorAll('.show a'));

    for(let i = 0; i < btnsArr.length; i++) {
      let remainArticles = Array.from(btnsArr[i].parentElement.parentElement.children[0].children).length;
      let added = 0;
      
      btnsArr[i].addEventListener('click', () => {
        let notOpen = Array.from(btnsArr[i].parentElement.parentElement.children[0].children).filter(item => !item.classList.contains('open'));
        if(notOpen.length > AMOUNT) {
          for(let j = 0; j < AMOUNT; j++) {
            notOpen[j].classList.add('open');
          }
        } else {
          for(let k = 0; k < notOpen.length; k++) {
            notOpen[k].classList.add('open');
            btnsArr[i].style.display = 'none';
          }
        }
        
      });
      
    }
  }
}

export default showArticle();