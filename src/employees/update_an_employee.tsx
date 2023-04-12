import axios from 'axios';

interface EmployeeUpdateData {
    employee_id?: number;
    team_membership_id?: number;
    email?: string;
    first_name?: string;
    last_name?: string;
    api_request_id?: number;
    api_request_metadata?: {};
}

const api = axios.create({
    baseURL: 'https://example.com/api',
})

async function updateEmployee(teamId: number, updateData: EmployeeUpdateData, employeeId: number, isEmployeeId: boolean = true): Promise<void> {
  try {
    if (isEmployeeId) updateData.employee_id = employeeId;
    else updateData.team_membership_id = employeeId;
    const response = await api.put(`/api/${teamId}/employee`, employeeData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating an employee
const employeeData: EmployeeUpdateData = {
  email: "updateEmployee@mosaicapp.com",
  first_name: "Update",
  last_name: "Employee",
};

// Example usage of updating an employee by their employee ID
updateEmployee(123456, employeeData, 123);

// Example usage of updating an employee by their team membership ID
updateEmployee(123456, employeeData, 456, false);
