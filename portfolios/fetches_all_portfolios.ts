import api from '../api';

async function fetchAllPortfolios(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/portfolio/index`);
    const portfolios = response.data.boards;
    console.log(portfolios)
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all portfolios
fetchAllPortfolios(12345);
