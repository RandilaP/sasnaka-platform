"use server";

import { createClient } from "@/utils/supabase/server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  GeneralDetails,
  EducationalDetails,
  UndergraduateDetails,
  SkillDetails,
  GuardianDetails,
  FoundUsDetails,
} from "./model";

export async function addGeneralDetails(data: GeneralDetails) {
  let redirectPath = null;
  const supabase = await createClient();
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  try {
    const { data: memberData, error } = await supabase
      .from("members")
      .select("id")
      .eq("user_id", userId)
      .maybeSingle();

    if (error) {
      console.error("Error checking userId:", error);
      return false;
    }

    if (!memberData) {
      await supabase.from("members").insert([{ ...data, user_id: userId }]);
      redirectPath = "/forms/educational-details";
    } else {
      await supabase.from("members").update(data).eq("user_id", userId);
      redirectPath = "/forms/educational-details";
    }
  } catch (error) {
    redirectPath = "/";
    console.log("error", error);
  }
  redirect(redirectPath);
}

export async function addEducationalDetails(data: EducationalDetails) {
  let redirectPath = null;
  const supabase = await createClient();
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  try {
    await supabase.from("members").update(data).eq("user_id", userId);
    redirectPath = "/forms/undergraduate-details";
  } catch (error) {
    redirectPath = "/";
    console.log("error", error);
  }
  redirect(redirectPath);
}

export async function addUndergraduateDetails(data: UndergraduateDetails) {
  let redirectPath = null;
  const supabase = await createClient();
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  try {
    await supabase
      .from("members")
      .update({ ...data })
      .eq("user_id", userId);
    redirectPath = "/forms/skills-details";
  } catch (error) {
    redirectPath = "/";
    console.log("error", error);
  }
  redirect(redirectPath);
}

export async function addSkillsDetails(data: SkillDetails) {
  let redirectPath = null;
  const supabase = await createClient();
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  try {
    await supabase
      .from("members")
      .update({ ...data })
      .eq("user_id", userId);
    redirectPath = "/forms/contact-details";
  } catch (error) {
    redirectPath = "/";
    console.log("error", error);
  }
  redirect(redirectPath);
}

export async function addContactDetails(data: GuardianDetails) {
  let redirectPath = null;
  const supabase = await createClient();
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  try {
    await supabase
      .from("members")
      .update({ ...data })
      .eq("user_id", userId);
    redirectPath = "/forms/found-us";
  } catch (error) {
    redirectPath = "/";
    console.log("error", error);
  }
  redirect(redirectPath);
}

export async function addFoundUsDetails(data: FoundUsDetails) {
  let redirectPath = null;
  const supabase = await createClient();
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  try {
    // get the user profile image url from the clerk using it's backend apis
    const response = await fetch("https://api.clerk.dev/v1/users/" + userId, {
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY || ""}`,
      },
    });
    const userData = await response.json();
    const profile_image_url = userData.profile_image_url;
    await supabase
      .from("members")
      .update({ ...data, profile_image: profile_image_url })
      .eq("user_id", userId);
  } catch (error) {
    console.log("error", error);
  }
  try {
    await supabase
      .from("members")
      .update({ ...data, application: "pending" })
      .eq("user_id", userId);
    redirectPath = "/dashboard";
  } catch (error) {
    redirectPath = "/";
    console.log("error", error);
  }
  redirect(redirectPath);
}

export async function clickOnLetsGo() {
    const { userId, redirectToSignIn } = await auth();
    const supabase = await createClient();
    if (!userId) return { redirectPath: redirectToSignIn() };
  
    try {
      const { data: memberData } = await supabase
        .from("members")
        .select("id")
        .eq("user_id", userId)
        .maybeSingle();
  
      if (!memberData) {
        return { redirectPath: "/forms/genaral-details" };
      } else {
        return { redirectPath: "/dashboard" };
      }
    } catch (error) {
      console.log("error", error);
    }
  }