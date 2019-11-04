// slide_04.js
(function($){

  // 이미지경로,이미지파일명
  const url="../img/sample/";
  let imgList;
  $.ajax({
    async:false,
    type:'GET',
    url:'../data/slide_04.json',
    dataType:'json',
    error:function(){console.log('data error');},
    success:function(data){
      imgList=data;
      return imgList;
    }
  });
  console.log(imgList);
  // const imgList=['sample_01.jpg','sample_02.jpg','sample_03.jpg','sample_04.jpg','sample_05.jpg'];
  // 기본선택자 및 내용(기본틀) 생성
  const slide_04=$('#viewBox_04');
    slide_04.append('<div class="slide_form"></div>');
  const slideForm=slide_04.children('.slide_form');
    slideForm.append('<ul></ul>');
  const slideGuide=slideForm.children('ul');
  let imgLen=imgList.length;
  let slideCon='<dl><dt></dt><dd class="con"></dd><dd class="link"><a href=""></a></dd></dl>';

  for(let i=0;i<imgLen;i++){
    slideGuide.append(`<li class="slide_4th_0${i+1}"></li>`);
    let li_nth=slideGuide.children('li').eq(i);
    li_nth.html(slideCon)
          .css({backgroundImage:'url('+url+imgList[i].bgimg+')'})
          .find('dt').text(imgList[i].title)
          .next('.con').text(imgList[i].content);

    let link=li_nth.find('.link').children('a');
    link.text(imgList[i].linkTest)
        .attr({'href':imgList[i].link,'target':'_blank'});
  }
  let cloneLi=slideGuide.children('li').eq(-1).clone();
  cloneLi.prependTo(slideGuide);
  // = slideGuide.prepend(cloneLi);
  imgLen++;//li 마지막 요소 추가 갱신 값
  const slide4thLi=slideGuide.find('li');
  slideGuide.css({width:100*imgLen+'%'});
  slide4thLi.css({width:100/imgLen+'%'});


  let btnMake=('<div class="slide_04_btn_area">\
                <button type="button" class="next"><span>다음내용</span></button>\
                <button type="button" class="prev"><span>이전내용</span></button>\
                </div>');
  slide_04.prepend(btnMake);

  const btnArea=slide_04.find('.slide_04_btn_area'),
        btn=btnArea.children('button');
  slide_04.css({position:'relative'});
  btnArea.css({position:'absolute',top:'-50px',left:0,height:0});
  btn.css({width:'100px',height:'30px'});
  btn.eq(0).css({float:'right'})
     .eq(1).css({float:'left',marginRight:'10px'});

  let num=0;
  const nxBtn=function(){
      if(num>=imgLen-1){slideGuide.css({left:'100%'});num=0;}
  };
  const pvBtn=function(){
    slideGuide.stop().animate({left:-100*num+'%'},600,function(){
      if(num<=-1){num=imgLen-2;slideGuide.stop().css({left:-100*num+'%'},600);}
    });
  };

  btn.on('click',function(e){
    e.preventDefault();
    if($(this).index()==0){num++;nxBtn();}
    else{num--;}
    pvBtn();
  }); 

/*   btn.eq(0).on('click',function(e){
    e.preventDefault();
    num++;
    // ---------------------------------------
    if(num>=imgLen-1){slideGuide.css({left:'100%'});num=0;}
    slideGuide.stop().animate({left:-100*num+'%'},600);
    // ---------------------------------------
  });
  btn.eq(1).on('click',function(e){
    e.preventDefault();
    num--;
    slideGuide.stop().animate({left:-100*num+'%'},600,function(){
      if(num<=-1){
        num=imgLen-2;
        slideGuide.stop().css({left:-100*num+'%'},600);
      }
    });
  });
 */
})(jQuery);