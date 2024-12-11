import api from '../api';

async function deleteProjectScope(
  teamId: number,
  scopeId: number,
): Promise<void> {
  try {
    const response = await api.delete(`/api/${teamId}/scope/${scopeId}`);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for deleting a project scope
deleteProjectScope(12345, 67890);

// Example usage for deleting a project scope with metadata
deleteProjectScope(12345, 67890);