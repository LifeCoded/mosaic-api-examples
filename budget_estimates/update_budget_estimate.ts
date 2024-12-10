import api from '../api';

interface BudgetEstimateUpdateData {
    estimated_hours?: number;
    estimated_amount?: number;
    estimated_percentage?: number;
}

async function updateBudgetEstimate(teamId: number, budgetEstimateId: number, updateData: BudgetEstimateUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/budget_estimate/${budgetEstimateId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a budget estimate using estimated hours
const budgetEstimateData: BudgetEstimateUpdateData = {
    estimated_hours: 250
};

updateBudgetEstimate(12345, 67890, budgetEstimateData);