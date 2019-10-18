// jq_05_event_02.js
(function($){
  let menu=$('.menu'), menuUl=menu.children('ul'), menuLi=menuUl.children('li'),menuLink=menuLi.children('a');
  let mLiBg=menuLi.css('backgroundColor'),
      mLiBdr=menuLi.css('borderRadius'),
      mLinkColor=menuLink.css('color'),
      mLinkWeight=menuLink.css('fontWeight');
  menuLink.css({'outline':0});
  let set={
    licolor:mLiBg,liborder:mLiBdr,linkcolor:mLinkColor,linkbold:mLinkWeight
  };
  // focus:초점이잡힌 상태(a,button,form내부의 요소) focusin?????
  //blur:초점이 잡힌 요소가 풀리는 상황 focusout???????
  menuLink.on('focus',function(){
              let mythis=$(this);
              mythis.parent('li').css({'backgroundColor':'#0af','borderRadius':'0.5rem'});
              mythis.css({'Color':'#fff','fontWeight':'bold'});
          })
          .on('focus',function(){
              let mythis=$(this);
              mythis.parent('li').css({'backgroundColor':set.licolor,'borderRadius':set.liborder})
              mythis.css({'color':set.linkcolor,'fontWeight':set.linkbold});
          });

  let mytop=$('.top_link').children('button');
/*mytop.on('mouseenter',function(){})
  mytop.on('mouseleave',function(){})
  
  mytop.on('mouseenter',function(){})     
       .on('mouseleave',function(){})   */  
  mytop.hover(function(){
                $(this).animate({'backgroundColor':'#305'});
              },     //마우스 올렸을경우
              function(){
                $(this).animate({'backgroundColor':'#055'})
              });    //마우스 벗어났을경우

              // 선택자.기능('기능이름',function(){});
  mytop.on('click',function(event){
    event.preventDefault();
    $('html,body').animate({'scrollTop':0});
  });            

  /* 
  *css() => css 기능을 거의 다 쓸 수 있다.
  *animate()는 css의 기능을 쓸 수 있지만, 모두 쓸 수는 없다.
               transform,transition,animation,borderRadius 등 흔히 말하는 css3기능은 동작하지 않는다.
  */

  const win=$(window);
  const conBox=$('#contentBox');
  win.on('scroll',function(){
    let myscroll=$(this).scrollTop();
    // console.log(myscroll);
    if(myscroll>150){
      // conBox.css({'backgroundColor':'#aca'});
      conBox.css({'backgroundColor':'#aca','transition':'all 300ms ease'})
    }else{ 
      // conBox.css({'backgroundColor':'#fca'});
      conBox.css({'backgroundColor':'#fca','transition':'all 300ms ease'})
    }
  
  });
  let beforeWidth=win.width(); //크기값이 변경되기 전 가로값
  win.on('resize',function(){
    let afterWidth=win.width(); //크기값이 변경된 후 가로값
    if(beforeWidth!==afterWidth){
      console.log('크기가 변경되었습니다.');
    }
  });
  
})(jQuery);