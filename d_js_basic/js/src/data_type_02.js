// data_type_02.js

// 자료형 파악하기

var i=0, myType=typeof(i), 
    s="mytext", myType2=typeof(s);
console.log(i,myType);
console.log(s,myType2);

var is=i+s, myT3=typeof(is);
console.log(myT3);

let n=null, myT4=typeof(n);
console.log(n);

let bool=!true, myT5=typeof(bool);
console.log(bool, myT5);

var arr=['samsung','lg','apple'], arrT=typeof(arr);
console.log(arr,arrT);
console.log(arr['0']);

var obj={'samsung':'gallaxy','lg':'v50s','apple':'iphone'}, objT=typeof(obj);
console.log(obj,objT);
console.log(obj['samsung']);
