// bienvenida y nombre de la trivia//
alert("¡¡¡Bienvenido a Tech de la Biblia!!!" );
//ingreso de nombre//
var name = prompt("¡¡juega con nosotros!! Ingresa tu Nombre");
//invitacion a jugar al usuario //
var play = prompt("¿ Quieres jugar " + name + "?");

//alertas si la respuesta es si o no//
switch (play) {
  case "no":
  alert("gracias");

    break;
    case "si":
     alert("responde las preguntas");

      break;
  default:

}
//funcion de trivia//
function check() {

  var question1 = document.trivia.question1.value;
  var question2 = document.trivia.question2.value;
  var question3 = document.trivia.question3.value;
  var question4 = document.trivia.question4.value;
  var question5 = document.trivia.question5.value;
  var question6 = document.trivia.question6.value;
  var question7 = document.trivia.question7.value;
  var question8 = document.trivia.question8.value;
  var correct = 0;

   if (question1 == "Arpa") {
     correct++;
}
     if (question2 == "90 años") {
       correct++;
}
       if (question3 == "En un pesebre") {
         correct++;
       }

       if (question4 == "Con el grano de mostaza") {
        correct++;
   }
        if (question5 == "«Si al menos logro tocar su manto, quedaré sana»") {
          correct++;
   }
          if (question6 == "Daniel") {
            correct++;
          }

          if (question7 == "10 plagas") {
            correct++;
       }
            if (question8 == "Abraham, Isaac y Jacob") {
              correct++;
       }
             


     var messages = ["¡Excelente!", "Esta mas o menos bien", "Necesitas hacerlo mejor"];
     
    var pictures = ["https://i.pinimg.com/originals/28/85/82/2885823e5e8d34e5e472dc98fd34663a.gif","https://static.wixstatic.com/media/e0fa24_cce8b72cf02e4b25afe29afe3898a44c~mv2.gif" ,"https://i.pinimg.com/originals/86/de/3d/86de3d463f9eee9d8f268a51fdc1cb58.gif" ];


     var range;

       if (correct < 3) {
         range = 2;
       }

       if (correct > 0 && correct < 7) {
         range = 1;

       }

         if (correct > 6) {
              range = 0;
            }


         
            document.getElementById('after_sumibt').style.visibility = "visible";
            document.getElementById('messages').innerHTML = messages[range];
            document.getElementById('number_correct').innerHTML = "Tienes " + correct + " correcta.";
            document.getElementById('pictures').src = pictures[range];
     }