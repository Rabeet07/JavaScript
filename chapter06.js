//question 01
function driver1() {
    let age = prompt("what is your age")
    age = Number.parseInt(age)
    if(age>=18){
        alert("yes you can drive")
    }
    else if (age<18) {
        alert("no! you cannot drive")
    }
}
// driver1()

//Question 02
function driver2() {
    
    let runagain = true;
    while(runagain){
        let age1 = prompt("what is your age")
        age1 = Number.parseInt(age1)
        if(age1>=18){
            alert("yes you can drive")
        }
        else if (age1<18) {
            alert("no! you cannot drive")
        }
        runagain = confirm("do you want to play again!")
    }
}
// driver2()

//question 03
function driver3() {
    let age2 = prompt("what is your age")
    age2 = Number.parseInt(age2)
    if (age2<0) {
        console.error("your age is not valid")
    }
    else if(age2>=18){
        alert("yes you can drive")
    }
    else if (0<age2<18) {
        alert("no! you cannot drive")
    }
}
// driver3()

//question 04
function driver4() {
    let age3 = prompt("what is your age")
    age3 = Number.parseInt(age3)
    if (age3==4) {
        location.href = "http://google.com"
     }
    else if(age3>=18){
        alert("yes you can drive")
    }
    else if (age3<18) {
        alert("no! you cannot drive")
    }   
}
driver4()

//question 05
function colour() {
    let bc = prompt("type your fav background colour")
    document.body.style.background = bc

}
colour()