(function($){
  const wrap=$('#wrap');
  wrap.append('<dl class="accor"></dl>');
  const accor=$('.accor');
  for(let i=0;i<4;i++){
    accor.append('<dt><a href="#">content title_0'+(i+1)+'<span><i class="fas fa-caret-down"></i></span></a></dt><dd></dd>');
  }
  const accorDt=accor.find('dt');
  const accorDd=accor.find('dd');
  accorDd.text('content........');
  accorDd.eq(0).show();
  accorDt.eq(0).addClass('action');
  
  accorDt.on('click',function(){
    let i=$(this).index()/2;
    let DdNum=accorDd.eq(i); 
    let DtNum=accorDt.eq(i);
    DdNum.siblings('dd').slideUp();
    DdNum.stop().slideToggle();
    $(this).siblings('dt').removeClass('action');
    DtNum.toggleClass('action');
  });
})(jQuery);