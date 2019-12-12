
// VALIDACION DEL FORMULARIO
function ingresar(){
  var email = document.getElementById("email").value,
      password =  document.getElementById("password").value;
      
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
        
      });
  };
 
  function observer(){

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
         // User is signed in.
        console.log("existe usuario");
        aparece()
        
        var displayName = user.displayName;
        var email = user.email;
        console.log(user);
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        
        // ...
      } else {
        // User is signed out.
        // ...
        console.log("no existe usuario");
        
      }
    });
  }
  observer();
  
  function aparece(){
   location.href = "../Project/public/calendar.html";
  }



  //************************************************************************************************************************************* */


  // function cerrar(){
  //   firebase.auth().signOut().then(function() {
  //    alert("saliendo..");
  //    location.href = "index.html"
  //   }).catch(function(error) {
  //     // An error happened.
  //     console.log("Ha ocurrido un error", error);
  //   });
  // }
  

// function registrar(){
// var email = document.getElementById("email").value,
//     password =  document.getElementById("password").value;

    
//     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(errorCode);
//       console.log(errorMessage);
//     });
// }


// (function(){
// var formulario = document.getElementsByName("formulario")[0];
// var elementos = formulario.elements;
// var boton = document.getElementById("boton");

// var validarMail = function(e){
  
// // var error = function(){
// //   // var elemento = document.createElement("p"),
// //   // contenido = document.createTextNode('debe completar email');
// //   // elemento.appendChild(contenido);
// //   //  document.getElementById('error').appendChild(elemento);
  
// // 
//   if(formulario.email.value == 0){
//     e.preventDefault();
//   }
// };

// var validarPass = function(e){
//   if(formulario.password.value == 0){
//     e.preventDefault();
//   };

// };
// var registroExitoso = function(){
//   var email = document.getElementById("email").value,
//       password = document.getElementById("password").value;

//       firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         alert(errorCode);
//         alert(errorMessage);
//         // ...
//       });
// }
// var validar = function(e){
//   validarMail(e);
//   validarPass(e);
//   registroExitoso();
// }


// formulario.addEventListener("submit", validar);

// }())



