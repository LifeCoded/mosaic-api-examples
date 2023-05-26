import api from '../api';

interface OfficeUpdateData {
    name?: string;
}

async function updateOffice(teamId: number, officeId: number, updateData: OfficeUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/offices/${officeId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating an office
const officeData: OfficeUpdateData = {
    name: "New Office Name"
};

updateOffice(12345, 67890, officeData);
