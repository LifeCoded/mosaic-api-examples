import * as qs from 'qs';
import api from '../api';

interface PhaseQueryParams {
    all?: boolean;
    limit?: number;
    offset?: number;
    search_text?: string;
    is_budget?: boolean;
    archived_after_date?: string;
    archived_before_date?: string; 
}

async function fetchAllPhases(teamId: number, queryParams: PhaseQueryParams): Promise<void> {
  try {
    const queryStinrg = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/phase/index${queryStinrg}`);
    const phases = response.data.phase;
    const totalCount = phases && phases.length ? phases.length : 0;
    console.log(phases);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all phases
fetchAllPhases(12345, { all: true });

// Example usage for fetching the phases by limiting the Projects identified
fetchAllPhases(12345, { limit: 10, offset: 2 });

// Example usage for fetching all phases with the word "test" in Project Title/Description/Number
fetchAllPhases(12345, { search_text: 'test' });

// Example usage for fetching the archived phases between 2020-01-01 and 2020-12-31
fetchAllPhases(12345, { archived_after_date: '01/01/2020', archived_before_date: '12/31/2020' });
