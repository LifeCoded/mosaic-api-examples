import * as qs from 'qs';
import api from '../api';

interface MemberRoleQueryParams {
    member_id?: number;
    position_id?: number;
    include_archived?: boolean;
    is_active?: boolean;
}

async function fetchAllMemberRoles(teamId: number, queryParams: MemberRoleQueryParams): Promise<void> {
  try {
    const queryString = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/member_role${queryString}`);
    const member_roles = response.data;
    const totalCount = member_roles && member_roles.length ? member_roles.length : 0;
    console.log(member_roles);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all member roles
fetchAllMemberRoles(12345, {});

// Example usage for fetching all member roles for a specific employee
fetchAllMemberRoles(12345, { member_id: 11111 });

// Example usage for fetching all member roles for a specific position
fetchAllMemberRoles(12345, { position_id: 123456 });

// Example usage for fetching all member roles active today
fetchAllMemberRoles(12345, { is_active: true });

// Example usage for fetching all member roles including archived
fetchAllMemberRoles(12345, { include_archived: true });
