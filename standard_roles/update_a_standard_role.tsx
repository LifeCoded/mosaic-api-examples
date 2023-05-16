import api from "../api";

interface StandardRoleParams {
  name?: string;
  description?: string;
}

async function updateStandardRole(
    teamId: number,
    roleId: number,
    updateData: StandardRoleParams
): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/role/${roleId}`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating a standard role's name and description with ID 67890
const StandardRoleParams: StandardRoleParams = {
  description: "Collect, measure, and analyze data",
  name: "Analytics Developer"
};

updateStandardRole(12345, 67890, StandardRoleParams);
