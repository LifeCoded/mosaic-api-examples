import api from '../api';

interface PTOUpdateData {
    name?: string;
    hours?: number;
    is_accrued?: boolean;
}

async function updatePTO(teamId: number, ptoId: number, updateData: PTOUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/pto/${ptoId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a PTO policy using a PTO ID
const ptoData: PTOUpdateData = {
    name: "New PTO Policy Name",
    hours: 30,
    is_accrued: true
};

updatePTO(12345, 67890, ptoData);
