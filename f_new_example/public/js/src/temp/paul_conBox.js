(function($){
  const conBox=$('#conBox'),
        conBtn=conBox.find('button'),
        bar=conBox.find('.bar');

  conBtn.on('click',function(e){
    e.preventDefault();
    bar.toggleClass('hideBar');
    // toggleClass():class이름을 넣고빼고 변환기능
    let view=bar.hasClass('hideBar');
    // hasClass():class이름의 존재유무(t,f)판단
    if(view){
      bar.animate({width:0});
    }else{
      bar.animate({width:100+'%'});
    }
  });

})(jQuery);