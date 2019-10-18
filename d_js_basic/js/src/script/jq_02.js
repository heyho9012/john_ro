// jq_02.js
(function($){
  // jQuery 내용 작성하는 곳
  // 선택자

  document.getElementById('box');
  document.querySelector('#box');
  document.getElementsByTagName('p')[0];
  document.querySelector('p');
  $('p')

  // $('.box p').css({padding:"0.5rem","backgroundColor":"#fa0"});
  // $('.box').find('p').css({"color":"#f06","textShadow":"0.2rem 0.2rem 0.2rem rgba(0,0,0,0.7)"});

  // $('.box > p').css({"borderBottom":"2px solid #111"});
  // $('.box').children('p').css({"transform":"rotate(45deg)"});
  
  /* $('dl>dt+dd').css({"backgroundColor":"#acc"});
  $('dl').children('dt').next('dd').css({"fontSize":"2rem","textTransform":"uppercase"});
  $('dl>dt~dd').css({"marginLeft":"2rem"});
  $('dl').children('dt').nextAll('dd').css({"color":"#f03"});

  $('ul>li:nth-child(1)').css({"backgroundColor":"#ffa"});
  $('ul').children('li:nth(0)').css({"backgroundColor":"#077"});
  $('ul').children('li:nth(-1)').css({"backgroundColor":"#f77"});
  $('ul').children('li').eq(0).css({"borderBottom":"2px solid #333"});
  $('ul').children('li').eq(-1).css({"borderBottom":"2px solid #f05"});

  $('p').closest('body').css({"backgroundColor":"#afa","border":"3px solid #000"});
  $('ul').find('li:eq(-2)').siblings().css({"borderLeft":"3px solid #f06"}); */

  // 자식:children
  // 자손:find
  // 인접형제(동생):next
  // 형제(동생들):nextAll
  // 부모:parent
  // 조부모(그 위도 포함):parents,parentsUntil,closest
  // 형제(바로 위 형):prev
  // 형제(형들):prevAll
  // 다른형제(자신제외):siblings

  let first=$('#first');
  let str=first.find('strong');
  first.css({'padding':'0.5rem','backgroundColor':'#fcc'});
  first.find('strong').css({'color':'#07f'});
  // =================================================
  str.parent().css({'padding':'0.3rem','backgroundColor':'#ccf'});
  // str.parents('#first').css({'padding':'0.2rem','border':'1px solid #333'});
  // str.parentsUntil('#first').css({'padding':'0.2rem','border':'1px solid #99f'});
  str.closest('#first').css({'padding':'0.2rem','border':'1px solid #99f'});

  /* 
  parent() 부모만(값 작성 안해도 동작)
  parents([selector]) 부보이자 조상에 해당하는 요소 동작, 값 작성하면 선택요소만 동작
  parentsUntil([selector]) parents와 기본은 같은 내용, 값 작성하면 선택요소 자식까지 동작
  closest([selector])  값이 없으면 동작X, 값 작성하면 선택요소만(1.8ver까지)
  */


})(jQuery);