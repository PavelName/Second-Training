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

const capitalize = (str) => {
  const strSlice = str.slice(0, 1).toUpperCase();
  const result = `${strSlice}${str.slice(1)}`;
  console.log(result);
  return result;
};

const capitalize1 = (str) => {
  const strSlice = str[0].toUpperCase() + str.slice(1);
  // const result = strSlice.toUpperCase();
  return strSlice;
};
 let exam = 'hello';
 const capitalize2 = (str) => `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;

console.log(capitalize2('titan'));

 console.log(exam.slice(1));
console.log(capitalize('mellion'));
console.log(capitalize1('trillion'));
