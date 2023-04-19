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


//상단으로 이동 버튼  제어
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function() {
  gsap.to(window , 0.6, {
    scrollTo: 0 //페이지에 0px지정 (최상단으로) 이동 . scrollToPlugin을 연결해야 사용 가능한 옵션
  });
});





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

    // 상단으로 이동 버튼보이기!
    gsap.to (toTopEl,0.6, {
      opacity: 1, 
      x: 0 // x축 0px 지점으로 이동
    });

  } else {
    // 배지요소 보이기  
    // badgeEl.style.display = 'block';

    gsap.to(badgeEl,0.6,{
      opacity: 1,
      display: 'block'
    });

    // 상단으로 이동 버튼숨기기!
    gsap.to (toTopEl,0.6, {
      opacity: 0, 
      x: 100 // x축 100px 지점으로 이동
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
  autoplay: true, //자동재생여부
});

// 프로모션 수평 슬라이드 기능
new Swiper ('.promotion .swiper', {
  direction:'horizontal',//수평 슬라이드(기본값)
  loop: true,//반복 재생 여부
  autoplay:{
    delay : 5000 //5초마다 슬라이드 바뀜(기본값:3000)
  }, //자동재생여부
  slidesPerView: 3,//한번에 보여줄 슬라이드 개수(기본값:1)
  spaceBetween: 10,//슬라이드 사이 여백 (간격)px
  centeredSlides: true,//1번 슬라이스가 가운데 보이기

  pagination: {
    el:'.promotion .swiper-pagination' , //페이지 번호 요소 선택자
    clickable: true //사용자 페이지 번호 요소 제어 가능 여부
  }, //페이지 번호 사용
  navigation: { //슬라이드 이전/다음 버튼
    nextEl:'.promotion .swiper-button-next',
    prevEl:'.promotion .swiper-button-prev',
  },

});


//프로모션 섹션 토글 기능
 const promotionEl = document.querySelector('.promotion');
 const promotionToggleBtn = document.querySelector('.toggle-promotion');
 const promotionToggleIcon = promotionToggleBtn.querySelector('.material-icons');

// 토글 버튼을 클릭했을때 실행 
// 프로모션 요소에 'hide'라는 클래스 값이 있으면 보임처리
//('hide' 클래스를 제거하고 아이콘 모양을 'upload'로 설정)
// 그렇지 않으면 숨김처리 
// ('hide'클래스를 추가하고 아이콘 모양을 'download'로 설정)

promotionToggleBtn.addEventListener ('click', function (){
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove ('hide');
    promotionToggleIcon.textContent = "upload";
  } else { 
    promotionEl.classList.add ('hide');
    promotionToggleIcon.textContent = "download";
  }
});

// 유튜브 섹션 위에  떠있는 부유 요소 애니메이션 처리
// gsap.to(요소, 지속시간, 옵션: {})
// 옵션 참고: https://greensock.com/docs/v3/GSAP/gsap.to()
 gsap.to('.floating1', 1, {
  delay: 1,//얼마나 늦게 애니메이션을 시작할 것인지 지연 시간 설정
  y: 15, //transform:translateY (): 와 같음, 수직으로 얼마나 움직일 지 설정
  repeat: -1, //몇 번 반복하는지 설정, -1은 무한 반복을 의미함
  yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut //Easing함수 적용, 느리게 - 빠르게 -느리게
 });

 gsap.to('.floating2', 1.5, {
  delay: 1,
  y: 15, 
  repeat: -1, 
  yoyo: true, 
  ease: Power1.easeInOut 
 });

 gsap.to('.floating3', 1.8, {
  delay: 1,
  y: 15, 
  repeat: -1,
  yoyo: true, 
  ease: Power1.easeInOut 
 });

 //어워즈 섹션 슬라이드 기능 
 new Swiper ('.awards .swiper', {
  direction:'horizontal',//수평 슬라이드(기본값)
  loop: true,//반복 재생 여부
  autoplay: true,
  slidesPerView: 5,//한번에 보여줄 슬라이드 개수(기본값:1)
  spaceBetween: 30,//슬라이드 사이 여백 (간격)px
  navigation: { //슬라이드 이전/다음 버튼
    nextEl:'.awards .swiper-button-next',
    prevEl:'.awards .swiper-button-prev',
  },

});


//scrollMagic사용
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)추가 및 옵션 지정
     triggerElement: spyEl,
     triggerHook: 0.8 //화면에 80%지점부터 보여짐 여부 감시 (0-1사이 지정)
    })
    .setClassToggle(spyEl,'show') // 요소가 화면에 보이면 show클래스 추가
    .addTo( new ScrollMagic.Controller());// 컨트롤러에 장면을 할당
    // (필수) - 라이브러리에서 지정한 문법으로 깊게 이해
  
});

//현재 연도 표시
//날짜 정보를 가진 js의 Data객체를 이용
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();//현재연도의 정보가 숫자 데이터로 반환됨


