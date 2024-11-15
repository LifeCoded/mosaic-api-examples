import api from '../api';

async function fetchAllCostRates(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/project`);
    const costRates = response.data.salaries;
    const totalCount = costRates ? costRates.length : 0;
    console.log(costRates);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all cost rates under a team
fetchAllCostRates(12345);
