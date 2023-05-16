import api from '../api';

async function fetchAllStandardRates(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/rate`);
    const standardRates = response.data.rates;
    console.log(standardRates)
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all standard rates
fetchAllStandardRates(12345);