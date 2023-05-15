import api from '../api';

interface WorkCategoryData {
    require_title?: boolean;
    title: string;
    archived?: boolean;
    billable?: boolean;
}

async function createWorkCategory(teamId: number, postData: WorkCategoryData): Promise<void> {
    try {
        const response = await api.post(`/api/${teamId}/work_category`, postData);
        console.log(response.status);
    } catch (error) {
        console.error(error);
    }
}

// Example usage of creating a new billable work category
const workCategoryData: WorkCategoryData = {
    require_title: true,
    title: "New Work Category",
    archived: false,
    billable: true
};
createWorkCategory(11111, workCategoryData);
