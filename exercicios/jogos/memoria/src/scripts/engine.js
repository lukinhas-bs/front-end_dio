const emojis = [
    "🫡",
    "🫡",
    "🏈",
    "🏈",
    "🤣",
    "🤣",
    "🤤",
    "🤤",
    "😶‍🌫️",
    "😶‍🌫️",
    "🤬",
    "🤬",
    "😱",
    "😱",
    "😭",
    "😭",
];
let cartas = [];

let embaralhador = emojis.sort(()=>(Math.random() > 0.5 ? 2 : -1));

for(let i=0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = embaralhador[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if(cartas.length < 2){
        this.classList.add("boxOpen");
        cartas.push(this);
    }

    if(cartas.length == 2){
        setTimeout(checkMatch, 500);
    }

    console.log(cartas);
}

function checkMatchk(){
    if (cartas[0].innerHTML === cartas[1].innerHTML) {
    cartas[0].classList.add("boxMatch");
    cartas[1].classList.add("boxMatch");
    } else {
    cartas[0].classList.remove("boxOpen");
    cartas[1].classList.remove("boxOpen");
    }

    cartas = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("Você venceu !");
  }
}
