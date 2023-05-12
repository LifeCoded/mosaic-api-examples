import api from '../api';

interface CostRateData {
    employee_id: number;
    active_rate_type: string;
    description: string;
    annual_rate?: number;
    hours_per_year?: number;
    hourly_rate?: number;
    overhead_factor?: number;
    actual_hourly_rate: number;
    start_date?: string;
    end_date?: string;
}

async function createCostRate(teamId: number, postData: CostRateData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/cost_rate`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a cost rate
const costRateData: CostRateData = {
    employee_id: 12345,
    active_rate_type: "annual",
    description: "Example Cost Rate",
    annual_rate: 50000,
    hours_per_year: 1000,
    hourly_rate: 50,
    overhead_factor: 1.5,
    actual_hourly_rate: 75,
    start_date: "2023-05-01",
    end_date: "2023-05-10"
};

createCostRate(12345, costRateData);