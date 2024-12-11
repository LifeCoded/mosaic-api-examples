import qs from 'qs';
import api from '../api';

interface UpdateProjectMembershipData {
  project_id: number;
  member_id: number;
  permission_level: 'Project Manager' | 'Project Member' | 'View Only';
}

async function updateProjectMembership(
  team_id: number,
  updateData: UpdateProjectMembershipData
): Promise<void> {
  try {
    const response = await api.put(`/api/${team_id}/project_members`, updateData);
    console.log('Project membership updated successfully:', response.data);
  } catch (error) {
    console.error('Error updating project membership:', error);
  }
}

// Example usage for updating a project membership
const updateProjectMembershipParams: UpdateProjectMembershipData = {
  project_id: 123,
  member_id: 456,
  permission_level: 'Project Manager',
};
updateProjectMembership(789, updateProjectMembershipParams);