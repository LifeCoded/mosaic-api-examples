import api from '../api';

// Define interfaces for nested structures
interface Location {
  address_1: string;
  address_2: string | null;
  address_3: string | null;
  city: string;
  country: string;
  created_at: string; // ISO-8601 formatted date
  full_address: string;
  id: number;
  is_manual_entry: boolean;
  state: string;
  team_id: number;
  team_membership_order: any[]; // Empty array, type unknown
  updated_at: string; // ISO-8601 formatted date
  zip: string;
}

interface OfficeEntity {
  created_at: string; // ISO-8601 formatted date
  entity_id: number;
  entity_type: string; // e.g., "ProjectMembership"
  id: number;
  office_id: number;
  team_id: number;
  updated_at: string; // ISO-8601 formatted date
}

interface TeamMembership {
  account_id: number;
  email: string;
  name: string;
  team_membership_id: number;
}

interface Office {
  id: number;
  location: Location;
  name: string;
  office_entities: OfficeEntity[];
  phase_membership_ids: any[]; // Empty array, type unknown
  team_id: number;
  team_membership_order: any[]; // Empty array, type unknown
  team_membership_count: number;
  team_memberships: TeamMembership[];
}

interface OfficeResponse {
  offices: Office[];
  offices_count: number;
}

async function fetchOffices(teamId: number): Promise<void> {
  try {
    const response = await api.get(`/api/${teamId}/offices`);
    const data = response.data as OfficeResponse;
    const offices = data.offices;
    const totalCount = data.offices_count;
    console.log(offices);
    console.log(totalCount);
  } catch (error) {
    console.error(error);
  }
}

// Example usage for fetching all offices for a team
fetchOffices(12345);
