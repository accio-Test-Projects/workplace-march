import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from '../components/Landingpage'
import Auth from '../components/Auth'
import CandidateJobs from '../components/candidate/Jobs'
import CandidateProfile from '../components/candidate/Profile'
import CandidateOnboarding from '../components/candidate/Onboarding'
import CandidateApplications from '../components/candidate/Applications'
import CandidateConversation from '../components/candidate/Conversation'

import EmployerJobs from '../components/employer/Jobs'
import EmployerProfile from '../components/employer/Profile'
import EmployerOnboarding from '../components/employer/Onboarding'
import EmployerApplicants from '../components/employer/Applicants'
import EmployerConversation from '../components/employer/Conversation'

function Navs() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Landingpage/>}/>
    <Route path='/employer/auth' element={<Auth usertype={'employer'} />}/>
    <Route path='/candidate/auth' element={<Auth usertype={'candidate'}  />}/>

    <Route path='/candidate/jobs' element={<CandidateJobs/>}/>
    <Route path='/candidate/profile' element={<CandidateProfile/>}/>
    <Route path='/candidate/onboarding' element={<CandidateOnboarding/>}/>
    <Route path='/candidate/applications' element={<CandidateApplications/>}/>
    <Route path='/candidate/conversation' element={<CandidateConversation/>}/>

    <Route path='/employer/jobs' element={<EmployerJobs/>}/>
    <Route path='/employer/profile' element={<EmployerProfile/>}/>
    <Route path='/employer/onboarding' element={<EmployerOnboarding/>}/>
    <Route path='/employer/applicants' element={<EmployerApplicants/>}/>
    <Route path='/employer/conversation' element={<EmployerConversation/>}/>

   </Routes>
   
   </BrowserRouter>
  )
}
export default Navs

// 1. define Router Components 
// this will store mapping between URL and Component