"use server";

import { createClient } from "@/utils/supabase/server";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function getVolunteerData() {
  const supabase = await createClient();
  const { userId } = await auth();
  return supabase.from("members").select("*").eq("user_id", userId);
}

export async function getVolunteersData() {
  const supabase = await createClient();
  return supabase.from("members").select("*");
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

export async function changeVolunteerStatus(id: number, status: string) {
    const supabase = await createClient();
    try {
        const response = await supabase.from("members").update({ application: status }).eq("id", id);
        revalidatePath('/volunteers/approval');
        return response;
    } catch (e) {
        console.log("error: ", e);
    }
}
