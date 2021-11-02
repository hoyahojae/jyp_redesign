// DROP DOWN
// 토글 버튼
const newalbumEl = document.querySelector('.album_all');
const dropDownIcon = document.querySelector("#drop_down")
const newalbumToggleBtn = document.querySelector('#newalbumall');
// promotion이 숨겨졌는지 아닌지 판단
let isHideNewalbum = false;

newalbumToggleBtn.addEventListener('click', function () {
  isHideNewalbum = !isHideNewalbum    // isHidePromotion이 flase면 true로 반환, 또 그 반대
  if (isHideNewalbum) {
    // 숨김 처리
    newalbumEl.classList.add('active');
    dropDownIcon.classList.add('active');
  } else {
    // 보이도록 처리
    newalbumEl.classList.remove('active');
    dropDownIcon.classList.remove('active')
  }
});
