import * as qs from 'qs';
import api from '../api';

async function archiveEmployee(teamId: number, employeeId: number): Promise<void> {
  try {
    const queryString = qs.stringify({ employee_id: employeeId }, { addQueryPrefix: true });
    const response = await api.delete(`/api/${teamId}/employee${queryString}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting an employee by their employee ID
archiveEmployee(12345, 123456);
