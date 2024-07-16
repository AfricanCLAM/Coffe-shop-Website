/*toggle class activehamburger*/
const navbarNav = document.querySelector('.navbar-nav');
//Hamburger menu clicked
document.querySelector('#hamburger-menu').onclick = () => { navbarNav.classList.toggle('active') };

/*toggle class active search form*/
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active'); 
    searchBox.focus();
    e.preventDefault();
};

//click outside for closing
const searchButton = document.querySelector('#search-button'); //search button
const hamburger = document.querySelector('#hamburger-menu'); //hamburger menu

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
})
