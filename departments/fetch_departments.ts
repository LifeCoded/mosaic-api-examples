import api from '../api';

async function fetchCheckIns(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/department`);
    const departments = response.data.departments;
    const totalCount = departments?.length ?? 0;
    console.log(departments);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all departments under a team
fetchCheckIns(12345);
