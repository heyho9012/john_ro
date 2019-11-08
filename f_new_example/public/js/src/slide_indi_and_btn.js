// slide_indi_and_btn.js
(function($){
  $.fn.myIndiSlide=function(jsonList,imgList){
  // 1.data불러오기
  let url=jsonList;//'../data/';
  let imgurl=imgList; //'../img/coffee/';
  let rel=null;

  $.ajax({
    async:false,
    dataType:'json',
    url:url+'slide_indi_and_btn.json',
    success:function(data){
      return rel=data;
    }
  });
  
  // ======================================================= slide
  const slide=this;
  slide.append('<div class="slide_wrap"><ul></ul></div>');
  // ======================================================= button
  const slideWrap=slide.find('.slide_wrap');
  slide.prepend('<div class="btn">\
                 <button type="button" class="next"><span></span></button>\
                 <button type="button" class="prev"><span></span></button></div>');
// ======================================================= indicator                 
  slideWrap.before('<ul class="indicator"></ul>');
  const indicator=slide.find('.indicator');
  // 각 영역에 필요한 내용 담기
  let slideLen=rel.length;
  console.log(slideLen);
   
  for(let i=0;i<slideLen;i++){
    let slideForm='<li><span class="hidden">'+rel[i].text+'</span></li>';
    let indiForm='<li><a href="#"><span class="hidden">'+rel[i].text+'</span></a></li>';
    slideWrap.children('ul').append(slideForm);
    indicator.append(indiForm);
    slideWrap.find('li').eq(i).css({backgroundImage:'url('+imgurl+rel[i].img+')',backgroundPosition:'50% 0'});
  }
  slideWrap.find('li').css({backgroundRepeat:'no-repeat',backgroundPosition:'50% 50%'})
  // ======================================================= indicator design
  indicator.parent().css({position:'relative'});                 ;
  indicator.css({position:'absolute',zIndex:500,bottom:'20px',left:'50%',transform:'translateX(-50%)',width:'auto'});
  indicator.find('li').css({display:'inline-block',marginLeft:'0.5rem'});
  indicator.find('a').css({display:'block',width:'26px',height:'26px',backgroundColor:'#777',borderRadius:'100%'});
  // ======================================================= button design
  const btnArea=slide.find('.btn'),
        btn=btnArea.children('button');
  
  btnArea.css({position:'absolute',zIndex:500,top:'50%',left:'5%',width:'90%',height:0});
  btn.css({width:'50px',height:'50px',transform:'translateY(-50%)'});
  btn.eq(0).css({float:'right'});
  btn.eq(1).css({float:'left'});

  // ======================================================= slide design
  let thisH=slide.outerHeight();
  slideWrap.css({width:'100%',height:(thisH - 50)+'px',overflow:'hidden'});
  const slideUl=slideWrap.children('ul');
  // =======================================================
  // li 마지막 요소 복제 첨부 후 디자인
  slideUl.children('li').eq(-1).clone().prependTo(slideUl);
  // =======================================================
  slideLen++;
  slideUl.css({position:'relative',left:0,width:100*slideLen+'%',height:'100%',marginLeft:'-100%'});
  slideUl.children('li').css({width:100/slideLen+'%',height:'100%',float:'left'});
  let n=0;
  let indiLi=indicator.children('li');
  let indiIndex=indicator.children('li').eq(n);
  indiIndex.addClass('action');
 /*  let indiDefault=indiIndex.css({backgroundColor});
  if(indiIndex.hasClass('action')){
    indiIndex.children('a').css({backgroundColor:'#f07'});
  }else{
    indiIndex.css({backgroundColor:indiDefault});
  } */
  $('head').append('<style class="myStyle"></style>');
  $('head').find('.myStyle').append('.indicator li.action > a{background-color:#f06 !important;}');
  // ======================================================= indicator click/focus
  indiLi.on('click',function(e){
    e.preventDefault();
    n=$(this).index();
    indiLi.eq(n).addClass('action');
    indiLi.eq(n).siblings().removeClass('action');
    slideUl.stop().animate({left:-100*n+'%'});
  });
  // ======================================================= button click
  btn.on('click',function(e){
    e.preventDefault();
    let next=$(this).hasClass('next');
    if(next){n++;
      if(n>=slideLen-1){slideUl.css({left:'100%'});n=0;};
    }else{n--;}
    slideUl.stop().animate({left:-100*n+'%'},function(){
      if(n<0){
        n=slideLen-2;
        slideUl.css({left:-100*n+'%'});
      }
    });
  });
};
})(jQuery);