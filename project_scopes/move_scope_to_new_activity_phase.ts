import qs from 'qs';
import api from '../api';

interface MoveScopesParams {
  copy?: boolean;
  scope_ids: number[];
  work_plan_id: number;
}

async function moveScopesToNewActivityPhase(team_id: number, queryParams: MoveScopesParams): Promise<void> {
  const queryString = qs.stringify(queryParams, { addQueryPrefix: true, arrayFormat: "brackets" });

  try {
    const response = await api.put(`/api/${team_id}/scope_update_activity_phase`, queryString);
    console.log('Scopes moved successfully:', response.data);
  } catch (error) {
    console.error('Error moving scopes:', error);
  }
}

// Example usage for moving scopes to a new activity phase
const moveScopesParams: MoveScopesParams = {
    scope_ids: [1, 2, 3],
    work_plan_id: 67890,
};
moveScopesToNewActivityPhase(12345, moveScopesParams);

// Example usage for copying scopes to a new activity phase
const copyScopesParams: MoveScopesParams = {
    copy: true,
    scope_ids: [1, 2, 3],
    work_plan_id: 67890,
};
moveScopesToNewActivityPhase(12345, copyScopesParams);
