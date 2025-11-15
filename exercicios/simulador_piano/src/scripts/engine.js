const pianoKeys = document.querySelectorAll(".pianos-keys .key");

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

let audio = new Audio("src/som/a.wav");

const playSom = (key) => {
    audio.src = `src/som/${key}.wav`
    audio.play();

    const clickKey = document.querySelector(`[data-key="${key}"]`) 
        clickKey.classList.add("active")
        setTimeout(() => {
            clickKey.classList.remove("active");
        }, 150)
};

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", ()=> playSom(key.dataset.key));

});

document.addEventListener("keydown", (e) => {
    playSom(e.key);
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);
