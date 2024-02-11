let player = prompt("enter s, g or w ")
let cpuI = Math.floor(Math.random()*6)
let cpu = ["s", "w", "g", "s", "w", "g"][cpuI]
let match = (player, cpu)=>{
    if (player===cpu) {
        return "nobody"
    }    else if (player==="s" && cpu==="w") {
        return "you "
    }    else if (player==="s" && cpu==="g") {
        return "cpu "
    }    else if (player==="g" && cpu==="w") {
        return "cpu "
    }    else if (player==="g" && cpu==="s") {
        return "you "
    }    else if (player==="w" && cpu==="s") {
        return "cpu "
    }    else if (player==="w" && cpu==="g") {
        return "cpu "
    }
}

let result = match(player, cpu);
alert(`cpu:${cpu} \n you:${player} \n the winner is ${result}`)
console.log("the winner is",result)