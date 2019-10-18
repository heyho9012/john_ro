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
        gnbListLink=gnbDd.children('a');

  openGnbBtn.on('click',function(e){
    e.preventDefault();
    sideGnb.fadeIn(time/2);
  })
  closeGnbBtn.on('click',function(e){
    e.preventDefault();
    sideGnb.fadeOut(time);
  })

  const addAction=function(){
    $(this).find(gnbTitleLink).addClass('action');
    gnbDd.stop().slideDown();
  }
  
  const removeAction=function(){
    $(this).find(gnbTitleLink).removeClass('action');
    gnbDd.stop().slideUp();
  }
  gnbDl.on('mouseenter',addAction);
  gnbDl.on('mouseleave',removeAction);
  
  // #gnb에 dt에 focus 처리되면 dd가 나타나게 만들기

  gnbTitleLink.on('focus',function(){
    gnbDd.stop().slideDown();
  });
  gnbListLink.eq(-1).on('blur',function(){
    gnbDd.stop().slideUp();
  })

})(jQuery);