/*toggle class active hamburger*/
const navbarNav = document.querySelector('.navbar-nav');
//Hamburger menu clicked
document.querySelector('#hamburger-menu').onclick = () => { navbarNav.classList.toggle('active') };

/*toggle class active search form*/
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault(); //prevent from directing to header
};

/*toggle class active shopping cart */
const shoppingCart = document.querySelector('.shopping-cart')
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active'),
        e.preventDefault(); //prevent from directing to header
};

//click outside for closing
const searchButton = document.querySelector('#search-button'); //search button
const hamburger = document.querySelector('#hamburger-menu'); //hamburger menu
const cartItem = document.querySelector('#shopping-cart-button') //Cart button

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    if (!cartItem.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});


//modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
})


//click close button
document.querySelector('.close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
}
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
}