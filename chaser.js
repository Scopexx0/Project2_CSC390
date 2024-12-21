// Jeronimo Augurusa Franco
// JavaScript for the Mouse Chase html part.

window.addEventListener('load', chaser());

// Function to run the color changer.
function chaser() {
    setInterval(colorChanger, 2000);
}

function buttonMover() {
    // Window measures to ensure the button stays in the page.
    let wh = window.innerHeight;
    let ww = window.innerWidth;
    
    // Randomize the coordinates.
    let y = (Math.random() * (wh - 100));
    let x = (Math.random() * (ww - 200));
    
    // Button selector to change the position.
    button = document.querySelector("#btn-chaser");
    button.style.top = y + "px";
    button.style.left = x + "px";
}

function colorChanger() {
    // Randomizer for rgb values.
    let red = (Math.random() * 256);
    let blue = (Math.random() * 256);
    let green = (Math.random() * 256);

    // Assigning rgbs into the style parameter.
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Change background when button pressed.
function pictureDisplay() {
    // Remove the button.
    document.querySelector('#btn-chaser').remove()
    document.body.style.backgroundImage = "url(images/zimbawe.jpg)";
}
