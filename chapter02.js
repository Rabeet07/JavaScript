//question 01
// let c = prompt("what's your age");
const c = 23;
if (c>10 && c<20){
console.log("your age is lies between 10 and 20")
}
else{
console.log("your age is dosn't lies between 10 and 20")
}

//question 02
let d = prompt("what's your age");
// const d = 23;
switch (d){
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
        console.log("you are kid");
    break;
    case '10':
    case '11':
    case '12':
    case '13':
    case '14':
    case '15':
    case '16':
    case '17':
    case '18':
        console.log("you are boy")
    break;
    default:
        console.log("you are a man")
        break;
}

//question 03
// let e = prompt("type your number")
const e = 23;
if (e%2==0 && e%3==0){
    console.log("your number is dividible by 2 and 3")
}
else{
    console.log("your number is not dividible by 2 and 3")
}

//question 04
// let f = prompt("type your number")
const f = 23;
if (f%2==0){
    console.log("your number is dividible by 2")
}
else if(f%3==0){
    console.log("your number is dividible by 3")
}
else{
    console.log("your number is not dividible by 2 and 3")
}

//question 05
// let g = prompt("what is your age");
const g = 23;
let h = (g>18? "you can drive" : "you cannot drive")
console.log(h)