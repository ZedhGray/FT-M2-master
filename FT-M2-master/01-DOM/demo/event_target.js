//* document.body.children <- para recorrer todo el doc.

var text =
  "JavaScript fue creado por Brendan Eich para el navegador NetScape en 1995, permitiendo interacciones con los usuarios y ofreciendo más versatilidad en el diseño. La creación del elemento XML HttpRequest por Microsoft en 1998 impulsó la carga de contenido y la interacción con el backend sin recargar la página. La invención del formato JSON por Douglas Crockford en 2000 y la incorporación masiva de AJAX por Gmail en 2004 mejoraron la eficacia de los procesos. La creación de la librería JQuery en 2006 por John Resig redujo la complejidad de la sintaxis de JavaScript. El surgimiento de Google Chrome en 2009, con su motor de JavaScript V8, y la creación de NodeJS por Ryan Dahl permitieron utilizar JavaScript como lenguaje de programación cross-platform. En 2012, Windows 8 adoptó JavaScript como su lenguaje nativo y en 2014 se estableció el estándar ES6 o ES2015 para JavaScript.";

// //TODO: SELECTORES

// // * RECORRER EL DOM
// var recorrer = document.body.children[3].children[1];

// // * ENLAZAR A UN ELEMENT (NODE)
// document.getElementById("");
// document.getElementsByClassName("");
// document.getElementsByTagName("p");

// // * CREAR UN ELEMENT (NODE)
// document.createElement("div");

// // * ANEXAR (agregar) UN ELEMENT (NODE) dentro de otro
// var newNew = document.getElementById("mySubTitle");
// document.body.appendChild(newNew);

// // * ESCUCHAR y en base a ello realizar una acción
// newNew.addEventListener("click", function () {});
// //                      que? cuando? , y definir una function



function changeColor(event) {
  var divH = document.getElementById("mySubTitle");
  var color1 = "blue";
  var color2 = "green";
  if (divH.style.backgroundColor === color1) {
    divH.style.backgroundColor = color2;
  } else {
    divH.style.backgroundColor = color1;
  }
}

function createDiv(event) {
  console.log("==event.target==> ", event.target);
  //* createElement + appendChild
  var container = document.getElementById("container");
  // console.log("--> ", container);

  var mySubTitle = document.createElement("h2");
  mySubTitle.innerHTML = text;
  mySubTitle.id = "mySubTitle";
  mySubTitle.style.backgroundColor = "green";

  // Anexamos que escuche y al hacer click ejecuta changeColor({event})
  mySubTitle.addEventListener("click", changeColor);

  // console.log("==mySubTitle==> ", mySubTitle);
  container.appendChild(mySubTitle);
}
// var button = document.getElementById("createButton");
var button = document.querySelector("#createButton");

//*             tipo de escucha ,  function
button.addEventListener("click", createDiv); // addEventListener la ejecuta JS

document.body.addEventListener("mousemove", function (event) {
  console.log("jujuuuu");
});
/*

Cuando toques este button:
 <button id="createButton" class="button">Crear Div</button>
 createDiv({isTrusted: true, pointerId: 3, width: 1, height: 1,target:{}... ...})
 JS <- el navegador
*/
