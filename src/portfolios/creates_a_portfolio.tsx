import api from '../api';

interface PortfolioData {
  name: string;
  is_private: boolean;
  is_personal?: boolean;
}

async function createEmployee(teamId: number, postData: PortfolioData): Promise<void> {
  try {
    const response = await api.post(`/api/${teamId}/portfolio`, postData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of creating an employee
const portfolioData: PortfolioData = {
  name: "Example Portfolio",
  is_private: false,
  is_personal: false
};

createEmployee(12345, portfolioData);
