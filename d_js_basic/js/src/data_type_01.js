// data_type_01.js

/*
var int;
console.log(int);
var 댕댕이;
console.log(댕댕이);
댕댕이="멍멍이";
console.log(멍댕이);
console.log(댕댕이);*/
// * 결과값 참고하여 값이 undefined라면, 변수명은 선언했지만 값은 지정하지 않은 형태. 
// * 값이 not defined라면, 변수를 생성조차 하지 않은 형태.

/* var rel="10:01";
console.log(rel); */
// 스크립트기반 또는 언어라고 불리는 프로그래밍은 하나의 에러가 나면 이후의 내용은 동작하지 않는다.

/* var rel;
console.log(rel);
rel="10시40분"; */
// HOIST현상

/* let rel;
console.log(rel);
rel="10시40분"; */
// HOIST현상 안나타남::무조건 먼저 선언해야함
// 동일한 변수 선언하면 error::already been declared
// let은 변경해도 적용(const(X))

/* const rel;
rel="10시40분";
console.log(rel); */
// const:::Missing initializer in const declaration

/* 
  var::오래전부터 사용하던 변수
     ::hoist현상이 생김(호출하기 전에도 해당하는 변수가 존재하는 것처럼 인지)

  let::ECMA2015(es6)버전부터 생성된 변수
     ::hoist현상이 생기지 않음(현재 많이 사용하는 변수)

  const::ECMA2015(es6)버전부터 생성된 변수
       ::hoist현상이 생기지 않음
       ::변수로 불리지만 한 번 지정한 후에 값을 변경할 수 없는 변수(상수라고 불림)
       ::const rel; rel="ㅇ";console.log(rel); :: error뜬다

  let, const가 생긴 이후 var는 거의 사용하지 않는다.
*/


 /* var card=1000, chu=500, card=card-chu; 
 console.log(card);
 card+=50000;
 console.log(card);
 card-=13000; */
/* if(card < 0){
  console.log('잔액부족');
}else{
  console.log('잔액은',card);
} */
// (card<0) ? console.log('잔액부족') : console.log(card);
/* 
  * 사칙연산(+,-,*,/,%)
  * +=, -=, *=, /=
  * ++, --
  * ==, ===, !=, !==
  * <, >
*/

/* var int=10; 
console.log(int);

var rel=int+10; int=int+10; int=int-5; int=int*4; int=int/10; int=int%4; 
console.log(rel,int);

var int2=5012548712;  int2=int2%2;
console.log(int2);

(int2 == 0) ? console.log("짝수") : console.log("홀수");

var i=100; i+=2019; 
console.log(i); */

/* var a=10+10;    // a를 리터럴 +를 연산자 10을 오퍼레이션 2번째 10은 오퍼레이터

var now=1207; 
now++; now++; now++; now++;
console.log(now);
now--; now--; now--; now--;
console.log(now);
++now; ++now; ++now; ++now;
console.log(now);
--now; --now; --now; --now;
console.log(now); */
/* 
  * 증감연산자::1씩 더하거나, 빼는 기능
  * 전치연산자&후치연산자::1씩 더하거나, 뺄 때 (++,--)를 앞 또는 뒤에 붙일수 있다
*/

/* var myi=100;  
console.log(myi); console.log(++myi); console.log(++myi); console.log(--myi); console.log(--myi);
console.log("결과1",myi);
console.log(myi++); console.log(myi++); console.log(myi++);
console.log("결과2",myi);
console.log(myi--); console.log(myi--); console.log(myi--); console.log(myi--); 
console.log("결과3",myi);
console.log(++myi); console.log(myi++); console.log(myi--); console.log(myi++);
console.log("결과4",myi); */

var ls=77, tx="번방의 선물", myMv=ls+tx;
ls=2, tx="번가", myMv=ls+tx;
(ls<100) ? myMv="0"+ls+tx : myMv=ls+tx;
console.log(myMv);
var myN=parseFloat(myMv);
console.log(myN);
var myN=parseInt(myMv);
console.log(myN);







