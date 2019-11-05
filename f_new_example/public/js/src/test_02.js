(function($){
  
  const wrap=$('#wrap'),
        mP1=wrap.find('#miniProduct_01'),
        Btn1=mP1.find('.btn'),
        npBtn1=Btn1.find('button'),
        pDt1=mP1.find('.product'),
        pUl1=pDt1.find('ul');
  let pLi1=pUl1.children('li');
  pLi1.eq(-1).clone().prependTo(pUl1);
  pLi1=pUl1.children('li');

  let plLen1=pLi1.length;
  pUl1.css({left:-100+'%'});

  let n=0;
  npBtn1.on('click',function(e){

    e.preventDefault();
    let $has=$(this).hasClass('next');

    if($has){n++; if(n>=plLen1-1){n=0; pUl1.css({left:100+'%'});}
    }else{n--;}

    pUl1.stop().animate({left:-100*n+'%'},function(){
      if(n<=-1){n=plLen1-2; pUl1.css({left:-100*n+'%'});}
    });
  });
// ====================================================================================
  const mP2=wrap.find('#miniProduct_02'),
        Btn2=mP2.find('.btn'),
        npBtn2=Btn2.find('button'),
        pDt2=mP2.find('.product'),
        pUl2=pDt2.find('ul');
  let pLi2=pUl2.children('li');
  pLi2.eq(-1).clone().prependTo(pUl2);
  pLi2=pUl2.children('li');

  let plLen2=pLi2.length;
  pUl2.css({left:-100+'%'});

  n=0;
  npBtn2.on('click',function(e){

    e.preventDefault();
    let $has=$(this).hasClass('next');

    if($has){n++; if(n>=plLen2-1){n=0; pUl2.css({left:100+'%'});}
    }else{n--;}

    pUl2.css({left:-100*n+'%'},function(){
    if(n<=-1){n=plLen2-2; pUl2.css({left:-100*n+'%'});}
    });
  });
// ====================================================================================
  const mP3=wrap.find('#miniProduct_03'),
        Btn3=mP3.find('.btn'),
        npBtn3=Btn3.find('button'),
        pDt3=mP3.find('.product'),
        pUl3=pDt3.find('ul');
  let pLi3=pUl3.children('li');
  pLi3.eq(-1).clone().prependTo(pUl3);
  pLi3=pUl3.children('li');

  let plLen3=pLi3.length;
  pUl3.css({top:-100+'%'});

  n=0;
  npBtn3.on('click',function(e){

    e.preventDefault();
    let $has=$(this).hasClass('next');

    if($has){n++; if(n>=plLen3-1){n=0; pUl3.css({top:100+'%'});}
    }else{n--;}

    pUl3.stop().animate({top:-100*n+'%'},function(){
    if(n<=-1){n=plLen3-2; pUl3.css({top:-100*n+'%'});}
    });
  });
  // ====================================================================================
  const mP4=wrap.find('#miniProduct_04'),
        Btn4=mP4.find('.btn'),
        npBtn4=Btn4.find('button'),
        pDt4=mP4.find('.product'),
        pUl4=pDt4.find('ul');
  let pLi4=pUl4.children('li');
  pLi4.eq(-1).clone().prependTo(pUl4);
  pLi4=pUl4.children('li');

  n=0;
  npBtn4.on('click',function(e){

    e.preventDefault();

  });

})(jQuery);