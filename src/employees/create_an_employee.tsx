import axios from 'axios';

interface EmployeeData {
  email: string;
  first_name?: string;
  last_name?: string;
  role?: string;
  api_request_id?: number;
  total?: number;
  api_request_metadata?: {};
}

const api = axios.create({
    baseURL: 'https://example.com/api',
})

async function createEmployee(teamId: number, postData: EmployeeData): Promise<void> {
  try {
    const response = await api.post(`/api/${teamId}/employee`, employeeData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of creating an employee
const employeeData: EmployeeData = {
  email: "exampleEmployee@mosaicapp.com",
  first_name: "Example",
  last_name: "Employee",
  role: "Project Manager",
};

createEmployee(123456, employeeData);
