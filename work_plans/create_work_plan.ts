import api from '../api';

interface WorkPlanData {
    project_id: number;
    phase_id: number;
    standard_work_category_id: number;
    member_id?: number;
    start_date: string;
    end_date: string;
    total_hours?: number;
    daily_hours?: number;
    description?: string;
    role_id?: number;
}

async function createWorkPlan(teamId: number, postData: WorkPlanData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/work_plan`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a work plan for a member on a project in May
const workPlanData: WorkPlanData = {
    project_id: 34567,
    phase_id: 345678,
    standard_work_category_id: 45678,
    member_id: 11111,
    start_date: "2023-05-01",
    end_date: "2023-05-07",
    total_hours: 40,
    daily_hours: 8,
    description: "This is a work plan",
    role_id: 12345
};

createWorkPlan(12345, workPlanData);