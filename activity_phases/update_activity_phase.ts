import api from "../api";

interface ActivityPhaseUpdateData {
  phase_id?: number;
  standard_work_category_id?: number;
  title?: string;
  fee_type?: "Fixed Fee" | "Hourly" | "Internal";
  billable?: boolean;
  is_custom?: boolean;
  total?: number;
  estimated_cost?: number;
  estimated_hours?: number;
  start_date?: string;
  end_date?: string;
  is_archived?: boolean;
  budget_activity_phase_by?: "total hours" | "member estimates" | "spent and planned";
  budget_fixed_fee_with?: "activity_phase_estimate" | "member_estimates" | "spent_and_planned" | "phase_estimate_percentage";
  budget_hourly_with?: "activity_phase_estimate" | "member_estimates" | "spent_and_planned" | "phase_estimate_percentage";
  budget_internal_with?: "activity_phase_estimate" | "member_estimates" | "spent_and_planned" | "phase_estimate_percentage";
}

async function updateActivityPhase(
  teamId: number,
  activityPhaseId: number,
  updateData: ActivityPhaseUpdateData
): Promise<void> {
  try {
    const response = await api.put(
      `/api/${teamId}/activity_phase/${activityPhaseId}`,
      updateData
    );
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating an activity phase without additional metadata
const activityPhaseData: ActivityPhaseUpdateData = {
  fee_type: "Hourly",
  estimated_cost: 4000,
  estimated_hours: 200,
  budget_activity_phase_by: "total hours",
  budget_hourly_with: "activity_phase_estimate",
};

updateActivityPhase(12345, 67890, activityPhaseData);
