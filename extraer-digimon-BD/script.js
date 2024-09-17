import pkg from 'pg';
const { Client } = pkg;
import fetch from 'node-fetch';


const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'api-mon',
    password: '12345',
    port: 5432,
});


async function fetchData() {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');

        //response.ok -> https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
        // all response -> https://developer.mozilla.org/en-US/docs/Web/API/Response
        if (!response.ok) {
            throw new Error('Network response ok: sin respuesta');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}


async function saveData(data) {
    try {
        await client.connect();
        console.log('Conectado a la base de datos PostgreSQL');

        const query = 'INSERT INTO digimon (name, level, img) VALUES ($1, $2, $3)';

        for (const digimon of data) {
            await client.query(query, [digimon.name, digimon.level, digimon.img]);
        }

        console.log('Datos insertados correctamente');
    } catch (err) {
        console.error('Error al insertar datos:', err);
    } finally {
        await client.end();
    }
}


fetchData().then(data => saveData(data));
