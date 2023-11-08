# SELECTORES

### getElements <-> en prural, los elementos siempre nos devuelve en un array
```js
[ ]
```
Al igual que el querySelectorAll

### getElement <-> en singular nos devuelve un elemento, un objeto
```js
{ }
```
Y con querySelector nos trae un solo {}


---

# LISTA DE SELECTORES 
## Ejemplos:

1. getElementById: Selecciona un elemento por su atributo id.
```javascript
document.getElementById("miElemento");
```
2. getElementsByClassName: Selecciona todos los elementos que tienen una determinada clase.
```javascript
document.getElementsByClassName("miClase");
```
3. getElementsByTagName: Selecciona todos los elementos que tienen una determinada etiqueta.
```javascript
document.getElementsByTagName("p");
```
4. querySelector: Selecciona el primer elemento que coincide con un selector CSS.
```javascript
document.querySelector(".miClase");
```
5. querySelectorAll: Selecciona todos los elementos que coinciden con un selector CSS.
```javascript
document.querySelectorAll("p");
```
6. querySelector por id: Selecciona el primer elemento que tiene un atributo id específico.
```javascript
document.querySelector("#miElemento");
```

7. createElement
```javascript
    const body = document.querySelector('body');
    const newDiv = document.createElement('div'); // Creamos un nuevo elemento div

    body.appendChild(newDiv); // Agregarmos el div recién creado dentro del body de la paǵina

```

8. innerHTML

```html
<div id="miDiv">
  <p>Contenido original</p>
</div>
```
Para cambiar el contenido de ese elemento utilizando innerHTML hacemos:

```javascript
// Seleccionar el elemento por su id
var divElement = document.getElementById("miDiv");

// Modificar el contenido utilizando innerHTML
divElement.innerHTML = "<p>Nuevo contenido</p>";
```
Después de ejecutar este código, el contenido del elemento <div> se actualizará y se mostrará como:

```html
<div id="miDiv">
  <p>Nuevo contenido</p>
</div>
```
9. appendChild:

```html
<ul id="miLista">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>
```
Para agregar un nuevo elemento <li> a esa lista utilizando appendChild. Podemos hacerlo de la siguiente manera en JavaScript:

```js
// Crear un nuevo elemento <li>
var nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento 3";

// Seleccionar el elemento <ul> por su id
var listaElement = document.getElementById("miLista");

// Agregar el nuevo elemento al final de la lista utilizando appendChild
listaElement.appendChild(nuevoElemento);
```
Después de ejecutar este código, se agregará un nuevo elemento <li> con el texto "Elemento 3" al final de la lista:

```html
<ul id="miLista">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
```

10. addEventListener:

```html
<button id="miBoton">Haz clic aquí</button>
```
Para agregar un evento de clic a ese botón para que se ejecute una función cuando se le haga clic. Podemos hacerlo de la siguiente manera:

```js
// Seleccionar el botón por su id
var boton = document.getElementById("miBoton");

// Agregar un evento de clic al botón
boton.addEventListener("click", function() {
  // Función a ejecutar cuando se haga clic en el botón
  console.log("Se hizo clic en el botón");
});
// Y para mejorar el code
function nameFuntion(){ return "fafa" }
boton.addEventListener("click", nameFuntion);
// y no nameFuntion() ya que eso equivale a que la pasa "fafa"
// Para pasar argumentos se hace así:
boton.addEventListener("click", function(){ nameFunction(a,b)});

```




# M2
## CRONOGRAMA FT-45A
### Semana 1:
1. DOM Avanzado
2. ES6
3. AJAX
4. Módulos y Bundlers
5. React-Intro
### Semana 2:
1. React-Estado
2. React-LifeCycle
3. React-Routing
4. React-Forms
5. Redux
### Semana 3:
1. React-Redux
2. Hooks
3. CSS y React-Estilos
4. Repaso
5. CP

Este nuevo cronograma nos permite practicar más React y Redux, siendo ambas las dos herramientas (librerías) más importantes del Front del M2.