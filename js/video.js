var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('video');
	video.autoplay = false;
	video.loop = false;
	video.load();
});
document.querySelector("#play").addEventListener("click", function(){
	console.log("Play Video");
	video.play();
	video.volume = 1;
});
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate /= 0.9;
	console.log(video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip Video");
	if(video.currentTime+10>=video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime+=10;
	}
	console.log(video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted){
		video.muted = false;
	}
	else{
		video.muted = true;
	}
});
document.querySelector("#slider").addEventListener("click", function(){
	video.volume = slider.value/100;
	document.getElementById("volume").innerHTML= video.volume*100+"%";
});
document.querySelector('#vintage').addEventListener("click", function() {
	video.classList.add('oldSchool');
});

document.querySelector('#orig').addEventListener("click", function() {
	video.classList.remove('oldSchool');
});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });