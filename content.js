const interval = setInterval(() => {
    const header = document.querySelector("._1QUKR")
    if (header) {
        clearInterval(interval);
        const button = document.createElement("button")
        let speed = 1
        button.innerHTML = speed + 'x';
        button.classList.add("twoTimesButton");
        header.appendChild(button);

        button.addEventListener("click", () => {
            if (speed === 2) {
                speed = 1
                button.classList.remove("twoTimesButtonActive");
                button.innerHTML = speed + 'x';
                return
            }
            speed += 0.25
            button.classList.add("twoTimesButtonActive");
            button.innerHTML = speed + 'x';
        })

        document.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                audio.playbackRate = speed;
            })
        })

    }
}, 1000)
