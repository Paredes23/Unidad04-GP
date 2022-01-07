$(document).ready(function () {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyD9n4mgu044OrlGDCXoMoHR5MfnptqYgpA",
        authDomain: "test-2-codigoweb-g.firebaseapp.com",
        projectId: "test-2-codigoweb-g",
        storageBucket: "test-2-codigoweb-g.appspot.com",
        messagingSenderId: "405361689321",
        appId: "1:405361689321:web:6bbbce250f4aaf0aa32678",
        measurementId: "G-5YDVTFBK26"
      };

      //Iniciar el  Firebase
      const app = firebase.initializeApp(firebaseConfing); 

      //Iniciar Auth de Firebase
      const auth = firebase.auth();

      //Iniciar Auth de Google
      var provider = new firebase.auth.GoogleAuthProvider();

      //Iniciar Base de datos(Firestores)
      const db = firebase.firestore();

      //Registrar los usuarios
      //Si no esta registrado , debe dar clic en registar 
      $("#btnRegistro").click(function(e){
          e.preventDefault();
          //Esto hara que el login desaparezca
          $("login").hide();
          //Esto hara que desaparezca el formulario
          $(".registro-usuario").show();      
        })

        $("registrate".click(function(e){
            $("#btnRgistroConEmail").removeClass("d-none");
            $("#btnregistrateAviso").addClass("d-none");
            $("#btnRegistroConEmail").addClass("d-block");
            $("#btnIngresoConEmail").addClass("d-none");
            $("#btnIngresoGmail").addClass("d-none");
        })