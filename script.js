document.addEventListener('DOMContentLoaded', function() {

    // Evento para el botón de búsqueda
    document.getElementById('searchButton').addEventListener('click', () => {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase(); // Convierte el valor a minúsculas
        fetchPokemonData(pokemonName);
    });

    // Función para hacer fetch a la API de Pokémon
    function fetchPokemonData(pokemon) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Pokémon no encontrado');
                }
                return response.json();
            })
            .then(data => {
                displayPokemonData(data);
            })
            .catch(error => {
                document.getElementById('pokemonData').innerHTML = `
                
                    <div class="form-control">
                        <p>${error.message}</p>
                    </div>
               
                `;
            });
    }

    // Función para mostrar los datos del Pokémon en la página
    function displayPokemonData(pokemon) {
        const pokemonDataDiv = document.getElementById('pokemonData');
        pokemonDataDiv.innerHTML = `
            <div class="card bg-white" style="width: 18rem;">
    <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
    <div class="card-body">
        <h5 class="card-title">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
        <p class="card-text">
            <strong>ID:</strong> ${pokemon.id}<br>
            <strong>Altura:</strong> ${pokemon.height / 10} m<br>
            <strong>Peso:</strong> ${pokemon.weight / 10} kg<br>
            <strong>Tipos:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}
        </p>
    </div>
</div>
        `;
    }

});


        // Función para cambiar el fondo
        function setBackgroundImage() {
            const body = document.querySelector('body');
            const imageUrl = 'pokemon 1.jpg'; // Reemplaza con la ruta correcta a tu imagen
            body.style.backgroundImage = `url('${imageUrl}')`;
            body.style.backgroundSize = 'cover';
            body.style.backgroundPosition = 'center';
            body.style.backgroundAttachment = 'fixed';
            body.style.height = '100vh';
            body.style.margin = '0';
        }

        // Llama a la función para establecer la imagen de fondo al cargar la página
        window.onload = setBackgroundImage;