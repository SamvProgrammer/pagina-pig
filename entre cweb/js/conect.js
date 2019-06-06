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
  
  firebase.initializeApp(firebaseConfig);
  var messagesRef = firebase.database().ref('messages');
var boton = document.getElementById('btn1');




 
function enviarDatos(){

  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  guardarMensajeFirebase(nombre, email, message);
}




function guardarMensajeFirebase(nombre, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nombre: nombre,
    email:email,
    message:message
  });
    
  window.location.reload();

 
}

function busca_user() {    
  
} 
 
$(document).ready(function(){
   var dbaux = firebase.database().ref('messages');
   dbaux.orderByChild("messages").on("child_added", function(snapshot){
     var obj = snapshot.val();
     var nombre = obj.nombre;
     var mensaje = obj.message;
     var correo = obj.email;

     var div = document.createElement("div");
     div.className = "comment-wrapper d-flex";


     var div2 = document.createElement("div");
     div2.className = "comment-author";

     var img = document.createElement("img");
     img.src = "img/blog-img/17.jpg";

     div2.appendChild(img);

     var div3 = document.createElement("div");
     div3.className = "comment-content";


     var h5 = document.createElement("h5");
     h5.textContent = nombre;

     var p = document.createElement("p");
     p.textContent = mensaje;

     div3.appendChild(h5);
     div3.appendChild(p);

     div.appendChild(div2);
     div.appendChild(div3);

     var divcomentarios = document.getElementById("seccioncomentarios");
     divcomentarios.appendChild(div);

   });
});


var guardar = function(){
  enviarDatos();
    return false;
}

