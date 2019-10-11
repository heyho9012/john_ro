//  function_basic_01.js

/* *함수 :: function(){}
  *선언식, 표현식
  *익명함수, 즉시실행함수,(ES6:화살표함수)
*/

function myCoffee(a){
  var b=a*100;
  return b;
}
var rel_1=myCoffee(100), rel_2=myCoffee(2);
console.log(rel_1, rel_2);

function useName(a){
  return a+"님 어서오십시오.";
}
var u_1=useName('소연');
console.log(u_1);

function test(color){
  var web=document.getElementsByTagName('body')[0];
  web.style.backgroundColor="#"+color;
  return web;
}

// 함수 선언식::함수에 이름을 붙여서 사용하는 것
// function t2(){}

// 함수표현식::변수에 함수(익명함수:이름이 없는 함수)를 대입하여 사용하는 것
// var t3=function(){}

var variableFn=function(n){
  n=(n+100)*10;
  return n;
};
var v=variableFn(7);
console.log(v);

// 즉시 실행함수(IIFE)::함수 하나를 즉시 실행하세요 라는 뜻이 되는거죠 함수가 쉬운 용어는 아닙니다.
// ()();

var pr=100;
(function(myp){
  console.log(myp+1);
})(pr);

function Fn(myp){
  console.log(myp+1);
}
Fn(pr);

var Fn2=function(myp){
  console.log(myp+1);
};
Fn2(pr);

var f1=function(a){return a+10;}
console.log(f1(10));

var f2=(a)=>{return a+10;}
console.log(f2(15));

// var myName=function(b){return b};
var myCon={
  name:function(b){return b;}
};
console.log(myCon.name("xido"));

// 함수를 여러기능을 하나로 묶어서 처리하는 것으로, 생성과 동시에 실행되지 않지만, 호출하면 동작하게 한다.
// 이때, 함수를 객체 내부에 생성시킨 후에 해당 객체를 실행하게 하면, 함수가 동작한다.(동작하는 객체명을 메소드라고 부름)

