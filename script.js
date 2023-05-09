console.log("Welcome to Spot on!");

// Initalize the variables
let songIndex
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById(masterPlay);
let myProgressBar = document.getElementById(myProgressBar);
let songs = [
    {songName: "Perfect", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Perfect", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Perfect", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Perfect", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Perfect", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Perfect", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Perfect", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Perfect", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Perfect", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Perfect", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
]
// audioElement.play();

//Here we will control play/pause on click button
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
    }
})
// Event listeners
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //here we are updating the seekbar.
});