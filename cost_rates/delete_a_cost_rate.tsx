import api from '../api';

async function deleteCostRate(teamId: number, costRateId: number): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/cost_rate/${costRateId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a cost rate by its cost rate ID
deleteCostRate(12345, 67890);
