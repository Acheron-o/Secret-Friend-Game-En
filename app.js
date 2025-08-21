// The main goal of this challenge is to strengthen your programming logic skills.
// Here you must develop the logic to solve the Secret Friend problem.

// Create an array to store the names
let players = [];

// Function to add friends
function addFriend() {
    const input = document.getElementById('friend');
    let name = input.value.trim();

    // Check if input is empty
    if (name === "") { 
        displayMessageOnScreen("h2", "Please enter a valid name!");
        return;
    } 

    displayMessageOnScreen("h2", "Enter your friends' names");

    players.push(name);
   
    // Clear input field
    input.value = "";

    // Update the list on screen
    const list = document.getElementById('friendList');
    list.innerHTML = ""; // Clear before updating
    players.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        list.appendChild(li);
    });

    document.getElementById("result").innerHTML = "";
}

// Fisher–Yates shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // swap
    }
    return array;
}

// Function to draw a secret friend
function drawFriend() {
    if (players.length < 2) {
        displayMessageOnScreen("h2", "At least 2 friends are required to perform the draw.");
        return;
    }

    // Shuffle the array so all positions have equal chance
    let shuffled = shuffle([...players]); // copy array and shuffle
    const drawnFriend = shuffled[0]; // pick the first element after shuffle

    // Show the result
    const result = document.getElementById('result');
    result.innerHTML = "";
    const li = document.createElement('li');
    li.textContent = drawnFriend;
    result.appendChild(li);

    // Clear the players list
    players = [];
    document.getElementById('friendList').innerHTML = "";

    displayMessageOnScreen("h2", "Draw completed successfully! Add new friends to perform another draw.");
}

// Function to display messages dynamically
function displayMessageOnScreen(tag, message) {
    document.querySelector(tag).innerHTML = message;
}
