

function registrar(){
  console.log(firebase)
    var email = document.getElementById("email").value,
        password =  document.getElementById("password").value,
           name = document.getElementById("name");
        
    
        
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
          cerrar();
          alert("Su registro ha sido exitoso");
          location.href = "../index.html";
        })      
        
        .catch(function(error) {
          // Handle Errors here.
          
          var errorCode = error.code;
          var errorMessage = error.message;
          
          if(email == 0){
          console.log(errorCode);
          alert("Debe completar un email");
          }else if (password <= 6){
          console.log(errorMessage);
          alert("Debe completar una contrase;a");
          } else{              
          }
          
        });
    }
    function cerrar(){
      firebase.auth().signOut().then(function() {
      
      }).catch(function(error) {
        // An error happened.
        console.log("Ha ocurrido un error", error);
      });
    }

  