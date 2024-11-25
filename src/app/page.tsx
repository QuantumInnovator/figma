import React from 'react'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Companies from './Components/Companies'
import Courses from './Components/Courses'

function page() {
  return (
    <div>
      <Navbar/>
      <Skills/>
      <Companies/>
      <Courses/>
    </div>
  )
}

export default page