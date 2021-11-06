// DROP DOWN
const newalbumEl = document.querySelector('.album_all');
const dropDownIcon = document.querySelector("#drop_down")
const newalbumToggleBtn = document.querySelector('#newalbumall');

let isHideNewalbum = false;

newalbumToggleBtn.addEventListener('click', function () {
  isHideNewalbum = !isHideNewalbum
  if (isHideNewalbum) {
    newalbumEl.classList.add('active');
    dropDownIcon.classList.add('active');
  } else {
    newalbumEl.classList.remove('active');
    dropDownIcon.classList.remove('active')
  }
});


// swiper.js
// MAIN
new Swiper('.main_video .swiper-container', {
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.main_video .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.main_video .swiper-prev',
    nextEl: '.main_video .swiper-next'
  }
});

// NOTICE
new Swiper('.notice_list .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

// NEW ALBUM
new Swiper('.album_all .swiper-container', {
  spaceBetween: 12,
  loop: true,
  pagination: {
    el: '.album_all .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.album_all .swiper-prev',
    nextEl: '.album_all .swiper-next'
  }
});
