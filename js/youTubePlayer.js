// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.getElementsByTagName('head')[0].appendChild(tag)

// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('youTubePlayer', {
	  height: '100%',
	  width: '100%',
	  playerVars: { 'autoplay':0, 'controls':0, 'cc_load_policy':0, 'enablejsapi':1, 'fs':0, 'iv_load_policy':3, 'modestbranding':1, 'rel':0, 'showinfo':0 },
	  events: {
		'onError': function(error) { receiver_stop() }
	  }
	});
}

function loadVideo(videoId) {
	player.loadVideoById(videoId);
}

function stopVideo() {
	player.stopVideo();
}

window.youTubePlayer_onYouTubeIframeAPIReady = onYouTubeIframeAPIReady
window.youTubePlayer_loadVideo = loadVideo
window.youTubePlayer_stopVideo = stopVideo

