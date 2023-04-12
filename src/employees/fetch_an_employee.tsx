import axios from 'axios';

interface EmployeeData {
    email: string;
    first_name: string; 
    last_name: string; 
    mosaic_id: number; 
    mosaic_team_id: number; 
    is_archived: boolean; 
    created_at: string; 
    updated_at: string; 
    employment_type: string;
}

const api = axios.create({
    baseURL: 'https://example.com/api',
});

async function fetchEmployee(teamId: number, employeeId: number, isEmployeeId: boolean = true): Promise<void> {
  try {
    const queryString = isEmployeeId ? `?account_id=${employeeId}` : `?team_membership_id=${employeeId}`;
    const response = await api.get(`/api/${teamId}/employee${queryString}`);
    const employee: EmployeeData = response.data.employee;
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all employees
fetchEmployee(123456, 123);

// Example usage for fetching all employees including the archived ones
fetchEmployee(123456, 456, false);
