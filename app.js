//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
let nombreAmigo = '';
let listaAmigos = [];
let amigoSeleccionado = '';

function agregarAmigo(){
  nombreAmigo = document.getElementById('amigo').value;

  //Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
  if(nombreAmigo === ''){
    alert('Ingrese un nombre válido');
  }else if (nombreAmigo >= 0) {
    alert('Ingrese un nombre válido');
  }else if (nombreAmigo < 0){
    alert('Ingrese un nombre válido');
  }else{
    listaAmigos.push(nombreAmigo);
    //Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
    
    mostrarLista('li',nombreAmigo,'listaAmigos');
    document.getElementById('amigo').value = '';
    document.getElementById('resultado').innerHTML = '';
  }
  return;
}

function mostrarLista(elemento, texto, id){
  let elementoHTML = document.createElement(elemento);
  elementoHTML.textContent = texto;

  // Agregar el elemento al contenedor de la lista
  document.getElementById(id).appendChild(elementoHTML);
}
//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

function sortearAmigo(){
  let numeroGenerado = Math.floor(Math.random()*listaAmigos.length);

  // Usar el número generado como índice para acceder al arreglo
  amigoSeleccionado = `El amigo secreto sorteado es : ${listaAmigos[numeroGenerado]}` ;
    
  document.getElementById('listaAmigos').innerHTML = '';

  mostrarLista('li',amigoSeleccionado,'resultado');
}