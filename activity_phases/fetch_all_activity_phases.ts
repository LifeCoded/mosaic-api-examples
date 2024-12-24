import qs from "qs";
import api from "../api";

interface ActivityPhaseQueryParams {
  project_ids?: number[];
  phase_ids?: number[];
  activity_phase_ids?: number[];
  start_date?: string;
  end_date?: string;
  archived_before_date?: string;
  archived_after_date?: string;
  all?: boolean;
  limit?: number;
  offset?: number;
}

async function fetchAllActivityPhases(
  teamId: number,
  queryParams: ActivityPhaseQueryParams
): Promise<void> {
  try {
    const queryString = qs.stringify(queryParams, { addQueryPrefix: true, arrayFormat: "brackets" });
    const response = await api.get(
      `/api/${teamId}/activity_phase${queryString}`
    );
    const activityPhases = (response.data as { activity_phase: any[] })
      .activity_phase;
    const totalCount =
      activityPhases && activityPhases.length ? activityPhases.length : 0;
    console.log(activityPhases);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all activity phases
fetchAllActivityPhases(12345, { all: true });

// Example usage for fetching the first 10 activity phases after skipping the first 5
fetchAllActivityPhases(12345, { limit: 10, offset: 5 });

// Example usage for fetching the activity phases between 2022-01-01 and 2022-12-31
fetchAllActivityPhases(12345, {
  start_date: "2022-01-01",
  end_date: "2022-12-31",
});
