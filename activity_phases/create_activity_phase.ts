import api from '../api';

interface ActivityPhaseData {
    phase_id: number;
    work_category_id?: number;
    title?: string;
    fee_type?: "Fixed Fee" | "Hourly" | "Internal";
    billable?: boolean;
    is_custom?: boolean;
    total?: number;
    estimated_cost?: number;
    estimated_hours?: number;
    start_date?: string;
    end_date?: string;
    is_archived?: boolean;
    budget_activity_phase_by?: 'total hours' | 'member estimates' | 'spent and planned';
    budget_fixed_fee_with?: 'activity_phase_estimate' | 'member_estimates' | 'spent_and_planned' | 'phase_estimate_percentage';
    budget_hourly_with?: 'activity_phase_estimate' | 'member_estimates' | 'spent_and_planned' | 'phase_estimate_percentage';
    budget_internal_with?: 'activity_phase_estimate' | 'member_estimates' | 'spent_and_planned' | 'phase_estimate_percentage';
}

async function createActivityPhase(teamId: number, postData: ActivityPhaseData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/activity_phase`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating an activity phase by using work_category_id
const activityPhaseData: ActivityPhaseData = {
    phase_id: 456789,
    work_category_id: 345678,
    fee_type: "Fixed Fee",
    billable: true,
    is_custom: true,
    total: 100000,
    estimated_cost: 75000,
    estimated_hours: 2000,
    start_date: "01/01/2023",
    end_date: "01/31/2023",
    is_archived: false,
    budget_activity_phase_by: "total hours",
    budget_fixed_fee_with: "activity_phase_estimate",
    budget_hourly_with: "activity_phase_estimate",
    budget_internal_with: "activity_phase_estimate"
};

createActivityPhase(12345, activityPhaseData);

// Example usage of creating an activity phase by using work category title
const activityPhaseData2: ActivityPhaseData = {
    phase_id: 456789,
    title: "Example Work Category",
    fee_type: "Hourly",
    billable: true,
    is_custom: true,
    total: 0,
    estimated_cost: 4000,
    estimated_hours: 100,
    start_date: "01/01/2023",
    end_date: "01/31/2023",
    is_archived: false,
    budget_activity_phase_by: "total hours",
    budget_fixed_fee_with: "activity_phase_estimate",
    budget_hourly_with: "activity_phase_estimate",
    budget_internal_with: "activity_phase_estimate"
};

createActivityPhase(12345, activityPhaseData2);
