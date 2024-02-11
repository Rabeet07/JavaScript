//question 01
let arr1 = [1,2,3,4,5,7,25,56,84]
let add1 = prompt("enter your adding number")
add1 = Number.parseInt(add1)
arr1.push(add1)
console.log("arr1 = ",arr1)

//question 02
let arr2 = [1,2,3,4,5,7,25,56,84]
let add2;
do {
    add2 = prompt("enter your adding number")
    add2 = Number.parseInt(add2)
    arr2.push(add2)
} while (add2 != 0);
console.log("arr2 = ",arr2)

//question 03
let arr3 = [1,2,30,40,5,7,250,56,84,340,5430];
let n = arr3.filter((div)=>{
    return div%10 == 0
})
console.log("arr3 = ",n)

//question 04
let arr4 = [1,2,3,4,5,6,7,8,9,10]
let b = arr4.map((x)=>{
    return x**2;
    //return x*x;
})
console.log("arr4 = ",b)

//question 05
let arr5=[1,2,3,4,5,6,7,8,9 ]
let c = arr5.reduce((x1,x2)=>{
    arr5 = Number.parseInt(arr5)
    return x1*x2;
})
console.log("arr5 = ",c)