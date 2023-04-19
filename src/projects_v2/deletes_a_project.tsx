import api from '../api';

interface DeleteOption {
    force_destroy?: boolean;
    force_archive?: boolean;
}

const destroyOption = {
    force_destroy: true,
}

const archiveOption = {
    force_archive: true,
}

async function deleteProject(teamId: number, projectId: number, deleteOption: DeleteOption = {}): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/project${projectId}`, { data: deleteOption });
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a project by its project ID
deleteProject(12345, 67890);

// Example usage for force destroying a project by its project ID 
deleteProject(12345, 67890, destroyOption);

// Example usage for force archiving a project by its project ID
deleteProject(12345, 67890, archiveOption);
