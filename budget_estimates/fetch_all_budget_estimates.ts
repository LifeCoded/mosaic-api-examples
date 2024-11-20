import qs from 'qs';
import api from '../api';

interface BudgetEstimateQueryParams {
    project_id: number;
}

interface BudgetEstimateResponse {
  estimations: Array<any>; // Replace `any` with the type of objects in the `estimations` array if known.
}
async function fetchAllActivityPhases(teamId: number, queryParams: BudgetEstimateQueryParams): Promise<void> {
  try {
    const queryString = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get<BudgetEstimateResponse>(`/api/${teamId}/budget_estimate/index${queryString}`);
    const budgetEstimates = response.data.estimations;
    const totalCount = budgetEstimates && budgetEstimates.length ? budgetEstimates.length : 0;
    console.log(budgetEstimates);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all budget estimates for a project
fetchAllActivityPhases(12345, { project_id: 123456 });