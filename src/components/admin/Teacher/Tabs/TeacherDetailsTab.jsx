import React from 'react'
import PersonalInfo from '../PersonalInfo'
import RecentActivity from '../RecentActivity'

const TeacherDetailsTab = () => {
  return (
    <>
    <div className='flex mb-4 flex-col gap-4 md:flex-row font-primary'>
      <PersonalInfo />
      <RecentActivity />
    </div>
    </>
  )
}

export default TeacherDetailsTab
