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
})

async function fetchAllEmplyees(teamId: number, includeArchived: boolean = false): Promise<void> {
  try {
    const queryString = includeArchived ? "?include_discarded=true" : '';
    const response = await api.get(`/api/${teamId}/employee/index${queryString}`);
    const employees: EmployeeData[] = response.data.employee;
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all employees
fetchAllEmplyees(123456);

// Example usage for fetching all employees including the archived ones
fetchAllEmplyees(123456, true);
