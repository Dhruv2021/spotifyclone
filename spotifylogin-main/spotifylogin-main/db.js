// Initialize Firebase
var config = {
  apiKey: "AIzaSyB9JRQsWLLKXquMB-ccBHB-CS-kPfF9FEo",
  authDomain: "spotify-65153.firebaseapp.com",
  databaseURL: "https://spotify-65153-default-rtdb.firebaseio.com",
  projectId: "spotify-65153",
  storageBucket: "spotify-65153.appspot.com",
  messagingSenderId: "704301543387",
  appId: "1:704301543387:web:1a3f5c8a1bf345e7edc1fe"
};
firebase.initializeApp(config);

// Reference the database
var database = firebase.databaseURL();

// Get the input box
var inputBox = document.getElementById("email");

// Add a listener for when the input box value changes
inputBox.addEventListener("input", function() {
  // Get the current value of the input box
  var inputValue = inputBox.value;

  // Save the value to the Firebase database
  database.ref("input_value").set(inputValue);
});