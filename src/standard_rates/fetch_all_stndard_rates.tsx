import * as qs from 'qs';
import api from '../api';

async function fetchAllStandardRates(teamId: number): Promise<void> {
  try {
    const queryString = qs.stringify({ team_id: teamId }, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/rate${queryString}`);
    const standardRates = response.data;
    const totalCount = standardRates && standardRates.length ? standardRates.length : 0;
    console.log(standardRates);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all standard rates under a team
fetchAllStandardRates(12345);