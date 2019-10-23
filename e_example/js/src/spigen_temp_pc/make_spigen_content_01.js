(function($){
  const conArea=$('.content_area'),
        conDl=conArea.find('dl'),
        conDt=conDl.find('dt'),
        conDd=conDl.find('dd'),
        conDtBtn=conDt.children('button');

  conDtBtn.on('click focus',function(e){
    e.preventDefault();

    let btn=$(this),
        btnParent=btn.parent(),
        parNext=btnParent.next('dd');

    btn.addClass('action');
    btnParent.siblings('dt').children('button').removeClass('action');

/*  // step_01
    parNext.addClass('action');
    parNext.siblings('dd').removeClass('action'); 
*/

    // step_02
    parNext.stop().fadeIn();
    parNext.siblings('dd').stop().fadeOut();
    // action 클래스 이름으로 구분만 할 수 있도록 처리하고,
    // css에서 동작하지 않도록 처리
  });



    const mediaList=[
                      {text:'[youtube]아마존으로 2600억 매출',date:'2019.10.22',img:'media_01.jpg'},
                      {text:'슈피겐코리아 미국 아마존 독점유통',date:'2019.10.20',img:'media_02.jpg'},
                      {text:'[youtube]\'취업비자\'기업탐방',date:'2019.10.10',img:'media_03.jpg'}
                    ];
    const blogList=[
                      {text:'아무리 급해도 놓칠 수 없는 한 가지!',date:'2019.07.26',img:'blog_01.jpg'},
                      {text:'업무 중 즐기는 문화예술공연',date:'2019.07.26',img:'blog_02.jpg'},
                      {text:'풀필먼트(fulfillment) 서비스의 새로운 바람',date:'2019.07.26',img:'blog_03.jpg'}
                    ];
// mediaList[0].text

// blog=conArea.find('.blog');

  let imgUrl="../img/spigen/";

  // ForList([selector],[array]);
  const ForList=function(mySel,myList,myText){
    let tabBox=conArea.find(mySel);
    const bmText='<div class="album"><a href="#"><h4></h4><p class="con"></p><p class="date"></p></a></div>';
    for(let i=0;i<myList.length;i++){
      tabBox.append(bmText);
      let myNth=tabBox.children('.album').eq(i);
      myNth.find('h4').text(myText);
      myNth.find('.con').text(myList[i].text);
      myNth.find('.date').text(myList[i].date);

      let myImg=imgUrl + myList[i].img;
      myNth.css({backgroundImage:'url('+ myImg+')'});
    }
  }; // Forlist() End

  ForList('.media',mediaList,'media');
  ForList('.blog',blogList,'blog');



  /*   for(let i=0;i<blogList.length;i++){
      blog.append(bmText);
      let myNth=blog.children('.album').eq(i);
      myNth.find('h4').text('blog');
      myNth.find('.con').text(blogList[i].text);
      myNth.find('.date').text(blogList[i].date);
      
      let myImg=imgUrl + blogList[i].img;
      myNth.css({backgroundImage:'url('+ myImg+')'})
      // myNth.css({backgroundImage:'url(${myImg})'})
    }; */

// 내가 한 for문
/*    for(let i=0;i<3;i++){
      let j=i+1;
      if(i<10){j='0'+(i+1);}
      let myNthMedia=media.children('.album').eq(i);
      myNthMedia.css({backgroundImage:"url(../img/spigen/media_"+j+".jpg)"});
      let myNthBlog=blog.children('.album').eq(i);
      myNthBlog.css({backgroundImage:"url(../img/spigen/blog_"+j+".jpg)"});
    };
 */

    conDtBtn.on('keyup',function(e){
      e.preventDefault();

      let num=e.keyCode,
          beforeKey=num===37||num===38,
          afterKey=num===39||num===40,
          pdt=$(this).parent(conDt);

      if(beforeKey){
        pdt.prevAll('dt').find('button').focus();
      }else if(afterKey){
        pdt.nextAll('dt').find('button').focus();
      }

    /*   let myThis=$(this).parent('dt');
      // 왼37위38 오39아래40

      switch(e.keyCode){
        case 37:
        case 38:
          myThis.prevAll('dt').find('button').focus();
        break;
        case 39:
        case 40:
          myThis.nextAll('dt').find('button').focus();
        break;
      } */
    });



    const inv=$('.inverstor_area'),
          invUl=inv.find('ul'),
          invLi=invUl.find('li'),
          invAncor=invLi.find('a'),
          invInner=invAncor.find('.inner');
    
    for(let i=0;i<3;i++){
      let j=i+1;
      if(i<10){j='0'+(i+1);}
      let myNthInv=invUl.children('li').eq(i);
      myNthInv.css({backgroundImage:"url(../img/spigen/inv_"+j+".jpg)"});
    };
    
    invLi.on('mouseenter',function(){$(this).children('a').children('p').stop().hide();})
         .on('mouseleave',function(){$(this).children('a').children('p').stop().show();});
    
    


})(jQuery);