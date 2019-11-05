(function($){
const miniProduct=$('#miniProduct'),
      indicator=miniProduct.children('.indicator'),
      indiLi=indicator.children('li'),
      indiLink=indiLi.children('a');
let indiLiLen=indiLi.length;

const adverBanner=miniProduct.find('.product').children('ul'),
      adverNth=adverBanner.children('li');
let i=0;
adverNth.find('a').attr({'tabIndex':-1});
indiLi.eq(0).addClass('active');
indiLink.on('focus click',function(e){
  e.preventDefault();
  i=$(this).parent().index();
  adverBanner.stop().animate({marginLeft:-100*i+'%'});
  // indiLi.eq(i).siblings('li').removeClass('active');
  // indiLi.eq(i).addClass('active');
  $(this).parent().siblings('li').removeClass('active');
  $(this).parent().addClass('active');
  $(this).on('keyup',function(){
    e.preventDefault();
    if(e.keyCode==13){
      adverNth.eq(i).children('a').focus();
    }
  });
});
  let go,timed=1000;
  const slideGo=function(){
    go=setInterval(function(){
      i++;
      if(i>=indiLiLen){i=0;}
      adverBanner.stop().animate({marginLeft:-100*i+'%'});
      indiLi.eq(i).siblings('li').removeClass('active');
      indiLi.eq(i).addClass('active');
    },timed*2); //일정시간마다
  };
  const slideStop=function(){
    clearInterval(go); // setInterval 취소
  };
  slideGo();

  miniProduct.on('mouseenter',function(){
    slideStop();
  });
  miniProduct.on('mouseleave',function(){
    slideGo();
  });

})(jQuery);