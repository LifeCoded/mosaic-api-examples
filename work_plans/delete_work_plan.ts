import api from '../api';

async function deleteWorkPlan(teamId: number, workPlanId: number): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/work_plan/${workPlanId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a work plan using a work plan ID
deleteWorkPlan(12345, 67890);
