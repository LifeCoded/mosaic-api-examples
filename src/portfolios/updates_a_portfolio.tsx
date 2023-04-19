import api from '../api';

interface PortfolioUpdateData {
    name?: string;
    is_private?: boolean;
    archive?: boolean;
    unarchive?: boolean;
}

async function updatePortfolio(teamId: number, portfolioId: number, updateData: PortfolioUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/portfolio/${portfolioId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating an employee to change name and archive a portfolio
const portfolioData: PortfolioUpdateData = {
    name: "Updated Example Portfolio",
    is_private: false,
    archive: true,
    unarchive: false,
};

updatePortfolio(12345, 67890, portfolioData);
