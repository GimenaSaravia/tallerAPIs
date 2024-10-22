fetch("https://dog.ceo/api/breeds/image/random/20") // Obtener 3 imágenes aleatorias
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        const carouselInner = document.getElementById('carouselImages');

        // Crear elementos de carrusel dinámicamente
        data.message.forEach((imageSrc, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (index === 0) {
                carouselItem.classList.add('active'); // Primera imagen activa
            }

            const img = document.createElement('img');
            img.src = imageSrc;
            img.classList.add('d-block', 'w-100');
            img.alt = 'Imagen de perro';

            carouselItem.appendChild(img);
            carouselInner.appendChild(carouselItem);
        });
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud fetch: ', error);
    });
