import api from '../api/index';
import axios from 'axios';
import { ActionType } from '../webhook/webhook_call';

interface PortfolioData {
  name: string;
  is_private: boolean;
  is_personal?: boolean;
}

export async function createPortfolio(teamId: number, postData: PortfolioData): Promise<void> {
  try {
    const response = await api.post(`/api/${teamId}/portfolio`, postData);
    console.log(response.status);
    
    /**
     * Simulates a webhook call after the portfolio creation (for testing purposes).
     *
     * @remarks
     * This function sends a POST request to a local webhook endpoint with the portfolio data.
     */
    await axios.post('http://localhost:3000/webhook', {
      dataType: "portfolio",
      metadata: {},
      actionType: ActionType.CREATE,
      payload: postData
    });

  } catch (error) {
    console.error('error:', error.response.data);
  }
}

// Example usage of creating an employee
const portfolioData: PortfolioData = {
  name: "Example Portfolio",
  is_private: false,
  is_personal: false
};

createPortfolio(12345, portfolioData);
