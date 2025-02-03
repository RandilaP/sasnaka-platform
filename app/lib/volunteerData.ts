"use server";

import { createClient } from "@/utils/supabase/server";
import { auth } from "@clerk/nextjs/server";

export async function getVolunteerData() {
  const supabase = await createClient();
  const { userId } = await auth();
  return supabase.from("members").select("*").eq("user_id", userId);
}

export async function getVolunteersData(query: string, page: number, district: string) {
  const supabase = await createClient();
  if (district === "all") {
    return supabase.from("members").select("*").ilike("name", `%${query}%`).eq("application", "accepted");
  }else{
  return supabase.from("members").select("*").ilike("name", `%${query}%`).eq("application", "accepted").eq("district", district)
  }
}

export async function getPendingVolunteersData() {
  const supabase = await createClient();
  try {
    const response = supabase
      .from("members")
      .select("*")
      .eq("application", "pending");
    return response;
  } catch (e) {
    console.log("Error: ", e);
  }
}

export async function changeVolunteerTableStatus(status: string, id: number) {
  const supabase = await createClient();
  try {
    const response = await supabase
      .from("members")
      .update({ application: status })
      .eq("id", id);

    return response;
  } catch (e) {
    console.log("error: ", e);
  }
}

export async function changeVolunteerStatus(status: string) {
  const supabase = await createClient();
  const { userId } = await auth();
  try {
    const response = await supabase
      .from("members")
      .update({ application: status })
      .eq("user_id", userId);

    return response;
  } catch (e) {
    console.log("error: ", e);
  }
}

export async function getVolunteerStatus() {
  const supabase = await createClient();
  const { userId } = await auth();
  try {
    const response = supabase
      .from("members")
      .select("application")
      .eq("user_id", userId);
    return response;
  } catch (e) {
    console.log("error: ", e);
  }
}
