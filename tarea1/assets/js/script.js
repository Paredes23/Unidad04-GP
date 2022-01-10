$(document).ready(function () {
    // Aplicando lo aprendido 1
    // Código js que se necesita para iniciar Firebase en proyecto web
    // Your web app's Firebase configuration "esta configuración se saca desde Firebase Console"
    const firebaseConfig = {
      apiKey: "AIzaSyD9n4mgu044OrlGDCXoMoHR5MfnptqYgpA",
      authDomain: "test-2-codigoweb-g.firebaseapp.com",
      projectId: "test-2-codigoweb-g",
      storageBucket: "test-2-codigoweb-g.appspot.com",
      messagingSenderId: "405361689321",
      appId: "1:405361689321:web:6bbbce250f4aaf0aa32678",
      measurementId: "G-5YDVTFBK26"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    // Inicializar Auth de Firebase
    const auth = firebase.auth();
  
    var provider = new firebase.auth.GoogleAuthProvider();
    // Rergistrar los usuarios
    // Si no esta registrado, debe hacer click en boton registrar
    $("#btnRegistro").click(function (e) {
      e.preventDefault();
      $("#login").hide();
      $(".registro-usuario").show();
    })
    // Si se registra guardamos la sesion
    $("#btnRegistrar").click(function (e) {
      e.preventDefault();
      var email = $("#registroEmail").val();
      var password = $("#registroPassword").val();
      // Metodo que permite registro de usarios con email
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          // ocultar formulario de registro
          $(".registro-usuario").hide();
          // limpiar formulario de registro
          $("#registroUsuario").trigger("reset");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    })
  
    // Acceso de usuarios
    // Ingresar por email
    $("#btnIngresoEmail").click(function (e) {
      e.preventDefault();
      $("#IngresoEmail").show();
      $("#btnIngresoEmail").hide();
    })
  
    $("#btnIngresoConEmail").click(function (e) {
      e.preventDefault();
      var email = $("#ingresoEmail").val();
      var password = $("#ingresoPassword").val();
  
      // Metodo que permite ingreso de usarios con email
      auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          // mostrar copntenido de la pagina
          
          // limpiar formualrio de ingreso
          $("#IngresoEmail").trigger("reset");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    })
  
    // Ingresar con google
    $("#btnIngresoGmail").click(function (e) {
      e.preventDefault();
      auth.signInWithPopup(provider)
        .then(result => {
          console.log("Ingreso con Google");
        })
        .catch(err => {
          console.log(err);
        })
    })
    
    // Desconexion de Usuarios
    // Boton LogOut
    $("#logout").click(function (e) {
      e.preventDefault();
      auth.signOut().then(() => {
        console.log("Log Out");
      })
    })
  
    // Ver si sesion esta activa
    auth.onAuthStateChanged((user) => {
      if (user) {
        // Si usuario esta conectado
        // ocultamos el login
        $("#login").hide();
        // ocultamos el formulariod e registro
        $(".registro-usuario").hide();
        // mostramos el contenido
        $("#contenidoWeb").show();
      } else {
        // Si usuario esta desconectado
        // Se oculta formulario de registro
        $(".registro-usuario").hide();
        // Se oculta formulario de ingreso
        $("#IngresoEmail").hide();
        // Se muestra el boton de ingreso por email
        $("#btnIngresoEmail").show();
        // Se oculta contenido de la página
        $("#contenidoWeb").hide();
        // Se muestra el login
        $("#login").show()
      }
    });
  
  });
  