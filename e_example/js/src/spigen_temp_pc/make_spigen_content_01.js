(function($){
  const conArea=$('.content_area'),
        conDl=conArea.find('dl'),
        conDt=conDl.find('dt'),
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

    const bmText='\
                  <div class="album">\
                    <a href="#">\
                     <h4></h4>\
                     <p class="con"></p>\
                     <p class="date"></p>\
                    </a>\
                   </div>';

    const mediaList=[
                      {text:'[youtube]아마존으로 2600억 매출',date:'2019.10.22'},
                      {text:'슈피겐코리아 미국 아마존 독점유통',date:'2019.10.20'},
                      {text:'[youtube]\'취업비자\'기업탐방',date:'2019.10.10'}
                    ];
    const blogList=[
                      {text:'아무리 급해도 놓칠 수 없는 한 가지!',date:'2019.07.26'},
                      {text:'업무 중 즐기는 문화예술공연',date:'2019.07.26'},
                      {text:'풀필먼트(fulfillment) 서비스의 새로운 바람',date:'2019.07.26'}
                    ];
// mediaList[0].text

    const media=conArea.find('.media');
    const blog=conArea.find('.blog');
    

    for(let i=0;i<mediaList.length;i++){
      media.append(bmText);
      let myNth=media.children('.album').eq(i);
      myNth.find('h4').text('media');
      myNth.find('.con').text(mediaList[i].text);
      myNth.find('.date').text(mediaList[i].date);

    }

    for(let i=0;i<blogList.length;i++){
      blog.append(bmText);
      let myNth=blog.children('.album').eq(i);
      myNth.find('h4').text('blog');
      myNth.find('.con').text(blogList[i].text);
      myNth.find('.date').text(blogList[i].date);

    }

    const album=$('.album');
    for(let i=0;i<3;i++){
      let j=i+1;
      if(i<10){j='0'+(i+1);}
      let myNthMedia=media.children('.album').eq(i);
      myNthMedia.css({backgroundImage:"url(../img/spigen/media_"+j+".jpg)"});
      let myNthBlog=blog.children('.album').eq(i);
      myNthBlog.css({backgroundImage:"url(../img/spigen/blog_"+j+".jpg)"});
    }

    conDtBtn.on('keyup',function(e){
      e.preventDefault();
      console.log(e.keyCode);
      // 왼37위38 오39아래40

      let myThis=$('this').parent('dt');
      switch(e.keyCode){
        case 37:
        case 38:
          myThis.prevAll('dt').find('button').focus();
        break;
        case 39:
        case 40:
          myThis.nextAll('dt').find('button').focus();
        break;
      }
    });

})(jQuery);