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
  // badgeEl.style.display = 'none';

  //  gsap.to (요소,지속시간, 옵션: {}) 메소드 : css 속성을 통해 애니메이션 처리
    gsap.to(badgeEl,0.6,{
      opacity:0,
      display:'none'
    });
  } else {
    // 배지요소 보이기  
    // badgeEl.style.display = 'block';

    gsap.to(badgeEl,0.6,{
      opacity:1,
      display:'block'
    });
  }
});

// 라이브러리가 애니메이션처리가 되게끔 디스플레이 블럭이나 논이 안되는걸(속성에 안된다고 나옴) 트렌지션 해줌

  

// 순차적으로 visual 섹션 내요소 보이기
// 나타날 요소 (.fade-in)들을 찾기
const fadeEls = document.querySelectorAll ('.visual .fade-in');

// 요소들을 하나씩 반복해서 처리
fadeEls.forEach(function (fadeEl, index) {
  //  gsap.to (요소,지속시간, 옵션은 여기안에{}) 메소드는 : css 속성을 통해 애니메이션 처리
  gsap.to(fadeEl, 1, {
    // delay : 몇 초뒤에 실행 될 것인가?
    delay: (index + 1) * 0.7, // 0.7, 1.4 2.1 2.8초
    opacity:1
  });
});


//공지사항 수직 슬라이드 기능 작성
//new 키워드를 Swiper 객체를 생성 -> 슬라이드 기능을 생성
// new.Swiper (선택자 , 옵션: {});
new Swiper ('.notice .swiper', {
  direction:'vertical',//수직 슬라이드
  loop: true,//반복 재생 여부
  autoplay: true, //자동재성ㅇ부
});