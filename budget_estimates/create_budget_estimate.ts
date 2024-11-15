import api from '../api';

interface BudgetEstimateData {
    phase_id: number;
    project_id: number;
    standard_work_category_id?: number;
    scope_id?: number;
    member_id?: number;
    estimated_hours?: number;
    estimated_amount?: number;
    estimated_percentage?: number;
    api_request_metadata?: {};
}

async function createBudgetEstimate(teamId: number, postData: BudgetEstimateData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/budget_estimate`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a budget estimate using estimated_hours
const budgetEstimateData1: BudgetEstimateData = {
    phase_id: 456789,
    project_id: 123456,
    standard_work_category_id: 345678,
    member_id: 23456,
    estimated_hours: 200,
    api_request_metadata: {}
};
createBudgetEstimate(12345, budgetEstimateData1);

// Example usage of creating a budget estimate using estimated_amount
const budgetEstimateData2: BudgetEstimateData = {
    phase_id: 456789,
    project_id: 123456,
    standard_work_category_id: 345678,
    member_id: 34567,
    estimated_amount: 2500,
    api_request_metadata: {}
};
createBudgetEstimate(12345, budgetEstimateData2);

// Example usage of creating a budget estimate using estimated_percentage
const budgetEstimateData3: BudgetEstimateData = {
    phase_id: 456789,
    project_id: 123456,
    standard_work_category_id: 345678,
    member_id: 45678,
    estimated_percentage: 75,
    api_request_metadata: {}
};
createBudgetEstimate(12345, budgetEstimateData3);