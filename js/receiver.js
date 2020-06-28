const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

/**
 * Intercept the LOAD request
 */
playerManager.setMessageInterceptor(
  cast.framework.messages.MessageType.LOAD, loadRequestData => {
	if (loadRequestData.media.contentType == "video/youtube") {
		document.getElementById("mediaPlayer").style.display = "none";
		playerManager.stop();
		document.getElementById("youTubePlayer").style.display = "block";
		youTubePlayer_loadVideo(loadRequestData.media.contentUrl);
		
		const error = new cast.framework.messages.ErrorData(cast.framework.messages.ErrorType.LOAD_CANCELLED);
		error.reason = cast.framework.messages.ErrorReason.NOT_SUPPORTED;
		return error;
	} else {
		document.getElementById("youTubePlayer").style.display = "none";
		youTubePlayer_stopVideo();
		document.getElementById("mediaPlayer").style.display = "block";
		return loadRequestData;
	}
  }
);

function stop() {
	document.getElementById("youTubePlayer").style.display = "none";
	document.getElementById("mediaPlayer").style.display = "block";
	playerManager.stop();
}

window.receiver_stop = stop


/**
 * Set the control buttons in the UI controls.
 */
const controls = cast.framework.ui.Controls.getInstance();
controls.clearDefaultSlotAssignments();

context.start();
