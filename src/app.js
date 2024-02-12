fetch('https://rickandmortyapi.com/api/character/')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("API Data:", data.results);

        // Espera a que el DOM esté completamente cargado
       
            // Obtén el elemento HTML por su ID
            const card_ex = document.getElementById('card');
            

            // Itera sobre los personajes y agrega la información al elemento HTML
            data.results.forEach(character => {
                const cardContainer = document.createElement('div')
                const p = document.createElement('p');
                const img = document.createElement('img');
                img.src = character.image;
                img.alt = character.species;
                
                p.textContent = `ID: ${character.id}, Nombre: ${character.name} `;
                card_ex.appendChild(cardContainer);

                cardContainer.append(p, img);

            });
        
    })
    .catch(error => {
        console.error("Error al consumir la API:", error);
    });