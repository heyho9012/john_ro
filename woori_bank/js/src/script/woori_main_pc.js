(function($){
  const gnb=$('#gnb'),
        gnbUl=gnb.find('ul'),
        gnbDl=gnb.find('dl'),
        gnbDd=gnb.find('dd'),
        gnbDt=gnb.find('dt'),
        gnbTitleLink=gnbDt.children('a'),
        gnbListLink=gnbDd.children('a'),  
        conBox=$('#conBox');
  
/* const addAction = function () {
  $(this).find(gnbTitleLink).addClass('action');
  gnbDd.stop().slideDown();
  conBox.animate({backgroundColor:"#555"},100);
}
const removeAction = function () {
  $(this).find(gnbTitleLink).removeClass('action');
  gnbDd.stop().slideUp();
  conBox.animate({backgroundColor:"#fff"},100);
}
  gnbUl.on('mouseenter', addAction);
  gnbUl.on('mouseleave', removeAction); */

  gnbUl.on('mouseenter',function(e){
    e.preventDefault();
    gnbDd.stop().slideDown();
    conBox.animate({backgroundColor:"#555"},100);
  });
  gnbUl.on('mouseleave',function(e){
    e.preventDefault();
    gnbDd.stop().slideUp();
    conBox.animate({backgroundColor:"#fff"},100);
  });
  
  gnbTitleLink.on('focus',function(){
    gnbDd.stop().slideDown();
    conBox.animate({backgroundColor:"#555"},100);
  });

  gnbListLink.eq(-1).on('blur',function(){
    gnbDd.stop().slideUp();
    conBox.animate({backgroundColor:"#fff"},100);
  });



})(jQuery);