// paul_viewBox.js
(function($){
  const viewBox=$('#viewBox');
  
  // Button & Indicator Area
  const indi=viewBox.find('.indicator'),
        indiCon=indi.find('p').children('em');
        indiBtn=indi.find('.view_btn').children('button');
  
  // Slide Area
  const slide=viewBox.find('.slide_form'),
        slideUl=slide.find('ul'),
        slideLi=slideUl.find('li');

  // 
  // 1. Slide Area 순서 맞게 배치
  let liLen=slideLi.length;
  const slideZindexSet=function(){
    for(let i=liLen-1;i>=0;i--){
    slideLi.eq(i).css({zIndex:liLen-i});
  }};
  slideZindexSet();
  // Same Mean
  // for(let i=0;i<liLen;i--){
  //   slideLi.eq(i).css({zIndex:liLen-i});
  // }

  
  let textN=0;
  const textEm=function(n){indiCon.text('0'+(n+1));};
  textEm(textN);
  //
  slideLi.eq(0).siblings().hide();
  slideLi.eq(0).find('dl').addClass('action');
  
  const fakeBtn=$('.fake_btn');
  fakeBtn.hide();
  // Button Click
  indiBtn.on('click',function(e){
    e.preventDefault();
    fakeBtn.show();
    // $(this).hide();
    if($(this).index()==0){
      textN++;
      if(textN>=liLen){textN=0;}
      textEm(textN);
      let slideThis=slideLi.eq(textN);
    }else{
      textN--;
      if(textN<0){textN=liLen-1;}
      textEm(textN);
    } 
    // 가로로 늘어나는 현상
    let slideThis=slideLi.eq(textN);
    slideThis.css({zIndex:liLen+2,width:0,height:'100%',padding:0,display:'block'});
      slideThis.stop().animate({width:100+'%',paddingLeft:'5vw'},1000,'easeOutCubic',function(){
        slideThis.siblings().hide();
        slideZindexSet();
        fakeBtn.hide();
        slideThis.siblings().find('dl').removeClass('action');
        slideThis.find('dl').addClass('action');
      });
  });

  // li 보이지 않게 하고, -> li요소의 첫번째만 보이게 만들고
  // slideLi.hide();
  // slideLi.eq(0).siblings().hide();
  // 버튼 클릭시, 해당하는 순서에 맞는 li요소를 나타나게 만들기



})(jQuery);