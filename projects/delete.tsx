export { };

interface ProjectDelete {
  force_destroy?: boolean;
  force_archive?: boolean;
}

async function deleteProject(projectId: number, deleteOptions: ProjectDelete = {}): Promise<void> {
  const url = new URL(`/api/destroy/${projectId}`, 'https://example.com');

  const formData = new FormData();

  Object.keys(deleteOptions).forEach((key) => {
    if (deleteOptions[key]) {
      formData.append(key, deleteOptions[key].toString());
    }
  });

  const response = await fetch(url.toString(), {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to delete project: ${response.status} ${response.statusText}`);
  }
}

await deleteProject(123);

await deleteProject(123, { force_destroy: true });

await deleteProject(123, { force_archive: true });
