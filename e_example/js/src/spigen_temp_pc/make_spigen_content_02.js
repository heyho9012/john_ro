// spigen_main_content_02.js
(function(){

  const conBox2=$('#conBox2'),
        con2Ul=conBox2.find('ul'),
        con2Link=conBox2.find('a'),
        topBtn=$('.top_move_btn');

  for(let i=0;i<3;i++){
      let j=i+1;
      if(i<10){j='0'+(i+1);}
      let myNthInv=con2Ul.children('li').eq(i);
      myNthInv.css({backgroundImage:"url(../img/spigen/inv_"+j+".jpg)"});
  };

  // hover,focus::class="action"::css
  con2Link.on('mouseenter focus',function(){$(this).addClass('action');})
          .on('mouseleave blur',function(){$(this).removeClass('action');});

  // scrollBar 일정량 움직였을 경우 topButton 생성
  // event :: scroll :: scrollTop(), offset().top, offset().left :: 찾아보기
  // mousewheel, DOMMouseScroll
  // BOM,DOM ??  
  // 상단 내비게이션 js기능으로 처리!!! :: 과제

  let conBoxOffset=conBox2.offset().top;
  const win=$(window);
  // win.on('scroll',function(e){e.preventDefault();});
  win.on('scroll',()=>{
    let scrollResult=$(this).scrollTop();
    if(scrollResult>conBoxOffset){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    }
  });

  topBtn.on('click',(e)=>{
    e.preventDefault();
    $('html, body').stop().animate({scrollTop:0},1000,'easeInOutCubic',()=>{
      $('h1>a').focus();
    });
  });


  

})(jQuery);