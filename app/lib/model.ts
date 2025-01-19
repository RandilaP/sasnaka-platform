export interface GeneralDetails {
    name: string,
    fname: string,
    lname: string,
    dob: string,
    gender: string,
    nic: string,
    language: string,
    address: string,
    district: string,
    city: string,
    phone: string,
    email: string,
}

export interface EducationalDetails{
    school: string,
    al_year: string,
    stream: string,
    shy: string,
    index_number: string,
    status: string,
    other_qualification: string
}

export interface UndergraduateDetails{
    university: string,
    faculty: string,
    degree: string,
    academic_year: string,
}

export interface SkillDetails{
    rate_leadership: string,
    leadership_experience: string,
    aesthetic_skills: string[],
    computer_skills: string[],
    media_skills: string[],
    acheivements: string,
    interested_areas: string
}

export interface GuardianDetails{
    guardian_name: string,
    guardian_occupation: string,
    guardian_number: string
}

export interface FoundUsDetails{
    new_member: string,
    about_us: string[]
}

export interface VolunteerData{
    id: number,
    name: string,
    fname: string,
    lname: string,
    dob: string,
    gender: string,
    nic: string,
    language: string,
    address: string,
    district: string,
    city: string,
    phone: string,
    email: string,
    school: string,
    al_year: string,
    stream: string,
    shy: string,
    index_number: string,
    status: string,
    other_qualification: string,
    university: string,
    faculty: string,
    degree: string,
    academic_year: string,
    rate_leadership: string,
    leadership_experience: string,
    aesthetic_skills: string[],
    computer_skills: string[],
    media_skills: string[],
    acheivements: string,
    interested_areas: string,
    guardian_name: string,
    guardian_occupation: string,
    guardian_number: string,
    new_member: string,
    about_us: string[]
    profile_image: string,
    
}