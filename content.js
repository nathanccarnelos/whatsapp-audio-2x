const wppHeaderClass = "._1QUKR" ;

const storageSpeed = {
    get: () => Number(localStorage.getItem('wpp-speed')),
    set: (v) => localStorage.setItem('wpp-speed', v)
};

if(!storageSpeed.get()) {
    storageSpeed.set(1)
};

const interval = setInterval(() => {
    const header = document.querySelector(wppHeaderClass);
    if (!header) return;

    clearInterval(interval);
    let speed = storageSpeed.get();
    const button = createButton(speed)
    header.appendChild(button);

    button.addEventListener("click", () => {
        if (speed === 2) {
            speed = 1;
            storageSpeed.set(speed);
            button.classList.remove("active");
            button.changeText(speed);
            return;
        }
        speed += 0.25;
        button.classList.add("active");
        button.changeText(speed);
        storageSpeed.set(speed);
    })

    document.addEventListener("click", () => {
        const audios = document.querySelectorAll("audio");
        audios.forEach((audio) => {
            audio.playbackRate = speed;
        })
    })
}, 1000)

function speedText(speed) {
    return `${speed}x`;
}

function createButton (speed) {
    const button = document.createElement("button");
    button.changeText = (s) => {button.innerHTML = speedText(s)};
    button.classList.add("twoTimesButton");
    if(speed > 1) button.classList.add("active");
    button.changeText(speed);
    return button;
}