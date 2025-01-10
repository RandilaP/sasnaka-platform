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
        redirectPath = '/forms/employment-details'
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
        redirectPath = '/forms/employment-details'
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
        redirectPath = '/forms/employment-details'
    } catch (error) {
        redirectPath = '/'
        console.log('error', error)
    }
    redirect(redirectPath)
}

export async function addFoundUsDetails(data: any) {
    let redirectPath = null
    const supabase = await createClient()
    const { userId, redirectToSignIn } = await auth()

    if (!userId) return redirectToSignIn()

    try{
        await supabase.from('members').update({...data}).eq('user_id', userId)
        redirectPath = '/forms/employment-details'
    } catch (error) {
        redirectPath = '/'
        console.log('error', error)
    }
    redirect(redirectPath)
}