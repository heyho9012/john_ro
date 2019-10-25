// make_spigen_main_pc
(function($){
  // 1.#gnb영역 내부에 있는 ul의 내용을 .side_gnb_area에 복사해서 붙여넣기 :: clone()메서드를 사용

  const gnb=$('#gnb'),
        sideGnbArea=$('.side_gnb_area'),
        wnList=[
                {title:'about',titleLink:'title_link_0',
                 sub:[
                       {subName:'who we are',subLink:'sub_01_0'},
                       {subName:'what we do',subLink:'sub_01_1'},
                       {subName:'our locations',subLink:'sub_01_2'}
                     ]},
                {title:'careers',titleLink:'title_link_1',
                 sub:[
                       {subName:'careers',subLink:'sub_02_0'},
                       {subName:'hr blog',subLink:'sub_02_1'},
                       {subName:'apply',subLink:'sub_02_2'} 
                     ]},
                {title:'media',titleLink:'title_link_2',
                 sub:[
                       {subName:'media',subLink:'sub_03_0'}
                     ]},
                {title:'IR',titleLink:'title_link_3',
                 sub:[
                       {subName:'investors',subLink:'sub_04_0'},
                       {subName:'IR achive',subLink:'sub_04_1'},
                       {subName:'IR meetings',subLink:'sub_04_2'} 
                     ]}
              ];
  
  const wnUlText='<ul></ul>',
        wnText='<li><dl><dt><a href=""></a></dt><dd></dd></dl></li>',
        wnLinkText='<a href=""></a>';        

  gnb.append(wnUlText);
  for(let i=0;i<wnList.length;i++){
    gnb.find('ul').append(wnText); 
    let myNth=gnb.find('ul').children('li').eq(i);
    let myNth2=myNth.find('dd');
    myNth.find('dt').children('a').text(wnList[i].title);
    myNth.find('dt').children('a').attr("href",wnList[i].titleLink);

    let subLen=wnList[i].sub.length;
    for(let j=0;j<subLen;j++){
      myNth2.append(wnLinkText);
      let myNth3=myNth2.children('a').eq(j);
      myNth3.text(wnList[i].sub[j].subName);
      myNth3.attr("href",wnList[i].sub[j].subLink); // attr 이용한 hiperlink에 주소 넣는 방법
      // myNth2.append('<a href="'+wnList[i].sub[j].subLink+'"></a>'); // append 이용한 주소 넣는 방법
    }
  }
  let gnbContents=gnb.contents().clone();
  sideGnbArea.append(gnbContents);
  const openGnbBtn=$('.gnb_btn>button'),
        closeGnbBtn=$('.close_gnb_btn >button'),
        sideGnb=$('.side_gnb'),
        gnbUl=gnb.find('ul'),
        gnbDl=gnb.find('dl'),
        gnbDd=gnb.find('dd'),
        gnbDt=gnb.find('dt'),
        gnbTitleLink=gnbDt.children('a'),
        gnbListLink=gnbDd.children('a'),
        sideLink=sideGnbArea.find('a'),
        sideLastLink=sideLink.eq(-1);

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