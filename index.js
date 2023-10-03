let home=document.getElementById("home")
let away=document.getElementById("away")
let pointsHome=0
let pointsAway=0

let startTextHome=home.textContent
let startTextAway=away.textContent


function add3() {
    pointsHome +=3
    home.innerText=startTextHome + pointsHome
}

function add2() {
    pointsHome +=2
    home.innerText=startTextHome + pointsHome
}

function add1() {
    pointsHome +=1
    home.innerText=startTextHome + pointsHome
}


function add3Away() {
    pointsAway +=3
    away.innerText=startTextAway + pointsAway
}

function add2Away() {
    pointsAway +=2
    away.innerText=startTextAway + pointsAway
}

function add1Away() {
    pointsAway +=1
    away.innerText=startTextAway + pointsAway
}


function reset() {
    pointsHome=0
    pointsAway=0
    home.innerText=startTextHome + pointsHome
    away.innerText=startTextAway + pointsAway

}