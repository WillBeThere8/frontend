import supabase, { supabaseUrl } from "@/config/supabase";
interface Invite {
  full_name: string;
  email: string;
  phone_number: string;
  event_id: number;
  plus_one: string;
  attending: boolean;
  // Add other properties if present
}

export async function createInvite(newInvite: Invite) {
  let query: any = supabase.from("attendees");

  query = query.insert([{ ...newInvite }]);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Event could not be created");
  }

  return { data, error };
}

export async function fetchAttendeesForEvent(eventId: number) {
  let { data: attendees, error } = await supabase
    .from("attendees")
    .select("*")
    .eq("event_id", eventId);

  if (error) {
    console.error("Error fetching attendees:", error.message);
    return null;
  }

  return attendees;
}

export async function fetchEventforAttendees(eventId: number) {
  let { data: events, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", eventId);

  return { events, error };
}
