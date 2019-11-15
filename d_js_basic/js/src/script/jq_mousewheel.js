(function($){
/*   let myarr=[];
  let myplus=[11,'aa',900];
  myarr.push(10);
  myarr.push(499);
  myarr.push(123); // 뒤에 추가
  myarr.pop(); // 마지막 요소 제거
  myarr.shift(); // 앞 요소 제거
  myarr.unshift(); // 앞에 추가
  let myarrPlus=myarr.concat(myplus); // 배열 합치기
*/
  const wrap=$('#wrap'),
        scrollEl=wrap.find('.scroll'),
        htmlEl= $('html, body');

  let myScrollElTop=[];
  let scrollLen=scrollEl.length;
  htmlEl.scrollTop(myScrollElTop[0]);

  for(let i=0;i<scrollEl.length;i++){
    let scTop=scrollEl.eq(i).offset().top;
    myScrollElTop.push(scTop);
  }
  //console.log(myScrollElTop);

  let myStatus=true, n, useN=0;

  $(window).on('mousewheel DOMMouseScroll',function(e){
    //e.preventDefault();
    if(e.originalEvent.wheelDelta){
      n=e.originalEvent.wheelDelta*-1;
    }else{
      n=e.originalEvent.detail*40;
    }
    const ScrollMagic=function(){
      htmlEl.animate({scrollTop:myscrollElTop[useN]},timed,'easeOutElastic',function(){
        myStatus = true;
      });
     }//ScrollMagic()
     
    //  console.log(n);

    // ---------------------최초 스크롤 위치값 설정
    if(myStatus){
      myStatus=false;
      if(n>0){
        useN++;
        if(useN>=scrollLen){useN=scrollLen-1;}
        ScrollMagic();
      }else{
        useN--;
        if(useN<0){useN=0;}
        ScrollMagic();
      }
    } 
  });

  const gnb=$('#gnb');
  const gnbUl=gnb.find('ul');
  const gnbLi=gnbUl.find('li');
  const gnbLink=gnbLi.find('a');

  gnbLink.on('click',function(e){
    e.preventDefault();
    //let thisLink=$(this).attr('href');
    //let thisOffset=$(thisLink).offset().top;
    //htmlEl.animate({scrollTop:thisOffset});
    useN=$(this).parent('li').index();
  });
})(jQuery);