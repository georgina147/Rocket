function cerrar(){
    firebase.auth().signOut().then(function() {
     alert("saliendo..");
     location.href = "../index.html";
    }).catch(function(error) {
      // An error happened.
      console.log("Ha ocurrido un error", error);
    });
  }
  observer()
  function observer(){



    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("usuario logueado");
          var nombre = document.getElementById("nombre");
          nombre.innerHTML = "Bienvenido" + " " +  user.email;
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
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
  
