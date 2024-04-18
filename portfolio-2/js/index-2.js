        // Set the time (in milliseconds) after which you want the message to appear
let delay = 10000; // 10 seconds

// Use setTimeout to display the message after the specified delay
setTimeout(function() {
  // Show the custom prompt box
  document.getElementById("custom-prompt").style.display = "block";

  // Add an event listener to the submit button
  document.getElementById("submit-button").addEventListener("click", function() {
    // Get the user's input
    let userInput = document.getElementById("user-input").value;

    // Add your code here to handle the user's response

    // Hide the custom prompt box
    document.getElementById("custom-prompt").style.display = "none";
  });
}, delay);
