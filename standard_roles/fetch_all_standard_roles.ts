import api from '../api';

// Define the structure of a standard role
interface StandardRole {
  deleted: boolean;
  description: string | null;
  discarded_at: string | null; // ISO-8601 formatted date or null
  id: number;
  is_default: boolean;
  name: string;
  position_memberships: any | null; 
  team_id: number;
}

// Define the response type
interface StandardRolesResponse {
  roles: StandardRole[];
}

async function fetchAllStandardRoles(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/role`);
    const standardRoles = (response.data as StandardRolesResponse).roles;
    console.log(standardRoles)
    console.log('Total Roles Count:', standardRoles?.length ?? 0);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all standard roles
fetchAllStandardRoles(12345);