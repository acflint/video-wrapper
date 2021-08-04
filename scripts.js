function generateEmbed() {
  var embedCode = ""
  var url = document.querySelector("#videoUrl").value;
  var image = document.querySelector("#imageUrl").value;
  var embedCodeEl = document.querySelector("#embedCode");

  embedCode += "<div class='banner-video-wrapper' style='padding-top: 56.25%; position: relative; overflow: hidden'>"
  embedCode += "<video style='display: block; position: absolute; height: 100%; width: 100%; left: 0px; top: 0px;' id='video' autoplay loop muted playsinline"
  embedCode += "poster='" + image + "' "
  embedCode += "src='" + url + "'></video></div>"
  console.log(embedCode);
  embedCodeEl.value = embedCode;
}