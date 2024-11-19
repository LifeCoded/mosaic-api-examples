import api from '../api';

interface PhaseUpdateData {
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
    dependable_phase_id?: number;
    dependency_type?: 'EndDate' | 'StartDate' | 'StartEndDate' | 'StartToEndDate' | 'EndToStartDate';
    estimated_cost?: number;
    move_action?: 'indent' | 'dedent';
    move_after_phase_id?: number;
    parent_id?: number;
}

async function updatePhase(teamId: number, phaseId: number, updateData: PhaseUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/phase/${phaseId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a project
const phaseData: PhaseUpdateData = {
    project_id: 67890,
    name: "Example Update Phase",
    phase_number: "1050",
    start_date: "2021-01-01",
    end_date: "2021-01-31",
    total: 50000
};

updatePhase(12345, 67890, phaseData);
