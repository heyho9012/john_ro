// jq_03.js
(function($){
  $('#myBox').css({'width':'80%','height':'900px','margin':'auto','backgroundColor':'#ddd'});
  // 생성(요소,값)
  /* const myBox=document.querySelector('#myBox');
  const myh2=document.createElement('h2');
  let h2Text=document.createTextNode('jquery text');
  myh2.appendChild(h2Text);
  myBox.appendChild(myh2); */
  // 확인(크기,속성)
  // const myBox=$('#myBox');
  // myBox.append('<h2></h2>');
  // const myh2=myBox.children('h2')
  // myh2.text('myh2.text');
  // html(),append(),prepend(),appendTo(),prependTo(),before(),after()
  // text()
  // let con=myBox.html();
  // console.log(con);
  // myBox.html('<p>요소를 생성하였습니다</p>'); //기존 요소를 삭제하고, 새롭게 추가
  // const resultBox=$('#resultBox');
  // let resultWidth=resultBox.width(350); //padding,border를 제외한 width값
  // console.log(resultWidth);
  // let resultinnerWidth=resultBox.innerWidth(); //padding 값을 포함한 width값
  // console.log(resultinnerWidth);

  const resultBox=$('#resultBox');
  let resultBoxWidth=resultBox.css('width');
  let pasWidth=parseInt(resultBoxWidth);
  console.log(pasWidth);
  // 변경()
})(jQuery);