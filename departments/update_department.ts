import api from '../api';

interface DepartmentUpdateData {
  name?: string;
  description?: string;
}

async function updateDepartment(teamId: number, departmentId: number, updateData: DepartmentUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/department/${departmentId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a department using a department ID
const departmentData: DepartmentUpdateData = {
  name: "Updated Department",
  description: "This department has been updated"
};

updateDepartment(12345, 67890, departmentData);
