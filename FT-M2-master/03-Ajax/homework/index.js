// Obtén una referencia al botón y a la lista en el DOM
const boton = document.getElementById('boton')
const lista = document.getElementById('lista')
// Search
const botonBuscar = document.getElementById('search')
const campoEntrada = document.getElementById('input')
// Delete
const botonBorrar = document.getElementById('delete')
const campoEntradaBorrar = document.getElementById('inputDelete')

// Agrega un event listener al botón para escuchar el evento 'click'
function createList() {
  // Limpia la lista
  lista.innerHTML = ''
  // Realiza una solicitud GET al servidor para obtener la lista de amigos
  $.get('http://localhost:5000/amigos', (res) => {
    // Para cada amigo en la respuesta, crea un nuevo elemento de lista,
    // establece su contenido HTML en el nombre del amigo y lo agrega a la lista
    res.forEach((element) => {
      let li = document.createElement('li')
      li.innerHTML = element.name
      lista.appendChild(li)
    })
  })
}

// Buscar Amigo:
function buscarAmigo() {
  // Obtiene el valor del campo de entrada
  const idAmigo = campoEntrada.value
  // Realiza una solicitud GET al servidor para obtener el amigo con ese ID
  $.get(`http://localhost:5000/amigos/${idAmigo}`, (res) => {
    // Si se encuentra el amigo, muestra el nombre del amigo en la interfaz de usuario
    if (res && res.name) {
      document.getElementById('amigo').innerText = `Amigo: ${res.name}`
    } else {
      // Si no se encuentra el amigo, muestra un mensaje indicando que no se encontró el amigo
      document.getElementById('amigo').innerText = 'Amigo no encontrado'
    }
    // Borrar el campo de entrada
    document.getElementById('campoEntrada').value = ''
  })
}

// Delete amigo
function borrarAmigo() {
  // Obtiene el valor del campo de entrada
  const idAmigo = campoEntradaBorrar.value
  // Realiza una solicitud DELETE al servidor para eliminar el amigo con ese ID
  fetch(`http://localhost:5000/amigos/${idAmigo}`, {
    method: 'DELETE',
  })
    .then((res) => res.text()) // o res.json()
    .then((res) => {
      // Si la operación fue exitosa, muestra un mensaje en la interfaz de usuario
      if (res) {
        document.getElementById('success').innerText = 'Amigo borrado con éxito'
        createList()
      } else {
        // Si hubo un error, muestra un mensaje de error
        document.getElementById('success').innerText =
          'Error al borrar el amigo'
      }
      document.getElementById('campoEntradaBorrar').value = ''
    })
    .catch((error) => console.error('Error:', error))
}

// Agrega un escuchador de eventos al botón para llamar a la función createList cuando se haga clic en él
boton.addEventListener('click', createList)
// Agrega un escuchador de eventos al botón de buscar para llamar a la función buscarAmigo cuando se haga clic en él
botonBuscar.addEventListener('click', buscarAmigo)
// Agrega un escuchador de eventos al botón de borrar para llamar a la función borrarAmigo cuando se haga clic en él
botonBorrar.addEventListener('click', borrarAmigo)
