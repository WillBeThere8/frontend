import supabase, { supabaseUrl } from "@/config/supabase";
interface Event {
  banner: any;
  name: string;
  date: string;
  time: string;
  // Add other properties if present
}

export async function createEvent(newEvent: Event) {
  const hasImagePath = newEvent.banner?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newEvent.banner?.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newEvent.banner
    : `${supabaseUrl}/storage/v1/object/public/will-be-there/${imageName}`;
  // https://csfwsqunbxbsrffsgkur.supabase.co/torage/v1/object/public/will-be-there/rear-view-programmer-working-all-night-long.jpg?t=2024-04-26T22%3A27%3A00.222Z
  let query: any = supabase.from("events");

  query = query.insert([{ ...newEvent, banner: imagePath }]);

  const { data, error } = await query.select().single();
  console.log(data);

  if (error) {
    console.log(error);
    throw new Error("Event could not be created");
  }
  // if (hasImagePath) return data;
  console.log("banner:", newEvent.banner);
  const { data: storageData, error: storageError } = await supabase.storage
    .from("will-be-there")
    .upload(imageName, newEvent.banner);

  //incase we need to update event
  if (storageData) {
    console.log("Uploaded images!!");
  }
  if (storageError) {
    console.log(storageError);
    // await supabase.from("cabins").delete().eq("id", data.id);
  }
  return { data, error };
}
