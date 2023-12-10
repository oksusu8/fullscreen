function setup() {
  createCanvas(windowWidth, windowHeight);

  // 버튼 생성
  let fullscreenButton = createButton('Enter Fullscreen');
  fullscreenButton.mousePressed(requestFullscreen);
}

function draw() {
  background(220);
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Hello, p5.js!", width / 2, height / 2);
}

async function requestFullscreen() {
  try {
    await document.body.requestFullscreen();
  } catch (error) {
    console.error('Fullscreen request failed:', error);
  }
}
