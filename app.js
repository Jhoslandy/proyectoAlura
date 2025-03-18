let nombre = "";

// funcion para guardar nombre
function salvarnombre() {
   nombre = document.getElementById("nombre").value;
    if (nombre == "") {
        alert("Por favor, ingrese un nombre");
    } else {
        listaDeAmigos.push(nombre);
        document.getElementById("nombre").value = "";
        atualizarLista();
    }
}

// criando lista de amigos vacia
let listaDeAmigos = [];

// Funcion de adicionar amigo a la lista
function adicionarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo == "") {
        alert("Por favor, ingrese un nombre");
    } else {
        listaDeAmigos.push(nombreAmigo);
        document.getElementById("amigo").value ="";
        atualizarLista();
    }
}
// funcion para actualzizar a lista de amigos
function atualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = listaDeAmigos[i];
        listaAtualizada.appendChild(itemLista);
    }
}
// funcion para sortear amigo 
function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert("Por favor, ingrese un nombre.");
        return;

    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nombreSorteado = listaDeAmigos[indiceAleatorio];
    if (nombreSorteado == nombre) {
        alert("");
        return;
    }

    document.getElementById("resultado").innerHTML = `El amigo secreto es: ${nombreSorteado}`;

}  

// funcion para reiniciar sorteo
function reiniciarSorteio() {
    listaDeAmigos = [];
    document.getElementById("resultado").innerHTML = "";
    atualizarLista();
}