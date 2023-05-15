import * as qs from 'qs';
import api from '../api';

async function fetchesAllProjects(teamId: number, portfolioId: number): Promise<void> {
  try {
    const queryStinrg = qs.stringify({ portfolio_id: portfolioId }, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/project${queryStinrg}`);
    const [projects, total_count] = response.data;
    console.log(projects);
    console.log(total_count);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all projects under a portfolio
fetchesAllProjects(12345, 123456);
