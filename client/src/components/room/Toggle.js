import { CopyToClipboard } from "react-copy-to-clipboard";

const Toggle = (props) => {
  const userStream = props.userStream;
  const shareScreen = props.shareScreen;
  // Toggle Video
  let isVideo = true;
  let colorVideo = "#9690d8";
  function toggleVideo() {
    document.getElementById("av").style.backgroundColor = colorVideo;
    if (isVideo) {
      colorVideo = "#56537a";
    } else {
      colorVideo = "#9690d8";
    }
    isVideo = !isVideo;
    userStream.current.getVideoTracks()[0].enabled = isVideo;
  }

  // Toggle Audio
  let isAudio = true;
  let colorAudio = "#9690d8";
  function toggleAudio() {
    document.getElementById("av").style.backgroundColor = colorAudio;
    var videoI = document.getElementById("videoI");
    if (isAudio) {
      videoI.className = "fas fa-microphone-alt fa-2x";
      colorAudio = "#56537a";
    } else {
      videoI.className = "fas fa-microphone-alt-slash fa-2x";
      colorAudio = "#9690d8";
    }
    isAudio = !isAudio;
    userStream.current.getAudioTracks()[0].enabled = isAudio;
  }

  // Hanging up the call
  function hangUp() {
    userStream.current.getVideoTracks()[0].enabled = false;
    window.location.replace("/");
  }

  return (
    <div id="button-box">
      <button id="av" onClick={toggleAudio}>
        {" "}
        <i id="videoI" className="fas fa-microphone-alt fa-2x"></i>{" "}
      </button>

      <button id="av" onClick={toggleVideo}>
        {" "}
        <i className="fas fa-video-slash fa-2x"></i>{" "}
      </button>
      <button id="av" onClick={shareScreen}>
        {" "}
        <i className="fas fa-share-square fa-2x"></i>{" "}
      </button>
      <button id="end" onClick={hangUp}>
        {" "}
        <i className="fas fa-phone-slash fa-2x"></i>{" "}
      </button>
      <button id="av" onClick={toggleVideo}>
        {" "}
        <i className="fas fa-user-friends fa-2x"></i>{" "}
      </button>
      <button id="av" onClick={toggleVideo}>
        {" "}
        <i className="fas fa-comments fa-2x"></i>{" "}
      </button>

      <button id="av" onClick={toggleVideo}>
        {" "}
        <i className="fas fa-record-vinyl fa-2x"></i>{" "}
      </button>
    </div>
  );
};

export default Toggle;
