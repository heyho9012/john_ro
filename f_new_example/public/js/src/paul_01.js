(function($){
  const body=$('body');
  const wrap=$('#wrap');
  wrap.append('<header id="headBox"></header>')
      .append('<section id="viewBox"></section>')
      .append('<article id="conBox"></article>')
      .append('<article id="conBox2"></article>')
      .append('<article id="conBox3"></article>')
      .append('<article id="conBox4"></article>')
      .append('<footer id="footBox"></footer>');

  const file=['headBox','viewBox','conBox','conBox2','conBox3','conBox4','footBox'];
  let fileLen=file.length;
  let url='./temp/paul_';
  let jsUrl='../js/src/temp/paul_';
  let scriptSam=function(file){
        return body.append(`<script src="${jsUrl+file}.js"></script>`);
      };
  for(let i=0;i<fileLen;i++){
    $('#'+file[i]).load(url+file[i]+'.html',function(){
      scriptSam(file[i]);
    });
  };
  setTimeout(function(){
    scriptSam('scroll');
  },100);

})(jQuery);