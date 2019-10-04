// object_basic_01.js

// javascript에서는 배열과 객체 모두 형타입을 object

var mic="microphone", arr=[1,5,'apple',mic];
// console.log(arr);
var fruits=['durian','mango','starfruits','gyul','gging-ggang']
// console.log(fruits);
// console.log(fruits[2]);
var drink=[['esspreso','americano','latte'],['appleJuice','kiwiJuice','tomatoJuice'],['blackfirst','liptone']];
// console.log(drink[0]);
var mydrink=drink[2];
// console.log(mydrink[0],drink[2][0]);
var obj={'korea':'이순신','usa':'캡틴아메리카','india':'간디'};
console.log(obj['korea'],obj['usa'],obj['india']);
console.log(obj.korea, obj.usa, obj.india);

