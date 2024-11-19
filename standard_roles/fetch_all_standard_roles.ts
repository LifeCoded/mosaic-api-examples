import api from '../api';

async function fetchAllStandardRoles(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/role`);
    const standardRoles = (response.data as { roles: any }).roles;
    console.log(standardRoles)
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all standard roles
fetchAllStandardRoles(12345);