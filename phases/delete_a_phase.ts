import api from '../api';

async function deletePhase(teamId: number, phaseId: number): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/phase/${phaseId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a project by its project ID
deletePhase(12345, 67890);

// Example usage for force destroying a project by its project ID 
deletePhase(12345, 67891);

// Example usage for force archiving a project by its project ID
deletePhase(12345, 67892);
