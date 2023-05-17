import api from '../api';

interface TaskListUpdateData {
    name?: string;
    index?: number;
}

async function updateTaskList(teamId: number, taskListId: number, updateData: TaskListUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/task_list/${taskListId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a task list using a task list ID
const taskListData: TaskListUpdateData = {
    name: 'Updated Task List',
    index: 2
};

updateTaskList(12345, 67890, taskListData);
