const API_KEY = 'o6uZM4qKzuXFs0Rp7GZtOpXE-UY'
const API_URL = 'https://ci-jshint.herokuapp.com/api'
const resultsModal = new bootstrap.Model(document.getElementById('resultModal'))

document.getElementById('status').addEventListener('click', e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API-URL}?api_key=${API_KEY}`

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data);
    }
}