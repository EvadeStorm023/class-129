soundm ='';
lwx =0;
lwy =0;
rwx =0;
rwy =0;
scorelwx = 0; 

function preload(){
  soundm = loadSound("music.mp3");
}



function setup(){
  canvas =   createCanvas(500,500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

  soundm.setVolume(1);
  soundm.rate(1);

  poseNet= ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log(results);
}

function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    scorelwx = results[0].pose.keypoints[9].score;
    lwx = results[0].pose.leftWrist.x;
    lwy = results[0].pose.leftWrist.y;

    rwx = results[0].pose.rightWrist.x;
    rwx = results[0].pose.rightWrist.y;
  }
}

function draw(){
    
  image(video,0,0,400,400);

  fill('red')
  stroke('red')
  if(scorelwx > 0.2){
    circle(lwx,lwy,20)
    numbery = Number(lwy) 
    round_number = floor(numbery)
    volume1 = round_number/500
    document.getElementById('volume').innerHTML = 'volume : '+ volume1;
    soundm.volume(volume1);
  }
  



  
  
}

function play(){
soundm.play();
}





