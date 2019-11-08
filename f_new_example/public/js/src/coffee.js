(function($){

  // HTML
  const wrap=$('#wrap'),
        btn=$('.btn'),
        button=btn.find('button'),
        mP=wrap.find('#miniProduct'),
        iC=mP.find('.indicator'),
        icLi=iC.find('li'),
        icLink=icLi.children('a'),
        pWrap=mP.find('.product_wrap'),
        pdUl=pWrap.find('.product');
  for(let i=0;i<9;i++){
    iC.append('<li><a href="#"><span>제품 0'+(i+1)+'</span></a></li>');
    pdUl.append('<li class="img_0'+(i+1)+'"><a href="#"><span>상품설명 0'+(i+1)+'</span></a></li>');
  }

  // clone
  let pdLi=pdUl.find('li');
  pdLi.eq(-1).clone().prependTo(pdUl);
  pdLi=pdUl.find('li');
  let pdLen=pdLi.length;
  pdUl.css({left:-100+'%'});

  // button
  let n=0;
    button.on('click',function(e){
    e.preventDefault();
    let $has=$(this).hasClass('next');
    if($has){n++;
      if(n>=pdLen-1){n=0; pdUl.css({left:100+'%'});}
    }else{n--;}

      pdUl.stop().animate({left:-100*n+'%',function(){
        if(n<=-1){n=pdLen-2; pdUl.css({left:-100*n+'%'});}
      }});
  });

  // indicator
  icLink.on('click focus',function(e){
    e.preventDefault();
    n=$(this).parent('li').index();
    pdUl.stop().animate({left:-100*n+'%'},1000);
  });

})(jQuery);