t
import { getFlights } from './api.js';
import { updateFlightsList } from './ui.js';

const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    const searchQuery = searchBar.value;
    getFlights(searchQuery).then(updateFlightsList);
});
