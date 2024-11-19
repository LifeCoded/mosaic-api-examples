import api from '../api';

interface WorkPlanUpdateData {
    project_id?: number;
    phase_id?: number;
    standard_work_category_id?: number;
    member_id?: number;
    start_date?: string;
    end_date?: string;
    total_hours?: number;
    daily_hours?: number;
    description?: string;
}

async function updateWorkPlan(teamId: number, workPlanId: number, updateData: WorkPlanUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/work_plan/${workPlanId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a work plan using a work plan ID
const workPlanData: WorkPlanUpdateData = {
    start_date: "2023-05-17",
    end_date: "2023-05-31",
    total_hours: 50,
    daily_hours: 5,
    description: "This is an updated work plan"
};

updateWorkPlan(12345, 67890, workPlanData);
