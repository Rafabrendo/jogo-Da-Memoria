const emojis = [
    "💲",
    "💲",
    "🐴",
    "🐴",
    "☁️",
    "☁️",
    "⭐",
    "⭐",
    "🇧🇷",
    "🇧🇷",
    "🌍",
    "🌍",
    "🦍",
    "🦍",
    "🦖",
    "🦖",
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
//Uma das melhores maneiras de deixar algo randomico, dando alguns pesos para determinados elementos e deixando o computador "escolher"

for(let i=0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen"); //Toda vez que um card for aberto
        //será criado uma classe chamada boxOpen
        openCards.push(this);
    }
    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }

    console.log(openCards);

}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    
    openCards = []; //Aqui eu zero o vetor, para conseguir trabalhar com ele novamente!

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você venceu!");
    }

}


