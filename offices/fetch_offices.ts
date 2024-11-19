import api from '../api';

async function fetchOffices(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/offices`);
    const offices = (response.data as { offices: any[] }).offices;
    const totalCount = offices?.length ?? 0;
    console.log(offices);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all offices for a team
fetchOffices(12345);
