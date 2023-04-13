import api from '../api';

interface PortfolioUpdateData {
    portfolio_id?: number;
    project_number?: number;
    title?: string;
    description?: string;
    client?: string;
    start_date?: string;
    end_date?: string;
    total?: number;
    billable?: boolean;
    phase_orders?: string[];
}

async function updateProject(teamId: number, projectId: number, updateData: PortfolioUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/portfolio/${projectId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a project
const employeeData: PortfolioUpdateData = {
  portfolio_id: 123456,
  project_number: 1000,
  title: "Updated Example Project",
  description: "Updated example project description",
  client: "Updated Example Client",
  start_date: "01/01/2021",
  end_date: "12/31/2021",
  total: 50000,
  billable: true,
  phase_orders: ["12345", "67890"],
};

updateProject(12345, 67890, employeeData);
