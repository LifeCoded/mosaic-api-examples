import api from '../api';

interface EmployeeData {
  email: string;
  first_name?: string;
  last_name?: string;
}

async function createEmployee(teamId: number, postData: EmployeeData): Promise<void> {
  try {
    const response = await api.post(`/api/${teamId}/employee`, postData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of creating an employee
const employeeData: EmployeeData = {
  email: "exampleEmployee@mosaicapp.com",
  first_name: "Example",
  last_name: "Employee"
};

createEmployee(12345, employeeData);
