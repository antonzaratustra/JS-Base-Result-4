//==========================Task 1===================

// Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true, если оно простое, иначе — false.

// Примечание. Простые числа — это числа, которые больше 1 и не имеют делителей, кроме 1 и самого себя.

// function isPrimeNumber(number) {
//  if (number === 0) return false
  
//   for (let i = number - 1; i > 1; i--) { 
//     if ((number % i) === 0) {
//        return false
//     }
//   }

//   return true

// }

// function printPrimeNumbers(max) {
//   for (let i = 0; i < max; i++) {
//     if (isPrimeNumber(i)) console.log(i)
//   }   
// }

// printPrimeNumbers(100)

//==========================Task 2===================

// function func(num, min, max) {
//   if (num < min) {
//     return min ** 2
//   } else if (num > max) {
//     return max ** 2 
//   } else if (num < max - (max - min) / 2) 
//   {
//     return num ** 2 
//   } else {
//     return Math.floor(num)
//   }
// }

// console.log(func(3, 1, 10)); // 9
// console.log(func(15, 1, 10)); // 100
// console.log(func(5, 1, 10)); // 25
// console.log(func(8.5, 1, 10)); // 8

//==========================Task 3===================

// function isPerfectNumber(number) {
//   counter = 0

//   for (let i = 0; i < number; i++) {
//     if (number % i === 0) counter += i
//   }

//   if (counter === number) return true

//   return false
// }

// console.log(isPerfectNumber(6));   // true
// console.log(isPerfectNumber(28));  // true
// console.log(isPerfectNumber(12));  // false
// console.log(isPerfectNumber(16));  // false

//==========================Task 4===================

// Задание #4

// Напишите функцию getNumberDigit(), которая принимает число (number) и индекс цифры в числе (digitPosition). Возвращает она цифру числа number, находящуюся на позиции digitPosition. 

// Если происходит попытка чтения числа на позиции, которой не существует (например, кол-во цифр в числе меньше, чем передано в digitPosition), то верните undefined.

// Примечание. Нельзя использовать приведение числа к строке.

// function getNumberDigit(number, digitPosition) {
// const array = []

// for (let i = number; i != 0; i /= 10) {
//   if (Math.trunc(i % 10) <= 0) break
//   array.push(Math.trunc(i % 10))
// }

// array.reverse();
  
// return array[digitPosition]
// }

// console.log(getNumberDigit(123, 0)) // 1
// console.log(getNumberDigit(123, 1)) // 2
// console.log(getNumberDigit(123, 2)) // 3
// console.log(getNumberDigit(1, 2)) // undefined

