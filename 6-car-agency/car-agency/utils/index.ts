export const calculateCarRent = (city_mpg: number, year: number) => {
  // This approach incentivizes the rental of newer and more fuel-efficient
  // vehicles by adjusting the price according to these characteristics.
  const basePricePerDay = 50; // Base rental price per day
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '8433c1badbmsha99021a8a68fdb9p1142d7jsn7590621320e2',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json();

  return result;
}
