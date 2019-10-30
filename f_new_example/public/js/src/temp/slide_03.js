// slide_03.js
(function($){

  const slideForm=$('.slide_03_form'),
        slideGuide=slideForm.children('ul');
  let slideLi=slideGuide.find('li');
// -----------------------------------------------
// li에 이름을 부여(.slide_03_con_0$)
  for(let i=0;i<slideLi.length;i++){
    let classname='slide_03_con_'+(i+1);
    slideLi.eq(i).addClass(classname);
  }
// -----------------------------------------------
  let cloneLi=slideLi.eq(-1).clone(true); //clone()사용 시 true이면 기능까지 복제

  // slideGuide.prepend(slideLi.eq(-1));
  cloneLi.eq(-1).prependTo(slideGuide);
  // 1. prepend, prependTo의 역할을 정확하게 구분
  /* 감싸는영역.prepend(담는내용);
     담는내용.prependTo(감싸는영역);*/
  // 2. 마지막 영역을 복제(clone)후에 앞에 담아라!
  // 3. css작업 시 nth-child()를 이용하여 이미지/기능을 담으면 순서값에 의해 원하는 결과물이 나오지 않으므로, 각각
  //    class이름을 부여하여 이미지/기능을 처리해라!(복제전에 class이름 부여!!!!!)
  // 4. 또한, 그 부모인 영역의 넒이는 기존개수+1만큼의 크기값으로 재설정
  const slide03Btn=$('.slide_03_btn'),
        nextBtn=slide03Btn.children('.next'),
        prevBtn=slide03Btn.children('.prev');
  slideLi=slideGuide.find('li'); // li가 새로 갱신된 내용으로 처리(6개) 

  let myn=0,
      timed=1000;
  const bannerLen=slideLi.length;
  console.log(bannerLen);

  nextBtn.on('click',function(e){
    e.preventDefault();
    myn++;
    if(myn>=bannerLen-1){
      slideGuide.css({left:'100%'});
      myn=0;}
    let per=-100*myn+'%';
    slideGuide.stop().animate({left:per},timed);
  })
  prevBtn.on('click',function(e){
    e.preventDefault();
    myn--;
    let per=-100*myn+'%';
    slideGuide.stop().animate({left:per},timed,function(){
      if(myn<=-1){myn=bannerLen-2;}
       per=-100*myn+'%';
       slideGuide.stop().css({left:per});
    });
  });



})(jQuery);