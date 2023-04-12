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

async function fetchEmployee(teamId: number, employeeId: number | null = null, isEmployeeId: boolean = true): Promise<void> {
  try {
    const queryString = employeeId ? isEmployeeId ? `?employee_id=${employeeId}` : `?team_membership_id=${employeeId}` : "";
    const response = await api.get(`/api/${teamId}/employee${queryString}`);
    const employee: EmployeeData = response.data.employee;
    console.log(employee);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching an employee by their employee ID
fetchEmployee(123456, 123);

// Example usage for fetching an employee by their team membership ID
fetchEmployee(123456, 456, false);

// Not recommended usage but can also fetch all employees by not passing the employeeId
fetchEmployee(123456)