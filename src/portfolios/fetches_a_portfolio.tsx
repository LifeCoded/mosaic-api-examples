import * as qs from 'qs';
import api from '../api';

async function fetchPortfolio(teamId: number, portfolioId: number): Promise<void> {
  try {
    const queryString = qs.stringify({ portfolio_id: portfolioId }, { addQueryPrefix: true });
    const response = await api.get(`/api/${teamId}/portfolio${queryString}`);
    const portfolio = response.data;
    console.log(portfolio);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching a portfolio by their portfolio ID
fetchPortfolio(12345, 67890);
