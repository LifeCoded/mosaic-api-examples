import qs from 'qs';
import api from '../api';

interface BudgetEstimateQueryParams {
    project_id: number;
}

// Define the structure of a budget estimate
interface BudgetEstimate {
  activity_phase_id: number;
  created_at: string; // ISO-8601 formatted date
  employee_id: number;
  employee_name: string;
  estimated_amount: number;
  estimated_hours: number;
  estimated_percentage: number;
  member_email: string;
  mosaic_id: number;
  mosaic_team_id: number;
  phase_id: number;
  phase_name: string;
  portfolio_id: number;
  portfolio_name: string;
  project_id: number;
  project_title: string;
  scope_id: number;
  standard_work_category_id: number;
  standard_work_category_title: string;
  updated_at: string; // ISO-8601 formatted date
}

// Define the response structure
interface BudgetEstimateResponse {
  estimations: BudgetEstimate[];
}
async function fetchAllBudgetEstimates(teamId: number, queryParams: BudgetEstimateQueryParams): Promise<void> {
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
fetchAllBudgetEstimates(12345, { project_id: 123456 });