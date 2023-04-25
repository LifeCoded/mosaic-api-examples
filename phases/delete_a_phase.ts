import api from '../api';

interface DeleteOption {
    project_id: number;
    force_destroy?: boolean;
    force_archive?: boolean;
}

const deleteOption = {
    project_id: 123456,
}

const destroyOption = {
    project_id: 123456,
    force_destroy: true,
}

const archiveOption = {
    project_id: 123456,
    force_archive: true,
}

async function deletePhase(teamId: number, phaseId: number, deleteOption: DeleteOption): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/phase/${phaseId}`, { data: deleteOption });
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a project by its project ID
deletePhase(12345, 67890, deleteOption);

// Example usage for force destroying a project by its project ID 
deletePhase(12345, 67891, destroyOption);

// Example usage for force archiving a project by its project ID
deletePhase(12345, 67892, archiveOption);