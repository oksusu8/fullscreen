let isFullScreen = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 버튼 생성
  let fullscreenButton = createButton('Enter Fullscreen');
  fullscreenButton.mousePressed(toggleFullscreen);
}

function draw() {
  background(220);
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Hello, p5.js!", width / 2, height / 2);
}

function toggleFullscreen() {
  // iOS Safari에서는 사용자의 제스처에 의해 풀스크린 모드로 진입
  // 사용자에게 안내를 제공하는 버튼은 여기에 추가 가능
}
