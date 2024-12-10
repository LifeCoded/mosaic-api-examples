import api from '../api';

async function deleteBudgetEstimate(teamId: number, budgetEstimateId: number): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/budget_estimate/${budgetEstimateId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a budget estimate by its ID
deleteBudgetEstimate(12345, 67890);