// make_spigen_main_pc
(function($){
  // 1.#gnb영역 내부에 있는 ul의 내용을 .side_gnb_area에 복사해서 붙여넣기 :: clone()메서드를 사용

  const gnb=$('#gnb');

  const wnList=
  [
    {title:'about',sub:['who we are','what we do','our locations']},
    {title:'careers',sub:['careers','hr blog','apply']},
    {title:'media',sub:['media']},
    {title:'ir',sub:['investors','ir achive','ir meetings']}
  ];

  gnb.append('<ul></ul>');
  const wnText='<li><dl><dt><a href="#"></a></dt><dd></dd></dl></li>';
  const wnLinkText='<a href="#"></a>';

  for(let i=0;i<wnList.length;i++){
    gnb.find('ul').append(wnText);
    let myNth=gnb.find('ul').children('li').eq(i);
    myNth.find('dt').children('a').text(wnList[i].title);
    let myNth2=myNth.find('dd');
    for(let j=0;j<3;j++){
      myNth2.append(wnLinkText);
      myNth2.children('a').eq(j).text(wnList[i].sub[j]);
    }
  }

  const sideGnbArea=$('.side_gnb_area');
  let gnbContents=gnb.contents().clone();
  sideGnbArea.append(gnbContents);
  const openGnbBtn=$('.gnb_btn>button');
  const closeGnbBtn=$('.close_gnb_btn >button');
  const sideGnb=$('.side_gnb');
  const gnbUl=gnb.find('ul');
  const gnbDl=gnb.find('dl');
  const gnbDd=gnb.find('dd');
  const gnbDt=gnb.find('dt');
  const gnbTitleLink=gnbDt.children('a');
  const gnbListLink=gnbDd.children('a');
  const sideLink=sideGnbArea.find('a');
  const sideLastLink=sideLink.eq(-1);

  // 버튼 클릭 시 side_gnb 나타나게 만들기
  let time=600;
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