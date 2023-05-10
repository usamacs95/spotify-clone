console.log("Welcome to Spot on!");

// Initalize the variables
let songIndex
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
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
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})
// Event listeners
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //here we are updating the seekbar.
   // progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
   // console.log(progress);
    //myProgressBar.value = progress;

    myProgressBar.addEventListener('change', function() {
        // Calculate the new time
        let time = audioElement.duration * (myProgressBar.value / 100);
    
        // Update the time
        audioElement.currentTime = time;
    });
// Update the seek bar as the audio plays
audioElement.addEventListener('timeupdate', function() {
    // Calculate the slider value
    let value = (100 / audioElement.duration) * audioElement.currentTime;

    // Update the slider value
    myProgressBar.value = value;
});

// Pause the audio when the seek handle is being dragged
myProgressBar.addEventListener('mousedown', function() {
    audioElement.pause();
});

// Play the audio when the seek handle is dropped
myProgressBar.addEventListener('mouseup', function() {
    audioElement.play();
});


});