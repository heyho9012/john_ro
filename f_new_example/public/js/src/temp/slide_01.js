// slide_01.js
(function($){
  // .view_indicator 내부의 li(a)를 선택하면,
  // .slide_temp 내부의 .guide 박스가 이동하게 만들어라
  // index() 순서 가져오는 것, eq() 순서를 주는 것
  const viewBox=$('#viewBox'),
        indicator=viewBox.find('.view_indicator'),
        indiLi=indicator.find('li'),
        indiLink=indiLi.find('a'),
        guideBox=viewBox.find('.guide');
  
  indicator.css({zIndex:500});
  guideBox.css({position:'relative',top:0,left:0});
  indiLink.on('click focus',function(e){
    e.preventDefault();
    // let parLi=$(this).parent('li');
    let i=$(this).parent('li').index();
    console.log(i);
    indiLink.removeClass('action');
    $(this).addClass('action');
    guideBox.stop().animate({left:-100*i+'%'});
  })



})(jQuery);