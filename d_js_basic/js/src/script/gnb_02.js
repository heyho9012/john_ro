(function(){

  const gnb=$('#gnb'),
        gnbArea=gnb.children('ul'),
        menuIcon=gnb.children('#menuIcon'),
        gnbArLi=gnbArea.children('li');
  gnbArLi.children('a').addClass('titleLink');

  const titleLink=$('.titleLink'),
        partList=titleLink.next('ul'),
        subLink=partList.find('a');
  
  gnbArLi.on('mouseenter focus',function(){
    partList.stop().slideDown();
  });
  
  gnbArLi.on('mouseleave',function(){
    partList.stop().slideUp();
  });

  menuIcon.on('click',function(){

  })



})(jQuery);