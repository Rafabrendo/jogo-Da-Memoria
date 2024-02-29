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
    document.querySelector(".game").appendChild(box);
}


