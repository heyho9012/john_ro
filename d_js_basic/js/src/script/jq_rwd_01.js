// jq_rwd_01.js
(function($){
  // device 
  let mob=480, tab=768, pc=1280, laptop=1366;
  let mySet=['mobile','tablet','pc','laptop','pcfull']; 
  let myFile=['mob.html','tab.html','pcbase.html','laptop.html','pcfull.html']; 

  // 반응형 크기에 따라 불러오는 파일 정의
  // mobile, tablet, pc, laptop, pcfull
  const wrap=$('#wrap');
  let tempFile='./rwd_temp/';
  const LoadFile=function(w){
      for(let i=0;i<mySet.length;i++){
        switch(w){case mySet[i]: wrap.load(tempFile+myFile[i]); break;}
      }
  }//LoadFile()

  const win=$(window);
  let winW=win.outerWidth();
  // console.log(winW);
  // document.write(winW);
// ------------------------- now device size check
  let nowDevice=null;
  const DeviceCheck=function(w){
    if(w<=mob){nowDevice=mySet[0];
    }else if(w>mob && w<=tab){nowDevice=mySet[1];    
    }else if(w>tab && w<=pc){nowDevice=mySet[2];
    }else if(w>pc && w<=laptop){nowDevice=mySet[3];
    }else{nowDevice=mySet[4];}
    // console.log(nowDevice);
    return nowDevice;
  }//DeviceCheck();
  // -------------------------
  let beforeDevice=DeviceCheck(winW);
  LoadFile(beforeDevice);
  console.log('beforeDevice :',beforeDevice);

  win.on('resize',function(){
    let nowWinW=win.outerWidth();
    // console.log(nowWinW);
    let afterDevice=DeviceCheck(nowWinW);
    console.log('afterDevice :',afterDevice);
    if(winW!==nowWinW && beforeDevice!==afterDevice){
      location.reload(); //새로고침 
    }
  })
})(jQuery);