// var request = $.ajax({

//     //
//     // A propriedade `url` é local, arquivo, script, alvo de sua requisição.
//     //
//     url: "qxhr.php",

//     //
//     // A propriedade `type` é o verbo HTTP (GET, POST, HEAD, etc...)
//     //
//     type: "GET",

//     //
//     // A propriedade `data` são os dados de sua aplicação.
//     //
    

//     //
//     // A propriedade `dataType` refere-se ao tipo de dado que o servidor deve retornar a requisição.
//     //
    
// });

// //
// // O método `done()` recebe uma função de callback
// // que será executada caso a requisição tenha sucesso.
// //
// request.done(function(resposta) {
//     console.log(resposta)
// });

// //
// // O método `fail()`recebe uma função de callback
// // que será executada caso a requisição falhe.
// //
// request.fail(function(jqXHR, textStatus) {
//     console.log("Request failed: " + textStatus);
// });

// //
// // O método `always()` recebe uma função de callback
// // que será executada quando a requisição de sucesso estiver completa.
// //
// request.always(function() {
//     console.log("completou");
// });



function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "qxhr.php", true);
    xhttp.send();
  }

function loadWithJquery() {
  $.get("/qxhr.php", function (data, status) {
    document.getElementById("demo").innerHTML = data;
  });
}