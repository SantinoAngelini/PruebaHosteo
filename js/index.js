document.addEventListener('DOMContentLoaded', () => {
    const nombreUsuario = localStorage.getItem('usuario'); 

    if (nombreUsuario) {
        document.getElementById('usuarioSection').style.display = 'none'; 
        document.getElementById('catalogoSection').style.display = 'block'; 
        document.querySelector('nav').style.display = 'flex'; 
        document.getElementById('bienvenidaUsuario').textContent = `Bienvenido, ${nombreUsuario}!`; 
        cargarJuegos(); 
    } else {
        document.querySelector('nav').style.display = 'none'; 
        document.getElementById('usuarioSection').style.display = 'block'; 
    }

    document.getElementById('ingresarUsuario').addEventListener('click', () => {
        const nombreUsuario = document.getElementById('usuarioInput').value;
        if (nombreUsuario) {
            localStorage.setItem('usuario', nombreUsuario);
            
            
            document.getElementById('usuarioSection').style.display = 'none';
            document.getElementById('catalogoSection').style.display = 'block';
            document.querySelector('nav').style.display = 'flex'; 
            document.getElementById('bienvenidaUsuario').textContent = `Bienvenido, ${nombreUsuario}!`; 
            
            cargarJuegos();  
        } else {
            document.getElementById('mensajeError').textContent = "Por favor, ingrese su nombre de usuario."; 
        }
    });

    document.getElementById('cerrarSesion').addEventListener('click', () => {
        localStorage.removeItem('usuario');
        localStorage.removeItem('carrito');
        carrito = [];
        
        
        document.getElementById('catalogoSection').style.display = 'none';
        document.getElementById('carritoSection').style.display = 'none';
        
        
        document.getElementById('usuarioSection').style.display = 'block';
    
        
        document.querySelector('nav').style.display = 'none';
    });

    document.getElementById('verCarrito').addEventListener('click', () => {
        document.getElementById('catalogoSection').style.display = 'none';
        document.getElementById('carritoSection').style.display = 'block';
        mostrarCarrito(); 
    });

    document.getElementById('inicioBtn').addEventListener('click', () => {
        document.getElementById('carritoSection').style.display = 'none'; 
        document.getElementById('usuarioSection').style.display = 'none'; 
        document.getElementById('catalogoSection').style.display = 'block'; 
    });
});
