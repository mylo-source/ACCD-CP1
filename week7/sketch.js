let numLines = 5;

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100);
  background(0, 0, 95);
  stroke(0);

  let cellWidth = width / numLines;
  let cellHeight = height / numLines;

  // Draw grid lines first
  for (let x = 0; x <= numLines; x = x + 1) {
    let xpos = (width / numLines) * x;
    line(xpos, 0, xpos, height);
  }
  for (let y = 0; y <= numLines; y = y +1) {
    let ypos = (height / numLines) * y;
    line(0, ypos, width, ypos);
  }

  // Circle sizes by column
  let circleSizesByColumn = [30, 70, 100, 70, 30];

  // Rectangle sizes by column
  let rectSizesByColumn = [60, 40, 20, 40, 60];

  for (let x = 0; x < numLines; x = x + 1) {
    for (let y = 0; y < numLines; y = y + 1) {
      let localStartX = cellWidth * x;
      let localStartY = cellHeight * y;

      // BOX BACKGROUND 
      let boxColor;
      if (x < 2) {
        let hues = [0, 30, 50, 330]; // warm
        boxColor = color(random(hues), random(60, 100), random(80, 100));
      } else if (x === 2) {
        boxColor = color(0, 0, random(50, 70));
      } else {
        let hues = [240, 200, 160]; // dark cool
        boxColor = color(random(hues), random(60, 100), random(30, 50));
      }
      noStroke();
      fill(boxColor);
      rect(localStartX, localStartY, cellWidth,             cellHeight);

      // CIRCLE
      let cx, cy;
      if (x === 2) {
        cx = localStartX + cellWidth / 2;
        cy = localStartY + cellHeight / 2;
      } else {
        cx = random(localStartX + cellWidth * 0.3, localStartX + cellWidth * 0.7);
        cy = random(localStartY + cellHeight * 0.3, localStartY + cellHeight * 0.7);
      }

      let r = circleSizesByColumn[x];
      let circleColor;
      if (x < 2) {
        let hues = [240, 200, 160];
        circleColor = color(random(hues), random(60, 100), random(30, 50));
      } else if (x === 2) {
        circleColor = color(0, 0, 100);
      } else {
        let hues = [0, 30, 50, 330];
        circleColor = color(random(hues), random(60, 100), random(80, 100));
      }
      fill(circleColor);
      noStroke();
      circle(cx, cy, r);

      // --- RECTANGLE ---
      let rw = rectSizesByColumn[x];
      let rh = rectSizesByColumn[x];

      let rx, ry;
      if (x === 2) {
        // Column 3: centered
        rx = localStartX + (cellWidth - rw) / 2;
        ry = localStartY + (cellHeight - rh) / 2;
      } else {
        // Column 1, 2, 4, 5: slightly random within              cell
        rx = random(localStartX + 10, localStartX + cellWidth - rw - 10);
        ry = random(localStartY + 10, localStartY + cellHeight - rh - 10);
      }

      let rectColor;
      if (x < 2) {
        let hues = [240, 200, 160]; // dark cool
        rectColor = color(random(hues), random(60, 100), random(30, 50));
      } else if (x === 2) {
        rectColor = color(0, 0, 0); // black
      } else {
        let hues = [0, 30, 50, 330]; // warm
        rectColor = color(random(hues), random(60, 100), random(80, 100));
      }

      fill(rectColor);
      noStroke();
      rect(rx, ry, rw, rh);

      // --- Redraw grid lines on top ---
      stroke(0);
      noFill();
      rect(localStartX, localStartY, cellWidth,             cellHeight);
    }
  }
}
