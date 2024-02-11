//question 01
console.log("rab\"".length)

//question 02
//include() example
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

//startwith() example
const str11 = 'Saturday night plans';
console.log(str11.startsWith('Sat'));
console.log(str11.startsWith('Sat', 3));

//endwith() example
const str1 = 'Cats are the best!';
console.log(str1.endsWith('best!'));
console.log(str1.endsWith('best', 17));
const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));

//question 03
console.log(a.toUpperCase());
console.log(a.toLowerCase());

//question 04
let r = "Please give me Rs 2000";
let amount = r.slice("Please give me Rs ".length)
console.log(amount);

//question no 05
a[3] = "h";//its not working
console.log(a);