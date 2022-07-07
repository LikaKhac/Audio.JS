var data = {
    title: [
        "Maneskin-Beggin",
        "Imagine Dragons-Enemy",
        "Glass Animals-Heat Waves",
        "Studio Killers-Jenny",
        "Olivia Rodrigo - happier ",
    ],
    song: [
        "music/Beggin.mp3",
        "music/Enemy.mp3",
        "music/Heat Waves.mp3",
        "music/Jenny.mp3",
        "music/happier.mp3",
    ],
    poster: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/469d89109454817.5fd3e05f91674.gif",
        "https://www.icegif.com/wp-content/uploads/aesthetic-icegif-1.gif",
        "https://media2.giphy.com/media/1YrRREoNBO6opPn2vM/giphy.gif",
        " https://thumbs.gfycat.com/BountifulSoggyDrake-size_restricted.gif",
        "https://i.pinimg.com/originals/9f/9a/fe/9f9afe473bbb71a1278741439b26521f.gif",
    ],
}
var currentSong = 0
var song = new Audio()


window.onload = function () {
    playSong()
}
function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById("row1");


    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
}
function playOrPauseSong() {
    let play = document.getElementById("play")
    if (song.paused) {
        song.play();
        play.src = "images/pause.png"
    }
    else {
        song.pause();
        play.src = "images/play-button-arrowhead.png"
    }
}


song.addEventListener("timeupdate", function () {
    let fill = document.getElementById("fill")
    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%"; // fill

    convertTime(song.currentTime) // cur. time

    if (song.ended) {
        next()
    }
})

function convertTime(seconds) {

    let currentTime = document.getElementById("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;


    currentTime.textContent = min + ":" + sec

    totalTime(Math.round(song.duration))

};

function totalTime(seconds) {
    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    if (isNaN(min) || isNaN(sec)) {
       return false 
    } else {
        currentTime.textContent += " / " + min + ":" + sec
    }
};


function next() {
    currentSong++;
    console.log(currentSong);
    if (currentSong >= data.song.length) {
        currentSong = 0
    }
    playSong();
    play.src = "images/pause.png"
}
function pre() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = data.song.length - 1;
    }
    playSong();
    play.src = "images/pause.png"
}


function muted() {
var mute = document.getElementById ("mute")
if (song.muted) {
song.muted = false
mute.src = "images/volume.png" //mute
} else {
song.muted = true
mute.src = "images/volume-mute.png"
//unmute
}
}
function decrease(){
song.volume-=0.2
}
function increase(){
    song.volume+=0.2
    }
    
