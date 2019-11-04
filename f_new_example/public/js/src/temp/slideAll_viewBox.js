// slideAll_viewBox.js
(function(){
  const viewBox=$('#viewBox'),
        slideForm=viewBox.find('.slide_form'),
        slideWrap=viewBox.find('.slide_wrap');
  let slideEach=slideWrap.children('div');
  // 마지막요소 복제 및 정리
  slideEach.eq(-1).clone().prependTo(slideWrap);
  slideEach=slideWrap.children('div');
  let slideLen=slideEach.length;
  slideWrap.css({width:100*slideLen+'%',marginLeft:-100+'%'});
  slideEach.css({width:100/slideLen+'%'});
  // 버튼 생성
  // 좌우버튼
  const slideBtn=function(rel){
    // let result=rel||true;
    if(rel){
      slideForm.before('<div class="view_btn">\
                        <button type="button" class="next">\
                          <i class="fas fa-arrow-alt-circle-right"></i><span>다음내용보기</span>\
                        </button>\
                        <button type="button" class="prev">\
                          <i class="fas fa-arrow-alt-circle-left"></i><span>이전내용보기</span>\
                        </button>\
                        </div>');
    }
  };
  slideBtn(true);
  // 인디케이터
  slideForm.before('<ul class="indicator"></ul>');
  const indi=viewBox.find('.indicator');
  for(let i=0;i<slideLen-1;i++){
    indi.append('<li><a href="#"><span></span></a></li>')
    let indiLi=indi.children('li').eq(i);
    indiLi.find('span').text(slideEach.eq(i+1).text())
                       .css({display:'block',width:0,height:0,overflow:'hidden'});
  }
  let indiLi=indi.children('li');
  indiLi.eq(0).addClass('action');

  // 좌우 버튼 클릭 시 이동
  let n=0;
  const viewBtn=viewBox.find('.view_btn').find('button');
  viewBtn.on('click',function(e){
    e.preventDefault();
    let $has=$(this).hasClass('next');
    if($has){ // 다음버튼클릭(next button)
      n++;
      if(n>=slideLen-1){n=0;slideWrap.css({left:'100%'});}
    }else{ // 이전버튼클릭(prev button)
      n--;
    }
    slideWrap.stop().animate({left:-100*n+'%'},function(){
      if(n<=-1){n=slideLen-2;slideWrap.css({left:-100*n+'%'});}
      indiLi.eq(n).siblings().removeClass('action');
      indiLi.eq(n).addClass('action');
    });
  }); //viewBtn.on('click')
  // 인디케이터 선택 시
  indiLi.children('a').on('focus',function(e){
    e.preventDefault();
    n=$(this).parent('li').index();
    slideWrap.stop().animate({left:-100*n+'%'});
    indiLi.eq(n).siblings().removeClass('action');
    indiLi.eq(n).addClass('action');
    // a를 클릭 시에는 해당하는 광고배너로 포커스처리
    $(this).on('clicik',function(e){
      e.preventDefault();
      slideEach.eq(n+1).find('a').focus();
    }); //indiLi.on('click') 
  }); //indiLi.children('a').on('focus')

})(jQuery);