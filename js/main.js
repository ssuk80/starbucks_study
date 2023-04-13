// 검색창 요소 (.search) 선택 시 강제 포커스 및 제어
const searchE1 = document.querySelector('.search');
// const searchInputE1 = document.querySelector('.search input');
// 아래와 같이 최적화
const searchInputE1 = searchE1.querySelector('input');

//검색창 요소를 클릭하면 input요소를 포커스하도록 실행
searchE1.addEventListener ('click',function () { //이벤트 핸들러
  searchInputE1.focus();//포커스 강제 적용
});

//input 요소에 포커스되면 실행
searchInputE1.addEventListener ('focus', function () {
  searchE1.classList.add('focused');
  searchInputE1.setAttribute('placeholder','통합검색');//html속성을 추가하는 메소드
});

//input 요소에 해제(블러)되면  통합검색 글씨가 없어지게 실행
searchInputE1.addEventListener ('blur', function () {
  searchE1.classList.remove('focused');
  searchInputE1.setAttribute('placeholder','');//html속성을 추가하는 메소드
});


//스크롤 시 전역 배지(고정배너)숨기기
const badgeEl = document.querySelector('header .badges');

//window:브라우저 창 객체
window.addEventListener('scroll', function () {
  // console.log(window.scrollY);
  //  y축으로 얼마나 스크롤 됐는지 대한 수치
  //  만약 스크롤의 위치가 500을 넘어가면 배지 요소를 숨기고 
  //  그렇지않으면 다시 보이기!
  
  if (window.scrollY > 500 ) {
    // 배지요소 숨김
    badgeEl.style.display = 'none';
  } else {
    // 배지요소 보이기  
    badgeEl.style.display = 'block';
}

});



  

