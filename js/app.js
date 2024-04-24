// hamburger menu

const burger = document.querySelector('.burger');
const main_nav = document.querySelector('.main-nav');
const nav_link = document.querySelectorAll('.nav-link');
// const main = document.getElementsByTagName('main');
// const footer = document.getElementsByTagName('footer');


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    main_nav.classList.toggle('active');
})

// main.addEventListener('click', () => {
//      burger.classList.toggle('active');
//      main_nav.classList.toggle('active');
// })

// footer.addEventListener('click', () => {
//      burger.classList.toggle('active');
//      main_nav.classList.toggle('active');
// })



for (const link of nav_link) {
    link.addEventListener('click', () => {
        burger.classList.toggle('active');
        main_nav.classList.toggle('active');
    })
}

// legal notice

// recovery of the legal notice insert and its background
const legal_notice = document.querySelector('.legal-notice');
const legal_notice_background = document.querySelector('.legal-notice-background');

// recovery of the legal notice link
const legal_notice_button = document.querySelector('#legal-notice-btn');

// recovery of the close button for the legal notice pop-up
const closeElement = document.querySelector('.legal-notice-close');


// event listener added
legal_notice_button.addEventListener('click', handleLegalNoticeClick);

// function that is executed when the link is clicked
function handleLegalNoticeClick(event) {
    
    event.preventDefault();

    // legal-notice-on class added to legal notices and its background
    legal_notice_background.classList.add('legal-notice-on');
    legal_notice.classList.add('legal-notice-on');

    // scroll deleted to Y axis
    document.documentElement.style.overflowY = 'hidden';   
}


// event listener added on the button
closeElement.addEventListener('click', handleClickLegalNoticeCross);
legal_notice_background.addEventListener('click', handleClickLegalNoticeCross);

// Function that closes the legal notices pop-up
function handleClickLegalNoticeCross() {

    // legal-notice-on class deleted to legal-notice and its background
    legal_notice.classList.remove('legal-notice-on');
    legal_notice_background.classList.remove('legal-notice-on');
    
    // scroll added to Y axis
    document.documentElement.style.overflowY = 'scroll'; 
}