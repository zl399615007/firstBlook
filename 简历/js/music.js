var audioDemo = document.querySelector("#audioDemo"), musicBtn = document.querySelector("#musicBtn");
window.setTimeout(function () {
    audioDemo.play();
    audioDemo.addEventListener("canplay", function () {

        musicBtn.style.display = "block";
        musicBtn.className = "musicMove";
    }, false);
    musicBtn.addEventListener("touchend", function () {
        if (audioDemo.paused) {
            audioDemo.play();
            musicBtn.className = "musicMove";
            return;
        }
        audioDemo.pause();
        musicBtn.className = "";
    }, false);
}, 1000);