import axios from 'axios';

interface ProjectData {
  portfolio_id: number;
  project_number?: number;
  title: string;
  description?: string;
  client?: string;
  start_date?: string;
  end_date?: string;
  total?: number;
  billable?: boolean;
}

async function createProject(projectData: ProjectData): Promise<void> {
  try {
    const response = await axios.post('/api/projects', projectData);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Example usage
const projectData: ProjectData = {
  portfolio_id: 1234,
  project_number: 5678,
  title: 'New Project',
  description: 'This is a new project',
  client: 'ACME Inc.',
  start_date: '2023-03-21',
  end_date: '2023-06-30',
  total: 10000,
  billable: true,
};

createProject(projectData);
