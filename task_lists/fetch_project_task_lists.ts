import * as qs from 'qs';
import api from '../api';

interface ProjectTaskListQueryParams {
    project_id: number;
}

async function fetchProjectTaskLists(teamId: number, queryParams: ProjectTaskListQueryParams): Promise<void> {
  try {
    const queryStinrg = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/task_list${queryStinrg}`);
    const taskLists = response.data.task_lists;
    const taskListOrder = response.data.task_list_order;
    const totalCount = taskLists?.length ?? 0;
    console.log(taskLists);
    console.log(taskListOrder);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all task lists for a project
fetchProjectTaskLists(12345, { project_id: 23456 });
