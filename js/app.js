const burger = document.querySelector('.burger');
const main_nav = document.querySelector('.main-nav');
const nav_link = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    main_nav.classList.toggle('active');
})

console.log(nav_link);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// nav_link.addEventListener('click', () => {
//     burger.classList.toggle('active');
//     main_nav.classList.toggle('active');
// })

