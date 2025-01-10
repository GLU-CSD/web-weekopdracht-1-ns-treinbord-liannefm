// Declare variables for shape radii
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(200, 200);
  stroke(255);
  angleMode(DEGREES);

  // Set radius for each shape based on canvas dimensions
  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 0.6;
  hoursRadius = radius * 0.5;
  clockDiameter = radius * 1.7;

  describe('Functioning pink clock on a grey background.');
}

function draw() {
  background(255);

  // Move origin to center of canvas
  translate(width / 2, height / 2);

  // Draw the clock background
  noStroke();
  fill(192,200,214);
  ellipse(0, 0, clockDiameter + 25, clockDiameter + 25);
  fill(246,246,246);
  ellipse(0, 0, clockDiameter, clockDiameter);

  // Calculate angle for each hand
  let secondAngle = map(second(), 0, 60, 0, 360);
  let minuteAngle = map(minute(), 0, 60, 0, 360);
  let hourAngle = map(hour(), 0, 12, 0, 360);

  stroke(9,67,142);

  // Second hand
  push();
  rotate(secondAngle);
  strokeWeight(2);
  line(0, 0, 0, -secondsRadius);
  pop();

  // Minute hand
  push();
  strokeWeight(6);
  rotate(minuteAngle);
  line(0, 0, 0, -minutesRadius);
  pop();

  // Hour hand
  push();
  strokeWeight(8);
  rotate(hourAngle);
  line(0, 0, 0, -hoursRadius);
  pop();

  // Tick markers around perimeter of clock
  push();
  strokeWeight(2);
  for (let ticks = 0; ticks < 60; ticks += 1) {
    point(0, -secondsRadius);
    rotate(6);
  }
  pop();
}