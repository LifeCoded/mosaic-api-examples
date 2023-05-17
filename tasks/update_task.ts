import api from '../api';

interface TaskUpdateData {
    task_id: number;
    phase_id?: number;
    work_category_id?: number;
    activity_phase_id?: number;
    task_list_id?: number;
    task_name?: string;
    estimated_hours?: number;
    scheduled_start?: string;
    scheduled_end?: string;
    completed_at?: string;
    status?: "not_started" | "in_progress" | "needs_review" | "approved" | "issue"
    assignee_ids?: number[];
    unassignee_ids?: number[];
    position?: number;
    note?: string;
}

async function updateTask(teamId: number, updateData: TaskUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/task`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a task and move its position to 1 in the task list
const taskData: TaskUpdateData = {
    task_id: 46890,
    task_name: 'Updated Task',
    estimated_hours: 5,
    scheduled_start: '2023-05-16',
    scheduled_end: '2023-05-17',
    status: 'in_progress',
    position: 1,
    note: 'This is a updated task'
};

updateTask(12345, taskData);
