$(function () {


  $('.partners__list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true
  });


  $('.teachers__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [

      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,

        }
      }
    ]
  });

  const tabs = document.querySelector('.tabs');
  const tabButton = document.querySelectorAll('.tabs__btn');
  const contents = document.querySelectorAll('.tabs__page');

  tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
      tabButton.forEach(btn => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      contents.forEach(content => {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  }


  //adding focus for Safari
  document.addEventListener('click', event => {
    if (event.target.matches('button')) {
      event.target.focus()
    }
  })


  // toggle header menu
  let toggleBtn = document.querySelector('.navbtn')
  let toggleIcon = document.querySelector('.navbtn__icon');
  let menuList = document.querySelector('.nav__list');
  let headerInner = document.querySelector('.header__inner');
  toggleBtn.addEventListener('click', () => {
    toggleIcon.classList.toggle('navbtn__icon--active');
    menuList.classList.toggle('nav__list--active')
    headerInner.classList.toggle('header__inner--active')
  })





})