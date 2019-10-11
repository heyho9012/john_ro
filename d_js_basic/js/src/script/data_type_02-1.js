// data_type_02-1.js

var num=100, str='100', bool=false;
console.log(typeof(num), typeof(str), typeof(bool));
var myrel;
console.log(typeof(myrel));
console.log('=====================')

var arr=[1,2,3], obj={"a":"pen", "b":"mouse", "c":"microphone"}, reset=null;
console.log(typeof(arr), typeof(obj), typeof(reset));
// console.log(arr[2], obj["c"], obj.c);
// console.log(arr, obj);
console.log(arr.constructor.name, obj.constructor.name, reset);
console.log('=====================')

// var i=10+2, i=i-6, i=i*2, i=i/4, i=i%2;
// var i=10+2; i-=6, i*=2, i/=4, i%=2;
// console.log(i);

var n=10; 
++n, ++n;/* -도 마찬가지 */
n++;
console.log(n++);
console.log(n);

for(var i=0; i<10; i++){
  console.log(i);
}