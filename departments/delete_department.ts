import api from '../api';

async function deleteDepartment(teamId: number, departmentId: number): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/department/${departmentId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a department using department ID
deleteDepartment(12345, 67890);
