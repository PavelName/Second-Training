// const text = 'Never forget what you are, for surely the world will not';
// const result = `First: ${text[0]}\nLast: ${text[text.length -1]}`;
// console.log(result);
// const random = Math.random() * 10;
// console.log(random);

// const result = Math.round(random);
// console.log(result);
// console.log(Math.round(Math.random() * 10));
// const text = 'Never forget what you are, for surely the world will not';
// const result =`First: ${text[0]}\nLast: ${text[text.length - 1]}`;
// console.log(`First: ${text[0]}\nLast: ${text[text.length - 1]}`);
// const name = 'Hello hello zero';
// console.log(name.toUpperCase().toLowerCase());
// const text = 'When \t\n you play a \t\n game of thrones you win or you die.';
// console.log(text.slice(9, 15).trim().length);
// const name = 'Tirion';
// console.log(name.length.toString());

// const sayHurrayThreeTimes = () => {
//   const text = 'hutty!';
//   const result = `${text} ${text} ${text}`;
//   return result;
// }
// const secondResult = sayHurrayThreeTimes();
// console.log(secondResult);

// const name = 'Google';
// const replaced = (text, from, to) => {
//   return text.replace(from, to);
// };

// console.log(replaced('Noogle', 'No', 'Mo'));

// const text = 'welcome';

// const adding = `${text}...`;

// console.log(adding);




// const trancate = (text, length) => {
//   return text.slice(0, length) + '...';
// };
// console.log(trancate('numbers', 4));
// const print = (text = 'Titan') => console.log(text);
// print();
// print('Harry!');
// const getHiddenCard = (num, star = 4) => {
//   const slice = num.slice(12, 16);
//   const result = `${'*'.repeat(star)}${slice}`
//   return result;
// };
// console.log(getHiddenCard('1355677889235678'));
// console.log(getHiddenCard('1355677889235678', 2));

// const capitalize = (str) => {
//   const strSlice = str.slice(0, 1).toUpperCase();
//   const result = `${strSlice}${str.slice(1)}`;
//   console.log(result);
//   return result;
// };

// const capitalize1 = (str) => {
//   const strSlice = str[0].toUpperCase() + str.slice(1);
//   // const result = strSlice.toUpperCase();
//   return strSlice;
// };
//  let exam = 'hello';
//  const capitalize2 = (str) => `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;

// console.log(capitalize2('titan'));

//  console.log(exam.slice(1));
// console.log(capitalize('mellion'));
// console.log(capitalize1('trillion'));

// let count = 0;
// for(let i = 1; i <= 5; i++){
//   count +=2;
//   console.log(count);
//   console.log(i);
// }

// let count = 10;
// for(let i = count; i >= 1; i--){
//   if(i > 5){
//     console.log('hi');
//   }else{
//     count += i;
//   }
  
//   console.log('i: ' + i);
//   console.log('count:' + count);
// }

// let sum = 0;
// for(let i = 1; i <= 10; i++){
//   if(i % 2 === 0){
//     sum +=2;
//     console.log(`чётное число: ${sum}`)
//   }else{
//     sum += 1;
//     console.log(`нечётное число: ${sum}`);
//   }
  
//   console.log('i:' + i);
//   console.log('sum: ' + sum);
// }

// const count = ()=> {
//   let days = 19;
//   let evenDayAnmount = 200;
//   let oddDayAnmount = 100;
//   let total1 = 0;
  
//   for(let i = 1; i <= days; i++){
//     if(i % 2 === 0){
//       total1 = evenDayAnmount;
//       console.log(i);
//       console.log(`чётные дни: ${evenDayAnmount} протеина`);
//     }else{
//       total1 = oddDayAnmount;
//       console.log(`нечётные дни: ${oddDayAnmount} протеина`);
//     }
//   }
  
// }
// count();


// let firstWeight = 16000;
// let secondWeight = 5000;
// let day = 0;
// while(firstWeight > secondWeight){
//   let resul = (firstWeight / 100) * 5;
//   firstWeight -= resul;
//   day++;
// }
// console.log(day);
// let count = 10
// for(let i = 1; i <= count; i++){
//   console.log(i);
// }
// let count = 5;
// for(let i = count; i >=0; i--){
//   if(i > 2){
//     console.log('hi');
//   }
//   console.log(i);
// }
// let str = 'titan';
// for(let i = 0; i < str.length; i++){
//   console.log(str[i]);
// }
 
// let str = 'Titan';
// for(let i = str.length; i >= 0; i--){
//   console.log(str[i]);
// }

// function culk (distance){
// let percent = 0.25;
// if(distance > 10500){
//   percent = 0.35;
// }
// let miles = Math.floor(distance * percent);
// return miles;
// };

// console.log(`За полет получим ${culk(4500)} милей!`);
// console.log(`За полет получим ${culk(14500)} милей!`);

// function calculateSalary (salaryAmount){
//   let taxes = 0.25;
//   if(salaryAmount >= 100000){
//     taxes = 0.35;
//   }
//   let result = Math.round(salaryAmount * taxes);
//   let whiteSallary = salaryAmount - result;
//   return whiteSallary;
// };
// console.log(`Чистая ЗП: ${calculateSalary(145000)}`);

// let count = [1, 3, 5, 6, 68, 5];
// for(let i = 0; i <= count.length - 1; i++){
//   console.log(count[i]);
// }
// let count1 = [1, 3, 5, 6, 68];
// for(let i = count.length - 1; i > 0; i--){
//   console.log(count[i]);
// }
// let symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// let encodedSymbols = [18, 38, 46, 62, 66, 50, 33, 41, 66, 49, 48, 38, 58, 62, 68, 66, 48, 37, 42, 47, 66, 50, 33, 41, 66, 49, 48, 51, 49, 42, 67];

// let decodedMasege = '';
// for(let i = 0; i <= encodedSymbols.length; i++){
//   const index = encodedSymbols[i];
//   decodedMasege += symbols[index];
// };
// console.log(decodedMasege);
// console.log(symbols[1]);

// let encodedSymbols = [2, 1, 3, 5];
// let swap = encodedSymbols[0];
// console.log(encodedSymbols);
// encodedSymbols[0] = encodedSymbols[1];
// console.log(encodedSymbols);
// encodedSymbols[1] = swap;
// console.log(encodedSymbols);


// search min value

let usersByDay = [1, 12, 5, 3, 2];
console.log(usersByDay);

let currentIndex = 1;
let minValue = usersByDay[currentIndex];
// console.log(minValue);

for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  if(usersByDay[j] < minValue){
    minValue = usersByDay[j];
    console.log('Новый минимальный элемент: ' + minValue);
    }
}
console.log('Минимальный элемент: ' + minValue);