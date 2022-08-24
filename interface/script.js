// Pre-select elements
let map = $("#map");
let canvas = map.find(".map-canvas");

// Calculate canvas constraints
let maxLeft = map.width() - canvas.width();
let maxTop = map.height() - canvas.height();


let row = 50;
let col = 50; 

let interp_img = document.getElementById("interp");
let loc = document.getElementById('loc');
let annotation = document.getElementById("anno_content");


// Make canvas draggable
canvas.draggable({
  drag: function(e, ui) {
    // Check if canvas is within constraints
    //if (ui.position.left > 0) {
      //ui.position.left = 0;
    //} else
    if (ui.position.left < maxLeft) {
      ui.position.left = maxLeft;
    }

    //if (ui.position.top > 0) {
    //  ui.position.top = 0;
    //} else 
    if (ui.position.top < maxTop) {
      ui.position.top = maxTop;
    }

    // Update image
    let pos_left = (ui.position.left - 238) * -1;
    let pos_top = (ui.position.top - 238) * -1;
    let C = 2340;
    let G = 100; // the grid size
  
    row = parseInt(pos_top / C * G );
    col = parseInt(pos_left / C * G);
 
    //console.log(row, col)

    interp_img.src = "./imgs/grid/" + row + "_" + col + ".jpg";
   
    // update caption
    console.log(row, col);
    annotation.innerText = anno_data[row + "_" + col];    


    // Update global location
    
    row = pos_top / C - 0.125;
    col = pos_left / C - 0.125;

    loc.style.top = row * (256-4) + "px";
    loc.style.left = col * (256-4) + "px";
 
  }
});






