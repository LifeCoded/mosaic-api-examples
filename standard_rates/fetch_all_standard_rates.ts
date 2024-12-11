import api from '../api';

// Define the structure of a standard rate
interface StandardRate {
  created_at: string; // ISO-8601 formatted date
  description: string;
  is_cost_rate: boolean;
  is_default: boolean;
  mosaic_id: number;
  mosaic_team_id: number;
  multiplier_high: number | null;
  multiplier_low: number | null;
  rate: string; // Represented as a string in the response
  updated_at: string; // ISO-8601 formatted date
}

// Define the response type
interface StandardRatesResponse {
  rates: StandardRate[];
}

async function fetchAllStandardRates(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/rate`);
    const standardRates = (response.data as StandardRatesResponse).rates;
    console.log(standardRates)
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all standard rates
fetchAllStandardRates(12345);