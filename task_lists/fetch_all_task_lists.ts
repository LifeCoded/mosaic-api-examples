import * as qs from 'qs';
import api from '../api';

interface TaskListQueryParams {
    project_ids?: number[];
    task_list_ids?: number[];
}

async function fetchProjectTaskLists(teamId: number, queryParams: TaskListQueryParams): Promise<void> {
  try {
    const queryStinrg = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/task_list/index${queryStinrg}`);
    const taskLists = response.data.task_lists;
    const totalCount = taskLists?.length ?? 0;
    console.log(taskLists);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all task lists for multiple projects
fetchProjectTaskLists(12345, { project_ids: [23456, 34567, 45678] });
