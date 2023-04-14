import api from '../api';

interface EmployeeUpdateData {
    employee_id: number;
    email?: string;
    first_name?: string;
    last_name?: string;
}

async function updateEmployee(teamId: number, updateData: EmployeeUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/employee`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating an employee
const employeeData: EmployeeUpdateData = {
    employee_id: 123,
    email: "updateEmployee@mosaicapp.com",
    first_name: "Update",
    last_name: "Employee",
};

updateEmployee(12345, employeeData);
