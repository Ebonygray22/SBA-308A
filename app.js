import { searchFlights } from './modules/api.js';
import { updateSearchResults } from './modules/ui.js';

document.getElementById('search-btn').addEventListener('click', () => {
  const query = document.getElementById('search-input').value;
  searchFlights(query).then(updateSearchResults).catch(console.error);
});
