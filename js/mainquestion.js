const menu = document.querySelector('.header-nav');
const menuBtnOpen = document.querySelector('.header-nav__menu-burger');
const menuBtnClose = document.querySelector('.header-nav__btn');
const openSearch = document.querySelector('.header-nav-list__style-link__search');
const searchMobail = document.querySelector('.header-nav-search-mobail');
const closeNav = document.querySelector('.header-nav-list');
const closeSearch = document.querySelector('.header-nav-search-mobail__btn')

menuBtnOpen.addEventListener('click', function () {
    menu.classList.toggle("activ");
    document.body.classList.toggle("lock");
})

menuBtnClose.addEventListener('click', function () {
    menu.classList.remove("activ");
    document.body.classList.remove("lock");
    searchMobail.classList.remove("open-search");
    closeNav.classList.remove("close-nav");

})


openSearch.addEventListener('click', function(){
    searchMobail.classList.toggle("open-search");
    closeNav.classList.toggle("close-nav");
})

closeSearch.addEventListener('click',function(){
    menu.classList.remove("activ");
    document.body.classList.remove("lock");
    searchMobail.classList.remove("open-search");
    closeNav.classList.remove("close-nav");
})


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.9076947, lng: 27.5249898 },
    zoom: 15,
  });
}

window.initMap = initMap;