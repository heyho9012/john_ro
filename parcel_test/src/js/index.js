// index.js
let p=document.querySelector('p');
// var p=document.getElementsByTagName('p')[0];
p.style.border="3px solid #555";

const conP=document.querySelector('p.con');
const myT=document.createTextNode('버튼 클릭 내용 변경');
const btn=document.querySelector('.btn');

btn.addEventListener('click',function(){
  conP.appendChild(myT);
})