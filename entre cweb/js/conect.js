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
 boton.addEventListener("click",enviarDatos,false);
 


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
     var db = firebase.database();
var ref = db.ref("messages");
     
var table = document.getElementById("tabla");
    
//limpia la tabla
table.innerHTML = "";
 
 //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
    
ref.orderByChild("messages").on("child_added", function(snapshot){
//repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
     
  var d = snapshot.val();        
        
  {
  var pnombre = .insertRow(0);
  var pmail = row.insertCell(0);
  var pmessage = row.insertCell(1);
  var cell3= row.insertCell(2);
  
  // asigna a las celdas el valir del Child especificado
  cell1.innerHTML = d.nombre;
  cell2.innerHTML = d.message;
  cell3.innerHTML= d.email;
  }
 console.log(d);
        
});
 
}

function busca_user() {    
   var db = firebase.database();
var ref = db.ref("messages");
     
var table = document.getElementById("tabla");
    
//limpia la tabla
table.innerHTML = "";
 
 //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
    
ref.orderByChild("messages").on("child_added", function(snapshot){
//repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
     
  var d = snapshot.val();        
        
  {
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3= row.insertCell(2);
  
  // asigna a las celdas el valir del Child especificado
  cell1.innerHTML = d.nombre;
  cell2.innerHTML = d.message;
  cell3.innerHTML= d.email;
  }
 console.log(d);
        
});
 
} 
    