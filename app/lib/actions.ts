"use server"

import { createClient } from "@/utils/supabase/server"
import {auth} from '@clerk/nextjs/server'
import { redirect } from "next/navigation"


export async function addGeneralDetails(data: any) {
    let redirectPath = null
    const supabase = await createClient()
    const { userId, redirectToSignIn } = await auth()

    if (!userId) return redirectToSignIn()

    try{
        await supabase.from('members').insert([{...data, user_id: userId}])
        redirectPath = '/forms/educational-details'
    } catch (error) {
        redirectPath = '/'
        console.log('error', error)
    }
    redirect(redirectPath)
}

export async function addEducationalDetails(data: any) {
    let redirectPath = null
    const supabase = await createClient()
    const { userId, redirectToSignIn } = await auth()

    if (!userId) return redirectToSignIn()

    try{
        await supabase.from('members').update(data).eq('user_id', userId)
        redirectPath = '/forms/undergraduate-details'
    } catch (error) {
        redirectPath = '/'
        console.log('error', error)
    }
    redirect(redirectPath)
}

export async function addUndergraduateDetails(data: any) {
    let redirectPath = null
    const supabase = await createClient()
    const { userId, redirectToSignIn } = await auth()

    if (!userId) return redirectToSignIn()

    try{
        await supabase.from('members').update({...data}).eq('user_id', userId)
        redirectPath = '/forms/skills-details'
    } catch (error) {
        redirectPath = '/'
        console.log('error', error)
    }
    redirect(redirectPath)
}

export async function addSkillsDetails(data: any) {
    let redirectPath = null
    const supabase = await createClient()
    const { userId, redirectToSignIn } = await auth()

    if (!userId) return redirectToSignIn()

    try{
        await supabase.from('members').update({...data}).eq('user_id', userId)
        redirectPath = '/forms/contact-details'
    } catch (error) {
        redirectPath = '/'
        console.log('error', error)
    }
    redirect(redirectPath)
}

export async function addContactDetails(data: any) {
    let redirectPath = null
    const supabase = await createClient()
    const { userId, redirectToSignIn } = await auth()

    if (!userId) return redirectToSignIn()

    try{
        await supabase.from('members').update({...data}).eq('user_id', userId)
        redirectPath = '/forms/found-us'
    } catch (error) {
        redirectPath = '/'
        console.log('error', error)
    }
    redirect(redirectPath)
}

export async function addFoundUsDetails(data: any) {
    let redirectPath = null
    const supabase = await createClient()
    const { userId, redirectToSignIn, getToken } = await auth()

    if (!userId) return redirectToSignIn()
    const token = await getToken()

    try{
        // get the user profile image url from the clerk using it's backend apis
        const response = await fetch('https://api.clerk.dev/v1/users/'+userId, {
            headers: {
                'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY || ''}`
            }
        })
        const userData = await response.json()
        const profile_image_url = userData.profile_image_url
        await supabase.from('members').update({...data, profile_image: profile_image_url}).eq('user_id', userId)
    }
    catch (error) {
        console.log('error', error)
    }
    try{
        await supabase.from('members').update({...data}).eq('user_id', userId)
        redirectPath = '/dashboard'
    } catch (error) {
        redirectPath = '/'
        console.log('error', error)
    }
    redirect(redirectPath)
}

export async function clickOnLetsGo() {
    let redirectPath = null
    const { userId, redirectToSignIn } = await auth()

    if (!userId) return redirectToSignIn()

    redirectPath = '/dashboard'
    redirect(redirectPath)
}