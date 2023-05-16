import * as qs from 'qs'
import api from '../api';

async function fetchEmployee(teamId: number, employeeId: number): Promise<void> {
  try {
    const queryString = qs.stringify({ employee_id: employeeId }, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/employee${queryString}`);
    const employee = response.data.employee;
    console.log(employee);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching an employee by their employee ID
fetchEmployee(12345, 123456);
