const API_KEY = 'd9f926cdff9a97628892044ba4d7734c';

export async function getFlights() {
    try {
        const response = await fetch(`https://api.aviationstack.com/v1/flights?access_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const flights = await response.json();
        return flights.data;
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
        return null;
    }
}

export async function getRoutes() {
    try {
        const response = await fetch(`https://api.aviationstack.com/v1/routes?access_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const routes = await response.json();
        return routes.data;
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
        return null;
    }
}

export async function getAirports() {
    try {
        const response = await fetch(`https://api.aviationstack.com/v1/airports?access_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const airports = await response.json();
        return airports.data;
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
        return null;
    }
}

export async function getAirlines() {
    try {
        const response = await fetch(`https://api.aviationstack.com/v1/airlines?access_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const airlines = await response.json();
        return airlines.data;
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
        return null;
    }
}

export async function getAirplanes() {
    try {
        const response = await fetch(`https://api.aviationstack.com/v1/airplanes?access_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const airplanes = await response.json();
        return airplanes.data;
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
        return null;
    }
}

export async function getAircraftTypes() {
    try {
        const response = await fetch(`https://api.aviationstack.com/v1/aircraft_types?access_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const aircraftTypes = await response.json();
        return aircraftTypes.data;
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
        return null;
    }
}

export async function getCities() {
    try {
        const response = await fetch(`https://api.aviationstack.com/v1/cities?access_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const cities = await response.json();
        return cities.data;
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
        return null;
    }
}

export async function getCountries() {
    try {
        const response = await fetch(`https://api.aviationstack.com/v1/countries?access_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const countries = await response.json();
        return countries.data;
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
        return null;
    }
}
