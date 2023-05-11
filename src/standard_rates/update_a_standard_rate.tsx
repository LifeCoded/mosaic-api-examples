import api from "../api";

interface StandardRateUpdateParams {
  rate: number;
  multiplier_low?: number;
  multiplier_high?: number;
  description: string;
  merge_rate_id: number;
}

async function updateCostRate(
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

// Example usage of updating a standard rate named Sales
const StandardRateUpdateParams: StandardRateUpdateParams = {
  description: "Sales",
  rate: 500,
  multiplier_high: 3,
  multiplier_low: 0.5,
  merge_rate_id: 100035,
};

updateCostRate(12345, 67890, StandardRateUpdateParams);
