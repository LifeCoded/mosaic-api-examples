import api from '../api';

interface CostRate {
  active_rate_type: string; // e.g., "annual"
  actual_hourly_rate: number;
  annual_rate: string; // Represents a stringified number
  description: string;
  discarded: boolean;
  end_date: string | null; // Can be null or a date string
  hourly_rate: string; // Represents a stringified number
  hours_per_year: number;
  id: number;
  member_id: number;
  overhead_factor: number;
  start_date: string; // Date in string format
  team_membership_id: number;
}

async function fetchAllCostRates(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/cost_rate`);
    const costRates = (response.data as { salaries: CostRate[] }).salaries;
    const totalCount = costRates ? costRates.length : 0;
    console.log(costRates);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all cost rates under a team
fetchAllCostRates(12345);
