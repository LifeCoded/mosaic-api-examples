import api from '../api';

interface ProjectUpdateData {
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
    apply_billing_type_and_rate_group_to_phases?: boolean;
    apply_rate_multiplier_to_phases?: boolean;
    billing_type?: 'employee' | 'activity' | 'role';
    rate_group_id?: number;
    rate_multiplier?: number;
}

async function updateProject(teamId: number, projectId: number, updateData: ProjectUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/project/${projectId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a project
const projectData: ProjectUpdateData = {
  portfolio_id: 123456,
  project_number: 1000,
  title: "Updated Example Project",
  description: "Updated example project description",
  client: "Updated Example Client",
  start_date: "2021-01-01",
  end_date: "2021-12-31",
  total: 50000,
  billable: true,
  phase_orders: ["12345", "67890"],
  apply_billing_type_and_rate_group_to_phases: true,
  apply_rate_multiplier_to_phases: false,
  billing_type: 'employee',
  rate_group_id: 789012,
  rate_multiplier: 1.0
};

updateProject(12345, 67890, projectData);
