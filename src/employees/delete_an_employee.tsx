import axios from 'axios';

const api = axios.create({
    baseURL: 'https://example.com/api',
})

async function archiveEmployee(teamId: number, employeeId: number, isEmployeeId: boolean = true): Promise<void> {
  try {
    const queryString = isEmployeeId ? `?account_id=${employeeId}` : `?team_membership_id=${employeeId}`;
    const response = await api.delete(`/api/${teamId}/employee${queryString}`);
    console.log(response.status;
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting an employee by their account ID
archiveEmployee(123456, 123);

// Example usage for deleting an employee by their team membership ID
archiveEmployee(123456, 456, false);
