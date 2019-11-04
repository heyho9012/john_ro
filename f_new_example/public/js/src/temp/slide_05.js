(function($){

  const slide_05=$('#viewBox_05');
  slide_05.append('<div class="slide_05_btn"></div><div class="slide_05_form"></div>');
  const slideBtn5=slide_05.find('.slide_05_btn'),
        slideForm5=slide_05.find('.slide_05_form');
  slideBtn5.append('<span class="txt"></span><span></span><button class="next"><span>다음내용</span></button><button class="prev"><span>이전내용</span></button>');
  slideForm5.append('<ul></ul>');
  const slideGuide5=slideForm5.find('ul'),
        btn5=slideBtn5.find('button'),
        imgList=['paul_01.jpg','paul_02.jpg','paul_03.jpg'];
  let imglen=imgList.length;


  for(i=0;i<imglen;i++){
    slideGuide5.append('<li></li>');
    let li_nth5=slideGuide5.find('li').eq(i);
    li_nth5.css({backgroundImage:'url(../img/paul/'+imgList[i]+')'});
  }

  let cloneLi=slideGuide5.children('li').eq(-1).clone();
  cloneLi.prependTo(slideGuide5);

  
  let num=0;
  const nxBtn=function(){if(num>=imglen-1){slideGuide5.css({left:'100%'});num=0;}},
        pvBtn=function(){
          slideGuide5.stop().animate({left:-100*num+'%'},600,function(){
            if(num<=-1){num=imglen-2;slideGuide5.stop().css({left:-100*num+'%'},600);}
          });
        };

  btn5.on('click',function(e){
    e.preventDefault();
    if($(this).index()==0){num++;nxBtn();}
    else{num--;}pvBtn();
  }); 

})(jQuery);