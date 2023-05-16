import api from "../api";

interface StandardRateUpdateParams {
  rate?: number; // required if description is not provided
  multiplier_low?: number;
  multiplier_high?: number;
  description?: string; //required if rate is not provided
  merge_rate_id?: number;
}

async function updateStandardRate(
  teamId: number,
  rateId: number,
  updateData: StandardRateUpdateParams
): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/rate/${rateId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a standard rate named Intern
const StandardRateUpdateParams: StandardRateUpdateParams = {
  description: "Intern",
  multiplier_high: 4,
  multiplier_low: 1,
  rate: 300,
};
updateStandardRate(12345, 67890, StandardRateUpdateParams);
