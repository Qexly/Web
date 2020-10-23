"use strict"
/*
new Promise(function(resolve, reject) {
  setTimeout(() => reject(1), 1000); // Устанавливает состояние промиса в ошибку
}).then(function(result) { // первый колбек в цепочке не срабатывает, т.к. state: rejected. result: 1;
  alert(result); 
  return result * 2;
},
function(result){ // срабатывает второй коллбек (отрицательный) ***
alert(result + ", неудача в первом коллбэке");
sss
return result + ", неудача в первом коллбэке"; 
}).then(function(result) { 
  alert(result + ", удача во втором коллбэке"); 
  return result + ", удача во втором коллбэке";
}, function(result){
alert(result + "неудача во втором коллбэке"); //***
return result + "неудача во втором коллбэке";
}).catch(function(result) { 
  alert(result + ", catch"); 
  return result + ", catch";
})
*/
//catch работает, если нет второй функции-обработчика в следующих then
new Promise(function(resolve, reject) {
  setTimeout(() => reject(1), 1000); // Устанавливает состояние промиса в ошибку
}).then(function(result) { // первый колбек в цепочке не срабатывает, т.к. state: rejected. result: 1;
  alert(result); 
  return result * 2;
},
function(result){ // срабатывает второй коллбек (отрицательный) ***
alert(result + ", неудача в первом коллбэке");
reject(sss);
return result + ", неудача в первом коллбэке"; 
}).then(function(result) { 
  alert(result + ", удача во втором коллбэке"); 
  return result + ", удача во втором коллбэке";
}).then(function(result) { 
  alert(result + ", удача в третьем коллбэке"); 
  return result + ", удача в третьем коллбэке";
},
function(result) {
  alert(result + ", неудача в третьем коллбэке"); 
  return result + ", неудача в третьем коллбэке"; //если тут не будет второго обработчика, который ловит ошибку то ошибка сможет добраться до catch 
}).catch(function(result) { 
  alert(result + ", catch"); 
  return result + ", catch";
})
