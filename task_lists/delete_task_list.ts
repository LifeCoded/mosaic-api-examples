import api from '../api';

async function deleteTaskList(teamId: number, taskListId: number): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/task_list/${taskListId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a task list using a task list ID
deleteTaskList(12345, 67890);
