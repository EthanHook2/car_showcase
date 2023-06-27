export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': '1b61ab37a8mshbb127a68f909c80p1fa484jsnb4eb4c5615eb',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}