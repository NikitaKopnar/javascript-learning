//1.Ways to print in javascript
//console.log("hello World !");//print simple text
//alert("me");
//document.write("this is document write")

//2.Javascript console API
// console.log("hello World !", 4 + 6, "Another log");//print simple text
// console.warn("This is warnign");//print warning in yellow color
// console.error("This is an error");//print error in red color
//console.clear(); To clear the console.

//3.javascript variables
//What are variables - Containers to store data.

//Number
// var number1 = 34;
// var number2 = 56;
//console.log(number1+number2); 

//string
// var str1 = "This is a string";
// var str2 = "This is also a string";

//objects
// var marks = {
    // ravi: 90,
    // nikita: 100,
    // neha: 100.00
//}
//boolean
// var a = true;
// var b = false;

//undefined
// var u;

//null
// var n = null;
//console.log(number1,number2,str1,str2,marks,a,b,u);

//array
// var arr = [1, 2, "nikita", 4, 5]
//console.log(arr);

//4.Operators :Arithmetic,Assignment,comparison,Logical

//Arithmetic
// var num1 = 100;
// // var num2 = 100;
// console.log("Num1 + Num2",num1+num2);
// console.log("Num1 - Num2",num1-num2);
// console.log("Num1 * Num2",num1*num2);
// console.log("Num1 / Num2",num1/num2);

//Assignment
// var c = b;
// c += 2;
// c -= 2;//c=c-2
// c *= 2;
// c /= 2;
//console.log(c);

//Comparison
// var x = 34;
// var y = 24;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);

//Logical
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);
// console.log(!false);
// console.log(!true);

//5.function
// function avg(a, b) {
//     return (a + b) / 2;
// }
// c1 = avg(4, 6);
// c2 = avg(14, 16);
//console.log(c1,c2);

//6.Conditionals in js
//var age = 4;
//simple if
//if (age > 8) {
    //console.log("You are not kid");
//}

//if-else
//if (age > 18) {
    //console.log("You are not kid");
//}
//else {
    //console.log("you are kid");
//}

//else-if ladder
//if (age > 2 && age < 5) {
    //console.log("You are small kid");
//}
//else if (age > 5 && age < 10) {
    //console.log("You are kid");
//}
//else if (age == 5) {
    //console.log("you are kid");
//}
//else {
    //console.log("You are human being!!");
//}

//Looping
//for
// var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         //break;
//         continue;
//     }
//     console.log(arr[i]);
// }

//forEach
//arr.forEach(function (ele) {
    //console.log(ele);
//})

//while loop
// const ac = 1;
// ac++
//let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++
// }

//Do-while loop
// do{
//   console.log(arr[j]);
//   j++
// }while(j<arr.length);

//practicing and Running Array imp methods.
//let myArr = ["Fan","Camera",34,null,true];
// console.log(myArr.length);//print length of array
// myArr.pop();
// console.log(myArr);//pop() applied,true will not print
// myArr.push("Nikita");
// console.log(myArr);//push() applied,append Nikita at end.
// myArr.shift()
// console.log(myArr);//shift(),will not print Fan,rest value will get printed.
// myArr.unshift("Nikita");
// console.log(myArr);//unshift(),will add Nitita at 0th index,and value will get printed.
// console.log(myArr.toString());//all array value will get printed in string form, only null will not print.

//practicing and Running String imp methods
// let str1="learning javascript";
// console.log(str1.length);//length of string.
// console.log(str1.indexOf("javascript"));//indexOf j will get printed.
// fist occurence will get printed we can use lastIndexOf for last occurence.
// console.log(str1.slice(0,3))//0 to 3-1=2 char will get printed. output:lea


//Dates in javascript
// let date=new Date();
// console.log(date.getTime());//Gets the time value in milliseconds.
// console.log(date.getFullYear());//Gets the year, using local time.
// console.log(date.getDay());//Gets the day of the week, using local time.
// console.log(date.getMinutes());//Gets the minutes of a Date object, using local time.
// console.log(date.getHours());//Gets the hours in a date, using local time

//DOM Manipulation.
// let elem=document.getElementById('btn');
// console.log(elem);
// let elemclass=document.getElementsByClassName("container");
// console.log(elemclass);
// elemclass[0].style.background = "Yellow";
// elemclass[0].classList.add("bg-primary");
// elemclass[0].classList.add("text-success");
// elemclass[0].classList.remove("text-success");

//Events in javascript.
//Event on button click
// function clicked(){
//     console.log("click me button clicked");
// }
//event on document load
// window.onload=function(){
//     console.log("The document is loaded");
// }
//click event on container
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log("clicked on Container");
// });
//mouseover event on container
// firstContainer.addEventListener('mouseover',function(){
// console.log("Mouse on Container");
// });
//mouseout event out container
// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out of Container");
// });
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
//mouseup event on container
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log("Mouse up clicked on Container");
// });
//mouseup event on container
// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked2</b>"
//     console.log("Mouse down clicked on Container");
// });

//Arrow function 
// function sum(a,b){
//     return a+b;
// }
//can be written as 
// sum=(a,b)=>{
//     return a+b;
// }

// function log_time()
// {
//     console.log("After 2000 milliseconds , I am exceuted");
// }
//OR
// log_time=()=>{
//     console.log("After 2000 milliseconds , I am exceuted");
// }

//setTimeout
//setTimeout(log_time,2000);

//setInterval
//setInterval(log_time,2000);

//to stop setInterval() or setTimeout() method we can use clearInterval() or clearTimeout() respectively.

//javaScript local storage.
//localStorage.setItem('name','Nikita')
//localStorage.getItem('name')

//JSON
// obj ={
//     name:"Nikita",
//     lastName:"Kopnar",
//     a:{this:"that"}
// }
// jso=JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// parsed=JSON.parse('{"name":"Nikita","lastName":"Kopnar","a":{"this":"that"}}')
// console.log(parsed);

