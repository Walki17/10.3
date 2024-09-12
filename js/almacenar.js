const botonAgregar = document.getElementById("agregar");
const botonLimpiar = document.getElementById("limpiar");
const lista = document.getElementById("contenedor");


function cargarLista() {
    const itemsGuardados = JSON.parse(localStorage.getItem('listaItems')) || []; 
    itemsGuardados.forEach(function(item) { 
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = item;
        lista.appendChild(nuevoElemento);
    });
}


cargarLista();

botonAgregar.addEventListener('click', function(){
    const textoCampo = document.getElementById("item").value;

    if (textoCampo !== "") {
        const nuevoElemento = document.createElement("li"); 
        nuevoElemento.innerHTML = textoCampo; 
        lista.appendChild(nuevoElemento); 

        
        const itemsGuardados = JSON.parse(localStorage.getItem('listaItems')) || [];
        itemsGuardados.push(textoCampo); 
        localStorage.setItem('listaItems', JSON.stringify(itemsGuardados));
    }
});


botonLimpiar.addEventListener('click', function() {
    lista.innerHTML = ''; 
    localStorage.removeItem('listaItems'); 
});