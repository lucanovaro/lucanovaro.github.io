function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function enviarMensaje(event) {
  event.preventDefault();
  alert('Gracias por contactarte con RE-NOVA. Tu mensaje fue enviado correctamente.');
}

// FUNCIONALIDAD DE PUBLICAR PRODUCTO NUEVO (para la colección)
document.addEventListener('DOMContentLoaded', () => {
  const abrirFormularioBtn = document.getElementById('abrir-formulario');
  const formulario = document.getElementById('formulario-producto');
  const agregarBtn = document.getElementById('agregarProducto');
  const cancelarBtn = document.getElementById('cancelarProducto');
  const lista = document.getElementById('lista-productos');

  if (abrirFormularioBtn) {
    abrirFormularioBtn.addEventListener('click', () => {
      formulario.style.display = 'flex';
    });

    cancelarBtn.addEventListener('click', () => {
      formulario.style.display = 'none';
    });

    agregarBtn.addEventListener('click', () => {
      const nombre = document.getElementById('nombreProducto').value.trim();
      const descripcion = document.getElementById('descripcionProducto').value.trim();
      const imagen = document.getElementById('imagenProducto').value.trim() || "https://via.placeholder.com/600x400?text=Nuevo+Producto";

      if (nombre && descripcion) {
        const nuevoProducto = document.createElement('div');
        nuevoProducto.classList.add('producto');
        nuevoProducto.innerHTML = `
          <img src="${imagen}" alt="${nombre}">
          <h3>${nombre}</h3>
          <p>${descripcion}</p>
          <button>Comprar</button>
        `;
        lista.appendChild(nuevoProducto);
        formulario.style.display = 'none';
        document.getElementById('nombreProducto').value = '';
        document.getElementById('descripcionProducto').value = '';
        document.getElementById('imagenProducto').value = '';
      } else {
        alert('Por favor completá al menos el nombre y la descripción del producto.');
      }
    });
  }
});


// ACTIVAR ANIMACIÓN SOLO CUANDO LA SECCIÓN SE VEA
document.addEventListener("DOMContentLoaded", () => {
  const imagenes = document.querySelectorAll(".imagenes-animadas img");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        imagenes.forEach(img => {
          img.style.animationPlayState = "running";
        });
      }
    });
  });

  const contenedor = document.querySelector(".quienes-contenedor");
  if (contenedor) observer.observe(contenedor);
});
