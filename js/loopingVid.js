var position = 0; // track vid play
var playlist; //save vid playlist
var video; // vid element
var effectFunction = null;

window.onload = function(){
  playlist = [  //影片檔案名稱不含副檔名
    'media/video1',
    'media/video2',
    'media/video3'
  ];
  video = document.getElementById('video');
  video.addEventListener("ended", nextVideo, false);  //使一支影片結束後會撥放下一支影片
  //video.addEventListener("play", processFrames, false);
  video.src = playlist[position] + getFormatExtetion();
  video.load();
  video.play();
  console.log(video.currentSrc);
}
function nextVideo(){
  position++ ;
  if(position >= playlist.length){
    position = 0;
  }
  video.src = playlist[position] + getFormatExtetion();
  video.load();
  video.play();
  //console.log(video.currentSrc);
}
//canPlayType
function getFormatExtetion(){
  if(video.canPlayType('video/webm') != ''){  //!=表示不等於
    return '.webm'; //給Chrome讀的影片類型要放在第一個
  }else if(video.canPlayType('video/ogg') != ''){
    return '.ogv'; //給moz讀
  }else if(video.canPlayType('video/mp4') != ''){
    return '.mp4'; //給safari和ie讀
  }
}
function erroeHandle(){
  var video = document.getElementById('video');
  if(video.error){
    console.log(video.error.code);
  }
}

// function processFrames(){
//   var video = document.getElementById('video');
//   if(video.paused || video.ended){
//     return;
//   }
// var bufferCanvas = document.getElementById('buffer');
// var displayCanvas = document.getElementById('display');
//
// var buffer = bufferCanvas.getContext('2d');
// var display = displayCanvas.getContext('2d');
//
//   buffer.drawImage(video, 0, 0, bufferCanvas.width, bufferCanvas.height);
// var frame = buffer.getImageData(0, 0, bufferCanvas.width, bufferCanvas.height);
//
// var length = frame.data.length / 4;
// for(var i = 0; i< length; i++){
//   var r = frame.data[i * 4 + 0];
//   var g = frame.data[i * 4 + 1];
//   var b = frame.data[i * 4 + 2];
//   if(effectFunction){
//     effectFunction(i, r, g, b, frame.data);
//   }
// }
// display.putImageData(frame, 0, 0);
// //setTimeout(processFrames, 0);
// }
