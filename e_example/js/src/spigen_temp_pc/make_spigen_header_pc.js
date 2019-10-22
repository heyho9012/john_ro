// make_spigen_main_pc
(function($){
  // 1.#gnb영역 내부에 있는 ul의 내용을 .side_gnb_area에 복사해서 붙여넣기 :: clone()메서드를 사용
  const gnb=$('#gnb'),
        sideGnbArea=$('.side_gnb_area');
  let gnbContents=gnb.contents().clone();
  sideGnbArea.append(gnbContents);
// 
// 버튼 클릭 시 side_gnb 나타나게 만들기

  let time=600;
  const openGnbBtn=$('.gnb_btn>button'),
        closeGnbBtn=$('.close_gnb_btn >button'),
        sideGnb=$('.side_gnb'),
        gnbDl=gnb.find('dl'),
        gnbDd=gnb.find('dd'),
        gnbDt=gnb.find('dt'),
        gnbTitleLink=gnbDt.children('a'),
        gnbListLink=gnbDd.children('a'),
        sideLink=sideGnbArea.find('a'),
        sideLastLink=sideLink.eq(-1);


  openGnbBtn.on('click',function(e){
    e.preventDefault();
    sideGnb.stop().fadeIn(time/2,function(){
      closeGnbBtn.focus();
      $(this).on('keyup',function(e){
        if(e.keyCode==27){
          sideGnb.fadeOut(time);
          openGnbBtn.focus();
        }
      });
    });
  });

  closeGnbBtn.on('click',function(e){
    e.preventDefault();
    sideGnb.fadeOut(time);
    openGnbBtn.focus();
  });

  const addAction=function(){
    let li=$(this).parents('li');
    li.find(gnbTitleLink).addClass('action');
    li.siblings().find(gnbTitleLink).removeClass('action');
    gnbDd.stop().slideDown();
  };
  const removeAction=function(){
    $(this).find(gnbTitleLink).removeClass('action');
    gnbDd.stop().slideUp();
  };
  // gnbDl.on('mouseenter',addAction);
  // gnbDl.on('mouseleave',removeAction);

  gnbDl.on({'mouseenter':addAction,'mouseleave':removeAction});

  
  // #gnb에 dt에 focus 처리되면 dd가 나타나게 만들기

/*   gnbTitleLink.on('focus',function(){
    gnbDd.stop().slideDown();
  });
  gnbListLink.eq(-1).on('blur',function(){
    gnbDd.stop().slideUp();
  }) */

  gnbTitleLink.on('focus',addAction);
  gnbListLink.on('blur',addAction);
  gnbListLink.eq(-1).on('blur',removeAction);
 
  // .side_gnb_area 내부의 마지막 a요소에서 blur처리되면, .close_gnb_btn위치로 다시 focus 처리
  // .close_gnb_btn위치로 다시 focus처리 되어라
  // 단, 전체페이지에서 추가로 focus처리되는 항목이 있어야 가능
  sideLastLink.on('blur',function(){
    closeGnbBtn.focus();    
  });

  
  // .side_gnb_area에서 키보드 esc키를 누르면 빠져 나가고, 이전 위치로 
  // -> .side_gnb_area가 보이는 곳에서 수행

})(jQuery);