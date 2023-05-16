import api from '../api';

interface WorkCategoryUpdateData {
    require_title?: boolean;
    title?: string;
    archived?: boolean;
    billable?: boolean;
}

async function updateWorkCategory(teamId: number, workCategoryId: number, updateData: WorkCategoryUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/time_entry/${workCategoryId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a work category
const timeEntryData: WorkCategoryUpdateData = {
    require_title: true,
    title: "Updated Work Category",
    archived: false,
    billable: true
};

updateWorkCategory(12345, 123456, timeEntryData);
