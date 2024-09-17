let contenido;
let digivice;

// Función para mostrar la tabla de Digimon
function mostrarTabla() {
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(resp => {
            crearTabla(resp);
        });

    contenido = document.getElementById("digiData");
    contenido.innerHTML = `
        <div class="text-center">
            <div class="spinner-grow loading" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `;
}

// Función para crear la tabla
function crearTabla(resp) {
    contenido.innerHTML = `
        <table class="mx-auto text-center tableW bg-white border border-2">
            <thead class="table-light">
                <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Nivel</th>
                </tr>
            </thead>
            <tbody class="table-group-divider" id="digiTabla">
            </tbody>
        </table>
    `;

    digivice = document.getElementById('digiTabla');

    for (let digimon of resp) {
        digivice.innerHTML += `
            <tr class="cardH" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                data-imagen="${digimon.img}" 
                data-nombre="Nombre: ${digimon.name}" 
                data-nivel="Nivel: ${digimon.level}">

                <td>
                    <img src="${digimon.img}" alt="${digimon.name}" style="width: 3rem; height: auto;">
                </td>
                <td>
                    ${digimon.name}
                </td>
                <td>
                    ${digimon.level}
                </td>
            </tr>
        `;
    }

    // Añadir event listener para el modal
    const rows = document.querySelectorAll('#digiTabla tr');
    rows.forEach(row => {
        row.addEventListener('click', function() {
            const imagen = this.getAttribute('data-imagen');
            const nombre = this.getAttribute('data-nombre');
            const nivel = this.getAttribute('data-nivel');

            document.getElementById('divModal').innerHTML = `
                <div class="modal-header">
                    <h5 class="modal-title">${nombre}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="${imagen}" alt="${nombre}" style="width: 100%; height: auto;">
                    <p>${nivel}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            `;
        });
    });
}

// Función para mostrar la grilla de Digimon
function mostrarGrilla() {
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(resp => {
            crearGrilla(resp);
        });

    contenido = document.getElementById("digiData");
    contenido.innerHTML = `
        <div class="text-center">
            <div class="spinner-grow loading" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `;
}

// Función para crear la grilla
function crearGrilla(resp) {
    contenido.innerHTML = `
        <div class="container">
            <div class="row">
                ${resp.map(digimon => `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${digimon.img}" class="card-img-top" alt="${digimon.name}">
                            <div class="card-body">
                                <h5 class="card-title">${digimon.name}</h5>
                                <p class="card-text">Nivel: ${digimon.level}</p>
                                <button class="btn btn-primary" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#staticBackdrop"
                                    data-imagen="${digimon.img}" 
                                    data-nombre="Nombre: ${digimon.name}" 
                                    data-nivel="Nivel: ${digimon.level}">
                                    Ver detalles
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Añadir event listener para el modal
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const imagen = this.getAttribute('data-imagen');
            const nombre = this.getAttribute('data-nombre');
            const nivel = this.getAttribute('data-nivel');

            document.getElementById('divModal').innerHTML = `
                <div class="modal-header">
                    <h5 class="modal-title">${nombre}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="${imagen}" alt="${nombre}" style="width: 100%; height: auto;">
                    <p>${nivel}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            `;
        });
    });
}

// Función para mostrar el selector de Digimon
function mostrarSelector() {
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(resp => {
            crearSelector(resp);
        });

    contenido = document.getElementById("digiData");
    contenido.innerHTML = `
        <div class="text-center">
            <div class="spinner-grow loading" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `;
}

// Función para crear el selector
function crearSelector(resp) {
    contenido.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <div class="form-group">
                        <label for="digimonSelector">Selecciona un Digimon:</label>
                        <select class="form-select" id="digimonSelector">
                            <option value="">Elige un Digimon</option>
                            ${resp.map(digimon => `
                                <option value="${digimon.img}|${digimon.name}|${digimon.level}">
                                    ${digimon.name}
                                </option>
                            `).join('')}
                        </select>
                        <div id="digimonDetails" class="mt-3"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Añadir event listener para el selector
    document.getElementById('digimonSelector').addEventListener('change', function() {
        const [imagen, nombre, nivel] = this.value.split('|');

        if (imagen) {
            document.getElementById('digimonDetails').innerHTML = `
                <div class="card">
                    <img src="${imagen}" class="card-img-top" alt="${nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text">Nivel: ${nivel}</p>
                    </div>
                </div>
            `;
        } else {
            document.getElementById('digimonDetails').innerHTML = '';
        }
    });
}
