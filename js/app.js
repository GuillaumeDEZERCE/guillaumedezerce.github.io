// menu burger

const burger = document.querySelector('.burger');
const main_nav = document.querySelector('.main-nav');
const nav_link = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    main_nav.classList.toggle('active');
})

console.log(nav_link);

// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
    
// // }
// // nav_link.addEventListener('click', () => {
// //     burger.classList.toggle('active');
// //     main_nav.classList.toggle('active');
// // })

// legal notice

// récupération de l'encart des mentions légales
const legal_notice = document.querySelector('.legal-notice');

// récupération du lien
const legal_notice_button = document.querySelector('#legal-notice-btn');

// ajout de l'écouteur d'événéments
legal_notice_button.addEventListener('click', handleLegalNoticeClick);

// Définition de la fonction qui est exécutée lors du clic sur le lien
function handleLegalNoticeClick(event) {
    
    event.preventDefault();

    // ajout de la classe legal-notice-on sur les mentions légales
    legal_notice.classList.add('legal-notice-on');
}

// récupération du bouton de fermeture de la boîte mentions légales
const closeElement = document.querySelector('.legal-notice-close');

// on pose un écouteur sur le bouton
closeElement.addEventListener('click', handleClickLegalNoticeCross);

// Fonction qui ferme l'encart mentions légales
function handleClickLegalNoticeCross() {

    // suppression de la classe legal-notice-on sur legal-notice
    legal_notice.classList.remove('legal-notice-on');
}