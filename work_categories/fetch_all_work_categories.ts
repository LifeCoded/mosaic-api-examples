import api from '../api';

async function fetchAllWorkCategories(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/standard_work_category`);
    const data = response.data as { standard_work_categories: any[] };
    const workCategories = data.standard_work_categories;
    const totalCount = workCategories && workCategories.length ? workCategories.length : 0;
    console.log(workCategories);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of fetching all work categories
fetchAllWorkCategories(12345);
