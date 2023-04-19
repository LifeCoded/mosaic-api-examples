import api from '../api';

interface PhaseData {
    project_id: number;
    name: string;
    phase_number?: string;
    start_date?: string;
    end_date?: string;
    fee_type?: "Fixed Fee" | "Hourly" | "Internal";
    is_budget?: boolean;
    total?: number;
    estimated_hours?: number;
    is_main?: boolean;
    billable?: boolean;
    billing_type?: 'employee' | 'work_category' | 'role'
    rate_group_id?: number;
    rate_multiplier?: number;
    budget_phase_by?: 'total hours' | 'member estimates' | 'spent and planned';
    budget_fixed_fee_with?: 'phase_estimate' | 'member_estimates' | 'spent_and_planned' | 'work_category_estimates';
    budget_hourly_with?: 'phase_estimate' | 'member_estimates' | 'spent_and_planned' | 'work_category_estimates';
    budget_internal_with?: 'phase_estimate' | 'member_estimates' | 'spent_and_planned' | 'work_category_estimates';
}

async function createPhase(teamId: number, postData: PhaseData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/phase`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a phase
const phaseData: PhaseData = {
    project_id: 67890,
    name: "Example Phase",
    phase_number: "1000",
    start_date: "01/01/2020",
    end_date: "01/31/2020",
    fee_type: "Fixed Fee",
    is_budget: true,
    total: 100000,
    estimated_hours: 2000,
    is_main: false,
    billable: true,
    billing_type: "employee",
    rate_group_id: 44556,
    rate_multiplier: 1.5,
    budget_phase_by: "total hours",
    budget_fixed_fee_with: "phase_estimate",
    budget_hourly_with: "phase_estimate",
    budget_internal_with: "phase_estimate"
};

createPhase(12345, phaseData);
