import React from 'react'
import VolunteerApprovalTable from '../../ui/VolunteerApprovalTable'
import { getVolunteersData } from '@/app/lib/volunteerData'

function page() {
  
  return (
    <div className='h-screen w-screen flex justify-center'>
        <VolunteerApprovalTable />
    </div>
  )
}

export default page