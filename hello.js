// Jeronimo Augurusa Franco
// JavaScript for the Saying Hello html part.

// When loading the page call the funcion.
window.onload = enterName();

function enterName() {
    // Enter the name, has to be more than 2 chars.
    let name = prompt("Enter your name:");
    if (name.length <= 2) {
        return alert("You must enter a name!");
    }
    // Enter age.
    let age = prompt("Enter your age:");
    
    // If not an int or above 150 ask again.
    if (!isNaN(age) && age < 150) {
        alert(`Hello ${name}, your age is ${age} :D`);
    } else {
        while(!(!isNaN(age) && age < 105)){
            alert("Invalid input");
            age = prompt("Enter your age:");
            age = parseInt(age, 10);
        }
        alert(`Hello ${name}, your age is ${age} :D`);
    }
}
