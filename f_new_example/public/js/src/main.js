// main.js
(function($){
  const body=$('body'), wrap=$('#wrap');
  wrap.append('<section id="viewBox"></section>');
  const viewBox=$('#viewBox');
  // script 내용 간편작성함수 생성
  const JsLink=(temp)=>{return body.append(`<script src="../js/src/temp/${temp}"></script>`);};
  viewBox.load('./temp/slide_01.html',()=>{JsLink('slide_01.js');})
})(jQuery);