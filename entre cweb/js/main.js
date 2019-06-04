// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBjjzVhWqM7hYa4p81fIbEo4N1jWDK5Cmk",
    authDomain: "pigfish-d3366.firebaseapp.com",
    databaseURL: "https://pigfish-d3366.firebaseio.com",
    projectId: "pigfish-d3366",
    storageBucket: "pigfish-d3366.appspot.com",
    messagingSenderId: "431641652125",
    appId: "1:431641652125:web:465580c9de6fd7e0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var nombre = getInputVal('nombre');
  var email = getInputVal('email');
  var message = getInputVal('message');

  console.log(nombre);
  

  // Save message
  saveMessage(nombre, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(nombre, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nombre: name,
    email:email,
    message:message
  });
}