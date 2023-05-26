import api from '../api';

async function deleteTask(teamId: number, taskId: number): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/task/${taskId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a task using a task ID
deleteTask(12345, 46890);
