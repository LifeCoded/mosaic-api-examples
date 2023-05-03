import * as qs from 'qs';
import api from '../api';

interface MemberProjectRoleQueryParams {
    member_id?: number;
    project_id?: number;
    role_id?: number;
    phase_id?: number;
    include_archived?: boolean;
}

async function fetchMemberProjectRoles(teamId: number, queryParams: MemberProjectRoleQueryParams): Promise<void> {
  try {
    const queryStinrg = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/member_project_role${queryStinrg}`);
    const memberProjectRoles = response.data.member_project_roles;
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
