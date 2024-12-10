import api from "../api";

interface DeleteOption {
  force_destroy?: boolean;
}

const destroyOption: DeleteOption = {
  force_destroy: true,
};

async function deleteActivityPhase(
  teamId: number,
  activityPhaseId: number,
  deleteOption: DeleteOption = {}
): Promise<void> {
  try {
    const response = await api.request({
      method: "DELETE",
      url: `/api/${teamId}/activity_phase/${activityPhaseId}`,
      data: deleteOption,
    });
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting an activity phase by its ID
deleteActivityPhase(12345, 67890);

// Example usage for force destroying an activity phase and all time entries associated with it
deleteActivityPhase(12345, 67890, destroyOption);
