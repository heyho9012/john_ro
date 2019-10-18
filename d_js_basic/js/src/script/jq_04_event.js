// jq_04_event.js
(function($){
  // jquery이벤트 이해하기

  // 선택.on('이벤트',function(){해당 이벤트를 처리시(예:클릭) 수행하는 기능});
  /*#contentBox:hover {background-color:#aaf;}*/

  /* const conBox=$('#contentBox');
  conBox.on('mouseenter',function(){
    conBox.css({'backgroundColor':'#aaf'});
  });
  conBox.on('mouseleave',function(){
   $(this).stop().animate({'backgroundColor':'transparent'},900);
  }); */
  // click, dblclick, mousedown, mouseup,mousewheel
  // keypress,keydown,keyup

  const con=$('#contentBox');
  const conUl=con.children('ul');
  const conLi=conUl.children('li');
  conLi.eq(0).on('click',function(){
    $(this).css({'backgroundColor':'#fff'});
  });
  conLi.eq(1).on('dblclick',function(){
    $(this).css({'backgroundColor':'#777'});
  });
  conLi.eq(2).on('mousedown',function(evt){
    // console.log(evt.button);
    // $(this).css({'backgroundColor':'#07f'});
    switch(evt.button){
      case 0:$(this).css({'backgroundColor':'#07f'}); break;
      case 1:$(this).css({'backgroundColor':'#f70'}); break;
      case 2:$(this).css({'backgroundColor':'#000','color':'#fff'}); break;
      default:$(this).css({'backgroundColor':'#aaa'}); break;
    }
  });
  conLi.eq(2).on('mouseup',function(){
    $(this).css({'backgroundColor':'#fa0'});
  });
  conLi.eq(3).on('mousewheel DOMMouseScroll',function(){
    $(this).css({'backgroundColor':'#fa0'});
  });
  conLi.eq(4).on('mousemove',function(event){
    // console.log(event.offsetX,event.offsetY);
    // console.log(event.pageX,event.pageY);
    let x=event.offsetX;
    let y=event.offsetY;
    // $('.ball').css({"transform":"translate("+ x +","+ y +")"});
    $('.ball').css({"transform":`translate(-${x}%,-${y}%)`});
  })
  conLi.eq(5).children('input').on('keypress',function(evt){
    // console.log(evt);
  });
  conLi.eq(5).children('input').on('keyup',function(evt){
    console.log(evt.key, evt.keyCode);
  });




})(jQuery);