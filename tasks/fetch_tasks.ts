import * as qs from 'qs';
import api from '../api';

interface TaskQueryParams {
    project_id: number;
    member_id?: number;
}

async function fetchTasks(teamId: number, queryParams: TaskQueryParams): Promise<void> {
  try {
    const queryStinrg = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/task${queryStinrg}`);
    const tasks = response.data.tasks;
    const totalCount = response.data.task_count;
    console.log(tasks);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all tasks for a project assigned to a specific member
fetchTasks(12345, { project_id: 23456, member_id: 11111 });
