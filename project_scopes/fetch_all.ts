import qs from 'qs';
import api from '../api';

interface FetchScopesParams {
  all?: number;
  exclude_non_requests?: boolean;
  group_determinant?: string;
  include_requests?: boolean;
  limit?: number;
  member_ids?: number[];
  offset?: number;
  phase_ids?: number[];
  project_ids?: number[];
  schedule_end?: string;
  schedule_start?: string;
  scope_ids?: number[];
  sort_attributes?: string[];
  work_plan_ids?: number[];
}

async function fetchAllScopes(
  teamId: number,
  queryParams: FetchScopesParams
): Promise<void> {
  try {
    const queryString = qs.stringify(queryParams, { addQueryPrefix: true, arrayFormat: "brackets" });
    const response = await api.get(`/api/${teamId}/scope${queryString}`);
    const scopes: any[] = (response.data as { scopes: any[] }).scopes;
    console.log(scopes);
  } catch (error) {
    console.error('Error fetching scopes:', error);
  }
}

// Example usage:
// Fetch all scopes for a team
fetchAllScopes(12345, {});

// Fetch scopes with specific filters
fetchAllScopes(12345, {
  project_ids: [12233],
  phase_ids: [222],
  member_ids: [3333444],
  schedule_start: '2022-11-07',
  schedule_end: '2022-11-17',
});