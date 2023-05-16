import * as qs from 'qs';
import api from '../api';

async function fetchAllEmployees(teamId: number, includeArchived: boolean = false): Promise<void> {
  try {
    const queryString = includeArchived ? qs.stringify({ include_discarded: true }, { addQueryPrefix: true }) : '';
    const response = await api.get(`/api/${teamId}/employee/index${queryString}`);
    const employees = response.data.employee;
    console.log(employees)
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all employees
fetchAllEmployees(12345);

// Example usage for fetching all employees including the archived ones
fetchAllEmployees(12345, true);
