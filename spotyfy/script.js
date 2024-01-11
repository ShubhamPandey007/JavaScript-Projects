console.log("welcome to spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "salama-e-ishq", filePath:"songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "salama-e-ishq", filePath:"songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "salama-e-ishq", filePath:"songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "salama-e-ishq", filePath:"songs/1.mp3", coverPath: "cover/1.jpg"},

]


// audioElement.play();


// Handele play/push click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update the
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log('progress');
     
})