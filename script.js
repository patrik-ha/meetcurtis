

function toggleMute() {
    var video = document.getElementById("header-video");  
    video.muted = !video.muted;
    $("#volume-on").css("display", video.muted ? "none" : "inline-block");
    $("#volume-off").css("display", !video.muted ? "none" : "inline-block");
}