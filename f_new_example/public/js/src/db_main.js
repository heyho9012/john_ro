(function($){
  const body=$('body'), wrap=$('#wrap');
  wrap.append('<header id="headBox"></header>');
  wrap.append('<section id="viewBox"></section>');
  const headBox=$('#headBox');
  const viewBox=$('#viewBox');
  // script 내용 간편작성함수 생성
  const JsLink=(temp)=>{return body.append(`<script src="../js/src/temp/${temp}"></script>`);};
  headBox.load('./temp/db_header.html',()=>{JsLink('db_header.js');})
  viewBox.load('./temp/db_slide_01.html',()=>{JsLink('db_slide_01.js');})
})(jQuery);