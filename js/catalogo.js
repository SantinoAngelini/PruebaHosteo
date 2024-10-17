class Juego {
    constructor(nombre, precio, cantidad, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen; 
    }
}

let juegos = [];

function cargarJuegos() {
    return fetch('/juegos.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los juegos.');
            }
            return response.json();
        })
        .then(data => {
            
            juegos = data.map(juego => new Juego(juego.nombre, juego.precio, juego.cantidad, juego.imagen));
            mostrarCatalogo(); 
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



function mostrarCatalogo() {
    const catalogoLista = document.getElementById('catalogoLista');
    catalogoLista.innerHTML = ''; 

    juegos.forEach((juego, index) => {
        
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${juego.imagen}" alt="${juego.nombre}" style="width: 100%; height: auto; border-radius: 10px;">
            <h3>${juego.nombre}</h3>
            <p>Precio: $${juego.precio}</p>
            <p>Stock disponible: ${juego.cantidad}</p>
            <input type="number" id="cantidad${index}" min="1" max="${juego.cantidad}" placeholder="Cantidad">
            <button onclick="agregarAlCarrito(${index})">Agregar al Carrito</button>
        `;

        catalogoLista.appendChild(card);
    });
}




document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('usuario')) {
        document.getElementById('usuarioSection').style.display = 'none';
        document.getElementById('catalogoSection').style.display = 'block';
        cargarJuegos(); 
    }
});
