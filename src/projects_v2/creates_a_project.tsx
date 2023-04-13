import api from '../api';

interface ProjectData {
    portfolio_id: number;
    title: string;
    description?: string;
    project_number?: number;
    client?: string;
    start_date?: string;
    end_date?: string;
    total?: number;
    billable?: boolean;
}

async function createProject(teamId: number, postData: ProjectData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/project`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a project
const projectData: ProjectData = {
    portfolio_id: 67890,
    title: "Example Project",
    description: "Example project description",
    project_number: 1000,
    client: "Example Client",
    start_date: "2020-01-01",
    end_date: "2020-12-31",
    total: 100000,
    billable: true
};

createProject(12345, projectData);
