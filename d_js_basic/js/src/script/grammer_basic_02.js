// grammer_basic_02.js

// while(){}
/* var n=0;  console.log(n);

while(n<=10){
  console.log(n);
  n++;
} */
/* var n=0; 
do{
  console.log(n)
  n++;
}while(n<=10)
console.log(n); */
/* var n=0;
for(;n<=10;){
  console.log(n);
  n++;
} */
/* for(let n=0;n<=10;n++){
  console.log(n);
} */
//var arr=['사과','배','바나나','오렌지','키위']
//for(var i in arr){console.log(arr[i])}
/*for(let i=0;i<5;i++){
  console.log(arr[i])
}
//배열에서는 for~in을 사용하지 않는다!!! */
/* let obj={"red":"사과","yellow":"바나나","orange":"오렌지","green":"키위","purple":"포도"};
for(let i in obj){
  console.log(obj[i]);
} */

//[].forEach()
/* let myArr=['빨강','파랑','노랑','녹색','보라'];
myArr.forEach(function(data){
  console.log(data)
}); */

//for test--------------------------------------

// var product=document.getElementsById('product');
let product=document.querySelector('#product');
product.style.width="100%";
product.style.auto="auto";
product.style.minHeight="300px";
product.style.backgroundColor="#f96";

let ul=document.createElement('ul');
product.appendChild(ul); 
ul=document.querySelector('#product>ul');
ul.style.width="90%";
ul.style.height="auto";
ul.style.minHeight="400px";
ul.style.backgroundColor="#77f";

let ar=['우유','주스','차','커피','슬러시','요거트']
for(let i=0;i<ar.length;i++){
  let li=document.createElement('li');
  let myText=document.createTextNode(ar[i]);
  li.appendChild(myText);
  ul.appendChild(li);
}

// 생성자(new),this(window,그것),prototype
// property
// 내장함수