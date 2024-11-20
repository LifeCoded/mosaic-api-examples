import qs from 'qs';
import api from '../api';

interface TaskListQueryParams {
    project_ids?: number[];
    task_list_ids?: number[];
}

async function fetchProjectTaskLists(teamId: number, queryParams: TaskListQueryParams): Promise<void> {
  try {
    const queryString = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/task_list/index${queryString}`);
    const taskLists = (response.data as { task_lists: any[] }).task_lists;
    const totalCount = taskLists?.length ?? 0;
    console.log(taskLists);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all task lists for multiple projects
fetchProjectTaskLists(12345, { project_ids: [23456, 34567, 45678] });

// Example usage for fetching all task lists for multiple task lists
fetchProjectTaskLists(12345, { task_list_ids: [56789, 67890, 78901] });
