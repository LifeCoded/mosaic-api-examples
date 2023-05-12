import api from '../api';

async function fetchAllWorkCategories(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/work_category`);
    const workCategories = response.data?.work_category;
    const totalCount = workCategories && workCategories.length ? workCategories.length : 0;
    console.log(workCategories);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of fetching all work categories
fetchAllWorkCategories(12345);
