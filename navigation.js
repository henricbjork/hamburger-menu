const menuIcon = document.querySelector('.hamburger-menu');

const navBar = document.querySelector('.navBar');

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((navItem) => {

    navItem.addEventListener('click', () => {

        setTimeout (function() {
            navBar.classList.toggle('change')
        }, 800)

        // if at location {
        //     navBar.classList.toggle('change')
        // }
        
    })
})

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('change');
})

// scrolls to position of div "container" on click
function scrollToStartPosition() {
    const elmnt = document.querySelector('#container');
    elmnt.scrollIntoView({ behavior: 'smooth' });
} 

function scrollToSlideshowPosition() {
    const elmnt = document.querySelector('#slideShow');
    elmnt.scrollIntoView({ behavior: 'smooth' });
} 

// scrolls to position of div "stats" on click
function scrollToStatsPosition() {
    const elmnt = document.querySelector('#stats');
    elmnt.scrollIntoView({ behavior: 'smooth' });
} 

function scrollToSeasonsPosition() {
    const elmnt = document.querySelector('#seasons');
    elmnt.scrollIntoView({ behavior: 'smooth' });
} 

// scrolls to position of div "merch" on click
function scrollToMerchPosition() {
    const elmnt = document.querySelector('#merch');
    elmnt.scrollIntoView({ behavior: 'smooth' });
} 
// scrolls to position of div "contact" on click
function scrollToContactPosition() {
    const elmnt = document.querySelector('#contact');
    elmnt.scrollIntoView({ behavior: 'smooth' });
} 
