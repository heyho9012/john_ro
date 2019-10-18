//gnb_01.js

/* 
*1. 마우스 또는 키보드 포커스 처리시, 하위 메뉴 전체가 나타나게 만들기(배경하얗게)
*2. 마우스 또는 키보드 포커스 처리시, 하위 메뉴 전체가 나타나게 만들기(별도배경 없이)
*3. 마우스 또는 키보드 포커스 처리시, 해당 메뉴 하위 하나만 나타나게 만들기
*/
(function(){
  const gnb=$('#gnb'),
        gnbArea=gnb.children('ul'),
        gnbArLi=gnbArea.children('li');
  gnbArLi.children('a').addClass('titleLink');
  
  const titleLink=$('.titleLink'),
        partList=titleLink.next('ul'),
        subLink=partList.find('a');
  let timed=500;
/* // 1번기능 수행하기
  gnb.css({'backgroundColor':'transparent'});
  gnbArea.css({'height':'auto','backgroundColor':'#fff','boxShadow':'0.2rem 0.2rem 0.2rem rgba(3,0,0,0.3)'});
  gnbArea.css({'height':'auto'});
  // 포커스 잡히면 보이게 하기
  titleLink.on('focus',function(e){
    e.preventDefault();
    partList.stop().slideDown(timed);
  });
  // 마지막 요소 블러 처리되면 사라지게
  subLink.eq(-1).on('blur',function(){
    partList.stop().slideUp(timed);
  })
  // gnbArea에 마우스 올렸을 경우 나타나게 하기
  gnbArea.on('mouseenter',function(){
    partList.stop().slideDown(timed);
  })
  gnb.on('mouseleave',function(){
    partList.stop().slideUp(timed);
  })

// 2번 기능 수행하기
// gnbArea.css({'height':'100%'}); */

// 3번 기능 수행하기
titleLink.on('mouseenter focus',function(){
  let ulSlide=$(this).next(partList);
  ulSlide.parent().siblings().find(partList).slideUp();
  ulSlide.slideDown();
  ulSlide.find('a').eq(-1).on('blur',function(){
    ulSlide.slideUp();
  });
});



})(jQuery);