import api from "../api";

async function deleteBillRate(
  teamId: number,
  billRateId: number
): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/bill_rate/${billRateId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a bill rate by its bill rate ID
deleteBillRate(12345, 67890);
