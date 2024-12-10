import api from '../api';

interface MemberUpdateData {
    member_id: number;
    email?: string;
    first_name?: string;
    last_name?: string;
}

async function updateMember(teamId: number, updateData: MemberUpdateData): Promise<void> {
  try {
    const response = await api.put(`/api/${teamId}/employee`, updateData);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// Example usage of updating an employee
const memberData: MemberUpdateData = {
    member_id: 123,
    email: "updateEmployee@mosaicapp.com",
    first_name: "Update",
    last_name: "Employee",
};

updateMember(12345, memberData);
