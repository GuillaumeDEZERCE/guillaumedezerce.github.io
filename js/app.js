const burger = document.querySelector('.burger');
const main_nav = document.querySelector('.main-nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    main_nav.classList.toggle('active');
})

