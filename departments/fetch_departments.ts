import api from '../api';

// Define the interface for DepartmentMembership
interface DepartmentMembership {
  id: number;
  discarded_at: string | null; // Can be null or a date string
  entity_id: number;
  entity_type: string; // e.g., "Account"
}

// Define the interface for Department
interface Department {
  color: string; // e.g., "#3C78D8"
  deleted: boolean;
  department_memberships: DepartmentMembership[]; // Array of memberships
  description: string;
  discarded_at: string | null; // Can be null or a date string
  id: number;
  name: string; // e.g., "Marketing"
  team_id: number;
}

async function fetchDepartments(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/department`);
    const departments = (response.data as { departments: Department[] }).departments;
    const totalCount = departments?.length ?? 0;
    console.log(departments);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all departments under a team
fetchDepartments(12345);
