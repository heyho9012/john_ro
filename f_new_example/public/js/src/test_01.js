(function($){

  const mP=$('#miniProduct'),
        iC=mP.find('.indicator'),
        pD=mP.find('.product'),
        icLi=iC.find('li'),
        icLink=icLi.children('a');
        
  icLink.eq(0).addClass('action');
  icLink.on('click focus',function(e){
    e.preventDefault();
    n=$(this).parent('li').index();
    pD.stop().animate({left:-100*n+'%'},1000);
    icLink.removeClass('action');
    $(this).addClass('action');
  });

})(jQuery);