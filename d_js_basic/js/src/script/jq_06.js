// jq_06_load.js

(function($){
  // jquery 기초
  /* 
  *js문서에서는 기존 경로가 작성하고 있는 js문서가 아니다!
  *(html문서에서 불러왔을 경우))
  */
  const wrap=$('#wrap');
  wrap.prepend('<div class="head_wrap">')
      .append('<div class="foot_wrap">');
  const headWrap=$('.head_wrap'), 
        footWrap=$('.foot_wrap');
  

  headWrap.load('./temp/header.html',function(data){
    console.log(data);
    const headBox=$('#headBox');
    headBox.css({'backgroundColor':'#3ff'});
  });
  footWrap.load('./temp/footer.html',function(data){
    console.log(data);
  });

  wrap.load('../../data/test.json',function(data){
    console.log(data);
  })

  $.getJSON('../../data/test.json',function(data){
    console.log(data);
  })
  

})(jQuery);