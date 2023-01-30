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


openSearch.addEventListener('click', function () {
  searchMobail.classList.toggle("open-search");
  closeNav.classList.toggle("close-nav");
})

closeSearch.addEventListener('click', function () {
  menu.classList.remove("activ");
  document.body.classList.remove("lock");
  searchMobail.classList.remove("open-search");
  closeNav.classList.remove("close-nav");
})



function filterMenu(element, list) {

  element.addEventListener('click', () => {
    list.classList.toggle("way-down");
  })
};

const collection = document.querySelector('.collection-header__btn');
const collectionList = document.querySelector('.collection-list');


filterMenu(collection, collectionList);

const color = document.querySelector('.color-header__btn');
const colorList = document.querySelector('.color-list');

filterMenu(color, colorList);


const size = document.querySelector('.size-header__btn');
const sizeList = document.querySelector('.size-list');

filterMenu(size, sizeList);





var $filterCheckboxes = $('input[type="checkbox"]');
var filterFunc = function () {

  var selectedFilters = {};

  $filterCheckboxes.filter(':checked').each(function () {

    if (!selectedFilters.hasOwnProperty(this.name)) {
      selectedFilters[this.name] = [];
    }

    selectedFilters[this.name].push(this.value);
  });

  var $filteredResults = $('.gallery-content');


  $.each(selectedFilters, function (name, filterValues) {

    $filteredResults = $filteredResults.filter(function () {

      var matched = false,
        currentFilterValues = $(this).data('category').split(' ');

      $.each(currentFilterValues, function (_, currentFilterValue) {

        if ($.inArray(currentFilterValue, filterValues) != -1) {
          matched = true;
          return false;
        }
      });

      return matched;

    });
  });

  $('.gallery-content').hide().filter($filteredResults).show();
}

$filterCheckboxes.on('change', filterFunc);




const btnMore = document.querySelector('.gallery-more__btn');


btnMore.addEventListener('click', function () {
  alert("Hello! I'm sorry, this is a preview page!");
})






const contentMobile = document.querySelector('.content');
const btnMobile = document.querySelector('.content-btn-mobile');
const btnMobileClose = document.querySelector('.content-close__btn');

btnMobile.addEventListener('click', function(){
  contentMobile.classList.toggle('filter-activ')
  document.body.classList.toggle("lock");
})

btnMobileClose.addEventListener('click', function(){
  contentMobile.classList.remove('filter-activ')
  document.body.classList.remove("lock");
})
