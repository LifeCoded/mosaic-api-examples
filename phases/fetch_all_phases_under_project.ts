import * as qs from 'qs';
import api from '../api';

interface PhaseQueryParams {
    project_id: number;
}

async function fetchAllPhasesUnderProject(teamId: number, queryParams: PhaseQueryParams): Promise<void> {
  try {
    const queryStinrg = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/phase${queryStinrg}`);
    const phases = response.data.phase;
    const totalCount = phases && phases.length ? phases.length : 0;
    console.log(phases);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all phases under a project
fetchAllPhasesUnderProject(12345, { project_id: 123456 });
