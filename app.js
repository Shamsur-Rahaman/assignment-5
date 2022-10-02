
let demoArray = [];


document.getElementById('btn1').addEventListener("click", function () {
    const neymer1 = document.getElementById('neymer');
    const neymer = neymer1.innerText;

    const player1 = document.getElementById('player1');
    player1.innerText = neymer;

    demoArray.push(neymer);

})

document.getElementById('btn2').addEventListener("click", function () {
    const vini1 = document.getElementById('vini');
    const vini = vini1.innerText;

    const player2 = document.getElementById('player2');
    player2.innerText = vini;

    return demoArray.push(vini);
})

document.getElementById('btn3').addEventListener("click", function () {
    const raphinha1 = document.getElementById('raphinha');
    const raphinha = raphinha1.innerText;

    const player3 = document.getElementById('player3');
    player3.innerText = raphinha;

    demoArray.push(raphinha);
})

document.getElementById('btn4').addEventListener("click", function () {
    const coutinho1 = document.getElementById('coutinho');
    const coutinho = coutinho1.innerText;

    const player4 = document.getElementById('player4');
    player4.innerText = coutinho;

    demoArray.push(coutinho);
})

document.getElementById('btn5').addEventListener("click", function () {
    const richalison1 = document.getElementById('richalison');
    const richalison = richalison1.innerText;

    const player5 = document.getElementById('player5');
    player5.innerText = richalison;

    demoArray.push(richalison);
})
document.getElementById('btn6').addEventListener("click", function () {
    alert("You have already selected 5 Players. Don't select anymore");
})


const perPlayer = document.getElementById('player-budget');
const perPlayerValue = perPlayer.value;

const playerExpense = document.getElementById('player-expense');
playerExpense.innerText = perPlayerValue * demoArray.length;


