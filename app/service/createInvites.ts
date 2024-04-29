import supabase, { supabaseUrl } from "@/config/supabase";
interface Invite {
  full_name: string;
  email: string;
  phone_number: string;
  event_id: number;
  // Add other properties if present
}

export async function createEvent(newInvite: Invite) {
  let query: any = supabase.from("events");

  query = query.insert([{ ...newInvite }]);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
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

  if (attendees) {
    console.table(attendees);
  }
  return attendees;
}
