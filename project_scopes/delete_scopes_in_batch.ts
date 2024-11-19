import api from '../api';

interface DeleteBatchScopesParams {
  scope_ids: number[];
}

async function deleteBatchScopes(team_id: number, data: DeleteBatchScopesParams): Promise<void> {
  try {
    const response = await api.request({
        method: 'DELETE',
        url: `/api/${team_id}/batch_destroy_scopes`,
        data: data,
    });
    console.log('Batch scopes deleted successfully:', response.data);
  } catch (error) {
    console.error('Error deleting batch scopes:', error);
  }
}

// Example usage for deleting a batch of project scopes
const deleteBatchScopesParams: DeleteBatchScopesParams = {
  scope_ids: [1, 2, 3, 4, 5],
};
deleteBatchScopes(12345, deleteBatchScopesParams);