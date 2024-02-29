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

}

function checkMatch(){}


