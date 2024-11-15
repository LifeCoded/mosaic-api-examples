import api from "../api";

interface DeleteOption {
  force_destroy?: boolean;
  api_request_metadata?: object;
}

const destroyOption: DeleteOption = {
  force_destroy: true,
  api_request_metadata: {},
};

async function deletActivityPhase(
  teamId: number,
  activityPhaseId: number,
  deleteOption: DeleteOption = {}
): Promise<void> {
  try {
    const response = await api.delete(
      `/api/${teamId}/activity_phase/${activityPhaseId}`,
      { data: deleteOption }
    );
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting an activity phase by its ID
deletActivityPhase(12345, 67890);

// Example usage for force destroying an activity phase and all time entries associated with it
deletActivityPhase(12345, 67890, destroyOption);
