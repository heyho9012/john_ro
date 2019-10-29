// main.js
(function($){
  // 광고영역 생성
  const body=$('body'), wrap=$('#wrap');
  wrap.append('<section id="viewBox"></section>');
  const viewBox=$('#viewBox');
  // script 내용 간편작성함수 생성
  const JsLink=(temp)=>{return body.append(`<script src="../js/src/temp/${temp}"></script>`);};

  viewBox.load('./temp/slide_01.html',()=>{return JsLink('slide_01.js');})
  // 광고영역2 생성
  wrap.append('<section id="viewBox_02"></section>');
  const vB2=$('#viewBox_02');
  vB2.load('./temp/slide_02.html',()=>{return JsLink('slide_02.js')});
  // 광고영역3 생성
  wrap.append('<section id="viewBox_03"></section>');
  const vB3=$('#viewBox_03');
  vB3.load('./temp/slide_03.html',()=>{return JsLink('slide_03.js')});


})(jQuery);