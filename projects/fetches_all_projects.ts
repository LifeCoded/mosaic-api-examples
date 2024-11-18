import * as qs from 'qs';
import api from '../api';

interface ProjectQueryParams {
  portfolio_id: number;
  archived_after_date?: string; // Format: 'YYYY-MM-DD'
  archived_before_date?: string; // Format: 'YYYY-MM-DD'
}

async function fetchAllProjects(teamId: number, queryParams: ProjectQueryParams): Promise<void> {
  try {
    const queryString = qs.stringify(queryParams, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/project${queryString}`);
    const projects = (response.data as { projects: any[], }).projects;
    const total_count = projects.length || 0;
    console.log(projects);
    console.log(total_count);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all projects under a portfolio
fetchAllProjects(12345, { portfolio_id: 123456 });