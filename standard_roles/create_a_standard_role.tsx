import api from "../api";

interface StandardRoleParams {
  name: string;
  description?: string;
}

async function createStandardRole(
  teamId: number,
  postData: StandardRoleParams
): Promise<void> {
  try {
    const response = await api.post(`/api/${teamId}/role`, postData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of creating a standard role named "Team Manager"
const StandardRoleParams: StandardRoleParams = {
  description: "Manage a team",
  name: "Team Manager"
};

createStandardRole(12345, StandardRoleParams);
