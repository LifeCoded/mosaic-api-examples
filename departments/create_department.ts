import api from '../api';

interface DepartmentData {
    name: string;
    description?: string;
}

async function createDepartment(teamId: number, postData: DepartmentData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/department`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a department
const departmentData: DepartmentData = {
    name: 'Engineering',
    description: 'The engineering department is responsible for building the product.'
};

createDepartment(12345, departmentData);