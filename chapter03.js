//question 01
var marks = {
    harry: 98,
    rohan: 70,
    aakash: 7
}
for(let i = 0; i < Object.keys(marks).length ; i++){
    console.log("the marks of "+ Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

//question 02
for (let j in marks){
    console.log("the marks of "+ j + " are "+ marks[j])
}

//question 03
let k = 23;
let num ;
while (num != k) {
    num = prompt("enter a correct number")
    if (k != num){
        console.log(`try again ${num} is not correct`);
    }
}
console.log("your number is correct");

//question 04
function avgoffive(l,m,n,o,p) {
    return (l+m+n+o+p)/5
  }
  console.log(avgoffive(1,2,3,4,5))