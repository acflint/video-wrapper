function generateEmbed(e) {
  e.preventDefault();
  e.stopPropagation();

  var embedCode = "";
  var url = document.querySelector("#videoUrl").value;
  var image = document.querySelector("#imageUrl").value;

  var controls = document.querySelector("#controls").checked;
  var autoplay = document.querySelector("#autoplay").checked;
  var muted = document.querySelector("#muted").checked;
  var loop = document.querySelector("#loop").checked;

  var embedCodeEl = document.querySelector("#embedCode");

  if (!url.length) {
    embedCode = "you dummy. you need a video url first.";
  } else {
    embedCode +=
      "<div class='banner-video-wrapper' style='padding-top: 56.25%; position: relative; overflow: hidden'>";
    embedCode +=
      "<video style='display: block; position: absolute; height: 100%; width: 100%; left: 0px; top: 0px;' id='video' playsinline ";

    if (controls) {
      embedCode += "controls ";
    }
    if (autoplay) {
      embedCode += "autoplay ";
    }
    if (muted) {
      embedCode += "muted ";
    }
    if (loop) {
      embedCode += "loop ";
    }
    
    if (image.length) {
      embedCode += "poster='" + image + "' ";
    }

    embedCode += "src='" + url + "'></video></div>";
  }

  embedCodeEl.value = embedCode;
}

function gifMode(e) {
  e.preventDefault();
  e.stopPropagation();

  if (document.querySelector("#gif").checked) {
    document.querySelector("#autoplay").checked = true;
    document.querySelector("#muted").checked = true;
    document.querySelector("#loop").checked = true;
    document.querySelector("#controls").checked = false;
  } else {
    document.querySelector("#autoplay").checked = false;
    document.querySelector("#muted").checked = false;
    document.querySelector("#loop").checked = false;
    // document.querySelector("#controls").checked = true;
  }
  document.querySelector("#embedCode").value = "";
}
