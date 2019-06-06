var firebaseConfig = {
    apiKey: "AIzaSyBjjzVhWqM7hYa4p81fIbEo4N1jWDK5Cmk",
    authDomain: "pigfish-d3366.firebaseapp.com",
    databaseURL: "https://pigfish-d3366.firebaseio.com",
    projectId: "pigfish-d3366",
    storageBucket: "pigfish-d3366.appspot.com",
    messagingSenderId: "431641652125",
    appId: "1:431641652125:web:465580c9de6fd7e0"
  };

  firebase.initializeApp(firebaseConfig);
  var messagesRef = firebase.database().ref('newstler');
var newstler = document.getElementById('btn2');

var guardarboletin= function(){
    enviarDatosboletin();
      return false;
  }


  function enviarDatosboletin(){

    var boletin = document.getElementById('boletin').value;
    guardarMensajeFirebase(boletin);
  }

  function guardarMensajeFirebase(boletin){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      boletin: boletin
    });
      
    window.location.reload();
  
   
  }
  