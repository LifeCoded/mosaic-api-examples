import qs from 'qs';
import api from '../api';

// Define the interface for MemberProjectRole
interface MemberProjectRole {
  created_at: string; // ISO-8601 formatted date
  end_date: string | null; // Can be null or a date string
  member_budget_id: number;
  member_id: number;
  mosaic_id: number;
  mosaic_team_id: number;
  phase_id: number;
  project_id: number;
  role_id: number;
  start_date: string; // Date in string format
  updated_at: string; // ISO-8601 formatted date
}


interface MemberProjectRoleQueryParams {
    member_id?: number;
    project_id?: number;
    role_id?: number;
    phase_id?: number;
    include_archived?: boolean;
}

async function fetchMemberProjectRoles(teamId: number, queryParams: MemberProjectRoleQueryParams): Promise<void> {
  try {
    const queryString = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/member_project_role${queryString}`);
    const data = response.data as { member_project_roles: MemberProjectRole[] };
    const memberProjectRoles = data.member_project_roles;
    const totalCount = memberProjectRoles?.length ?? 0;
    console.log(memberProjectRoles);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all member project roles under a team
fetchMemberProjectRoles(12345, {});

// Example usage for fetching all member project roles of a member under a project including the archived ones
fetchMemberProjectRoles(12345, { member_id: 11234, project_id: 23456, include_archived: true });
