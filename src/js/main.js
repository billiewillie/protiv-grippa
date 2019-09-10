window.addEventListener('load', function() {
    const warning = document.querySelector('section.warning');
    const warningCheck = warning.querySelector('.check input');
    warningCheck.addEventListener('click', function() {
        warning.style.display = 'none';
        localStorage.setItem('display', 'none');
    });

    if(localStorage.getItem('display') !== null) {
        const display = localStorage.getItem('display')
        warning.style.display = display;
    }
})