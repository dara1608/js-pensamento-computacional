function setup() {
    createCanvas(600, 600);
  background ("black")
  }
  
  function draw() {
    stroke ("purple")
    fill ("rgb(243,19,133)")
    
    // console.log (mouseIsPressed)
    
    if (mouseIsPressed) {
            rect(mouseX, mouseY,20,35)
     }
  } 
    