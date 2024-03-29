const state = {
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score-points"),
    },
    cardSprites:{
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards:{
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    actions:{
        button:document.getElementById("next-duel")
    }
}

const playerSides = {
    player1: "player-field-card",
    computer: "computer-field-card",
}

const pathImages = "./src/assets/icon/";

const cardData =[ 
    {
        id:0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        winOf: [1],
        loseOf: [2],
    },
    {
        id:1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        winOf: [2],
        loseOf: [0],
    },
    {
        id:2,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        winOf: [0],
        loseOf: [1],
    },
];

async function drawCards(cardNumber, fieldSide){
    for (let i = 0; i < cardNumber; i++) {
        const randomCardId = await getRandomCardId();
        const cardImage = await creatCardImage(randomCardId, fieldSide);      

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

function init(){
    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);
}

init();