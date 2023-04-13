console.log('hi');
// const knopka=document.querySelector('.knopka')
// const zag=document.querySelector('.zag')
// knopka.addEventListener('click',nazh)
// function nazh () {
//     console.log('ok');
//     zag.classList.toggle('two')
// }

// const knopka=document.querySelector('.knopka')
// const zag=document.querySelector('.zag')
// knopka.addEventListener('click',nazh)
// function nazh () {
//     if (knopka.checked) {
//         zag.classList.add('two')
//     } else {
//         zag.classList.remove('two')
//     }
   
// }
// Используя функцию, выведите в консоль  "Good morning, programmer"
// function greet(time, name) {
// //   return time+' '+name
// // return `${time} ${name}`
// let result=`${time} ${name}`
// return result
// }

// console.log(greet('Good morning','programmer'));


// Есть функция, первый параметр принимает строку, второй цифру. Ваша задача проверить,
// количество символов в строке больше чем цифрв или нет. В зависимомти от результата
// в console.log() вывести true или false.

// function lenStr(words, num) {
//   return words.length>num
// }

// console.log(lenStr('Сергей',3))
// // 4)
// Используя функцию посчитайте скидку
// let start=prompt('Введите цену')
// let discount=prompt('Введите скидку')

// function sale(startPrice, discountPercent) {
//  let x= startPrice-(startPrice*discountPercent)/100
// return x
  
// }
// let itog=sale(start,discount)
// alert(`Финальная цена ${itog}` )
// console.log(sale(start,discount));

// ° F = ° C × 9/5 + 32
// или
// ° F = ° C × 1,8 + 32

// function convertTemp(celsius) { 
//   let per=celsius*9/5+32
//   return per

// } 
// convertTemp(10)
// console.log(convertTemp(1));

// // _________________
// const button=document.querySelector('.press');
// const par=document.querySelector('.par')
// button.addEventListener('click',buttonclick)
// function buttonclick(){
//     let input=document.querySelector('.one').value
//     input=Number(input)    
//     let input1=document.querySelector('.two').value
//     input1=Number(input1)
//     let input2=document.querySelector('.three').value
//     input2=Number(input2)    
//     const sum=(input+input1+input2)/3
//     console.log(sum);
//     par.innerHTML=sum
  


// }
// const ooo=document.querySelector('.ooo')
// ooo.addEventListener('click',one)
// function one() {
//   const x=document.querySelector('.in').value
// }
// function helloWorld(lang) {
//   if (lang=='fr') {
//     return 'Bonjour'
//   } else if (lang=='es') {
//     return 'Hola'
//   }
//   else {
//     return 'Hello world'
//   }
// }
// console.log(helloWorld('es'));

// ________________________________________
// function isValidNumber(num) {
//     if (typeof num=='number') {
//       let truenumber=num+' '+ 'is a valid number'
//     console.log(truenumber);
//   } else if (typeof  num=='string'){
//     let truestring=num+' '+ 'is not a number'
//     console.log(truestring);
//   }
// }
// isValidNumber(52)
// // ______________________________

// let restaurantBill = 100;

// function amountToPay(amount){
//     amount = amount + 0.0625 * amount             
//     return amount

// }
// amountToPay(restaurantBill);
// console.log(amountToPay(restaurantBill));


// alert(amountToPay1(100, 4.0));   
// alert(amountToPay1(100, 6.0));  

// function amountToPay1(amount,stateRate){
//     amount= amount+(stateRate/100)*amount
// return amount

//  }
// <!-- Создание счётчика + тернарный оператор -->
const counter=document.querySelector('.counter')
counter.addEventListener('click',one)
let sumcounter=0
function one() {
  sumcounter++
  console.log(sumcounter);
  counter.innerHTML='количество:'+sumcounter
  if (sumcounter>=5) {
    // counter.classList.add("third")
    counter.className='third'
  }
  // let buttonstyle=(sumcounter>=5)? 'third':''
  // counter.classList.add(buttonstyle)
}



