import api from '../api';

interface TaskData {
    project_id: number;
    phase_id?: number;
    standard_work_category_id?: number;
    activity_phase_id?: number;
    task_list_id?: number;
    task_name: string;
    estimated_hours?: number;
    schedule_start?: string;
    schedule_end?: string;
    completed_at?: string;
    status?: "not_started" | "in_progress" | "needs_review" | "approved" | "issue";
    assignee_ids?: number[];
    note?: string;
}

async function createTask(teamId: number, postData: TaskData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/task`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a task
const taskData: TaskData = {
    project_id: 34567,
    phase_id: 345678,
    standard_work_category_id: 45678,
    activity_phase_id: 567890,
    task_list_id: 67890,
    task_name: 'New Task',
    estimated_hours: 3,
    schedule_start: '2023-05-16',
    schedule_end: '2023-05-16',
    status: 'not_started',
    assignee_ids: [11111],
    note: 'This is a new task'
};

createTask(12345, taskData);