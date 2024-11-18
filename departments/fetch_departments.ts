import api from '../api';

async function fetchDepartments(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/department`);
    const departments = (response.data as { departments: any[] }).departments;
    const totalCount = departments?.length ?? 0;
    console.log(departments);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all departments under a team
fetchDepartments(12345);
