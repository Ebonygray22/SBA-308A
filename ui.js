
import { getFlightDetails } from './api.js';

export function updateFlightsList(flights) {
    const flightsList = document.getElementById('flights-list');
    flightsList.innerHTML = '';
    if (flights) {
        flights.forEach(flight => {
            const listItem = document.createElement('li');
            listItem.textContent = flight.flight.iata;
            listItem.addEventListener('click', () => {
                getFlightDetails(flight.flight_id).then(updateFlightDetails);
            });
            flightsList.appendChild(listItem);
        });
    } else {
        flightsList.textContent = 'There was a problem fetching the flights.';
    }
}

export function updateFlightDetails(flight) {
    const flightDetails = document.getElementById('flight-details');
    flightDetails.innerHTML = '';
    if (flight) {
        const title = document.createElement('h2');
        title.textContent = flight.flight.iata;
        const description = document.createElement('p');
        description.textContent = `Departure: ${flight.departure.airport} - Arrival: ${flight.arrival.airport}`;
        flightDetails.appendChild(title);
        flightDetails.appendChild(description);
    } else {
        flightDetails.textContent = 'There was a problem fetching the flight details.';
    }
}
