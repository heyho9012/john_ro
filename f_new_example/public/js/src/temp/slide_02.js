(function($){

  const viewBox2=$('#viewBox_02'),
        indicator=viewBox2.find('.indicator'),
        indiLi=indicator.find('li'),
        indiLiLink=indiLi.children('a'),
        viewBtn=viewBox2.find('.view_btn'),
        playBtn=viewBtn.find('.play_btn'),
        pause=playBtn.children('.pause'),
        play=playBtn.children('.play');
  const slideForm=viewBox2.find('.slide_02_form'),
        slideGuide=slideForm.children('.guide'),
        slideEach=slideGuide.children('.banner_area');
  let timed=500,myn=0,go,
      maxn=slideEach.length,
      mybool=true;
// ----------------------------------------------------------
  // slideEach.eq(0).addClass('action');
  // indiLi.eq(0).children(indiLiLink).addClass('action');
// ----------------------------------------------------------
  const MoveSlide=function(n,bool){
    indiLiLink.removeClass('action');
    indiLi.eq(n).children('a').addClass('action');
    slideGuide.stop().animate({marginLeft:(-100*n)+'%'},function(){
      slideEach.removeClass('action');
      setTimeout(function(){
        slideEach.eq(n).addClass('action');
      },timed);
    });
    // play,stop 버튼 동작유/무 판단
    if(bool){
      play.hide();
      pause.show();
    }else{
      play.show();
      pause.hide();
    }
  }
  MoveSlide(0,true);
// ----------------------------------------------------------
// 일정시간마다 광고배너 움직이게 하기
  const GoSlide=function(){
    go=setInterval (function(){
      myn++;
      if(myn>=maxn){myn=0;}
      MoveSlide(myn,true);
    },timed*4);
  } //GoSlide()
  const StopSlide=function(){clearInterval(go);};
  const PlayBanner=function(bool){
    if(bool){
      GoSlide();
    }else{
      StopSlide();
    }
  } // PlayBanner()
  PlayBanner(true);
  // slideEach.on({'mouseenter':StopSlide,'mouseleave':GoSlide});

  slideEach.on('mouseenter',function(){PlayBanner(false);})
           .on('mouseleave',function(){PlayBanner(true);});
  play.on('click',function(){PlayBanner(true);});
  pause.on('click',function(){PlayBanner(false);});

// ----------------------------------------------------------
//  클릭 시 배너 움직이게 만들기
  indiLiLink.on('click focus',function(e){
    e.preventDefault();
    e.stopPropagation();
    // StopSlide();
    let i=$(this).parent('li').index();
    myn=i;
    MoveSlide(myn,true);
    PlayBanner(false);
  })
// ----------------------------------------------------------
  // 변수 i는 외부에서 공용으로 사용할 수 있도록, 전역변수로 처리
  // 인디케이터,광고배너 이동 후 처리하는 부분 등의 내용은 별도 함수처리
  // setTimeout():일정시간 뒤에 수행
  // setInterval():일정시간마다 수행
  // clearInterval():setInterval의 기능을 취소/정지

})(jQuery);