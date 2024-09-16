// hamburger menu

const burger = document.querySelector('.burger');
const main_nav = document.querySelector('.main-nav');
const nav_link = document.querySelectorAll('.nav-link');
const main_container = document.getElementById('main-container');
const footer_container = document.getElementById('footer-container');

burger.addEventListener('click', handleToogleActiveClass);

for (const link of nav_link) {
    link.addEventListener('click', handleToogleActiveClass);
}

function handleToogleActiveClass() {
    burger.classList.toggle('active');
    main_nav.classList.toggle('active');
}

main_container.addEventListener('click', handleClickOutsideNav);
footer_container.addEventListener('click', handleClickOutsideNav);

function handleClickOutsideNav() {
    burger.classList.remove('active');
    main_nav.classList.remove('active');
}

// typewriter effect //

// set up text to print, each item in array is new line
var aText = new Array(
    "Je suis",
    "Guillaume Dezerce,",
    "Développeur web",
    "Full-Stack / Back"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
    
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
    
function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.querySelector('h1');
    
    while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "<span>_</span>";
    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
    iArrLength = aText[iIndex].length;
    setTimeout("typewriter()", 500);
    }
    } else {
    setTimeout("typewriter()", iSpeed);
    }
}

typewriter();

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