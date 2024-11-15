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
  budget_activity_phase_by?:
    | "total hours"
    | "member estimates"
    | "spent and planned";
  budget_fixed_fee_with?:
    | "activity_phase_estimate"
    | "member_estimates"
    | "spent_and_planned"
    | "phase_estimate_percentage";
  budget_hourly_with?:
    | "activity_phase_estimate"
    | "member_estimates"
    | "spent_and_planned"
    | "phase_estimate_percentage";
  budget_internal_with?:
    | "activity_phase_estimate"
    | "member_estimates"
    | "spent_and_planned"
    | "phase_estimate_percentage";
  api_request_metadata?: object;
}

async function updateActivityPhase(
  teamId: number,
  activityPhaseId: number,
  updateData: ActivityPhaseUpdateData
): Promise<void> {
  const postData = {
    ...updateData,
    api_request_metadata: updateData.api_request_metadata || {},
  };

  try {
    const response = await api.put(
      `/api/${teamId}/activity_phase/${activityPhaseId}`,
      postData
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

// Example usage of updating an activity phase with additional metadata
const activityPhaseDataWithMetadata: ActivityPhaseUpdateData = {
  fee_type: "Fixed Fee",
  total: 100000,
  estimated_cost: 75000,
  estimated_hours: 2000,
  budget_activity_phase_by: "total hours",
  budget_fixed_fee_with: "phase_estimate_percentage",
  api_request_metadata: {
    custom_field_1: "value1",
    custom_field_2: "value2",
  },
};

updateActivityPhase(12345, 67890, activityPhaseDataWithMetadata);
