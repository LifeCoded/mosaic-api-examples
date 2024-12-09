import api from '../api';

async function fetchRateGroups(team_id: number): Promise<void> {
  try {
    const response = await api.get(`/api/${team_id}/rate_group`);
    const data = response.data as { rate_groups: any[] };
    console.log('Rate groups fetched successfully:', data);
    console.log("length of rate groups: ", data.rate_groups.length);
  } catch (error) {
    console.error('Error fetching rate groups:', error);
  }
}

// Example usage for fetching all rate groups in a team
fetchRateGroups(12345);