import React from "react";
import { Grid, TextField } from "@mui/material";
import './onboarding.css'
import SearchDropDown from '../../common/SearchDropDown'
import Dropdown from '../../common/dropdown'
import FileUpload from '../../common/FileUpload'
import {skills,experience,primaryRole} from '../../../content'
function CandidateOnboarding() {
  //name
  //email
  //phone
  // location
  // skills
  //primary role
  //linkedIn
  //experience
  //bio
  //resume
const [userInformation, setUserInformation] = React.useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    skills: [],//
    primaryRole: "",
    linkedIn: "",
    experience: "",
    bio: "",
    resume: "",
})
const handleSkills = (data,type) => {
  if(type === "delete"){
    let new_data= userInformation.skills.filter((skill) => skill !== data)
    setUserInformation({ ...userInformation, skills: new_data });
  }
  else{
  if(
    userInformation.skills.find((skill) => skill === data)
  ){}
  else{
  let new_data= [...userInformation.skills, data]
    setUserInformation({ ...userInformation, skills: new_data });
  }
}
}
const submit = (e) => {
  e.preventDefault()
  console.log(userInformation)
}
  return (
    <form onSubmit={(e)=>submit(e)} >
    <Grid container
    spacing={2}
    className="onboarding-container"
    >
       <Grid item xs={12}>
        <h1>
         ONBOARDING CANDIDATE
        </h1>
       </Grid>
      <Grid item xs={12} md={6} >
        <label
        className="onboarding-label"
        >
          Name
        </label>
        <TextField
        required
          id="outlined-basic"
          variant="outlined"
          fullWidth
          size="small"
          value={userInformation.name}
          onChange={(e) => setUserInformation({ ...userInformation, name: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6} >
        <label
        className="onboarding-label"
        >
          Email
        </label>
        <TextField
        required
          id="outlined-basic"
          variant="outlined"
          fullWidth
          type={"email"}
          size="small"
          value={userInformation.email}
          onChange={(e) => setUserInformation({ ...userInformation, email: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6} >
        <label
        className="onboarding-label"
        >
          phone
        </label>
        <TextField
        required
          id="outlined-basic"
          variant="outlined"
          fullWidth
          size="small"
          value={userInformation.phone}
          onChange={(e) => setUserInformation({ ...userInformation, phone: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6} >
        <label
        className="onboarding-label"
        >
          location
        </label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          size="small"
          value={userInformation.location}
          onChange={(e) => setUserInformation({ ...userInformation, location: e.target.value })}
        />
      </Grid>

      <Grid item xs={12} md={6} >
        <label
        className="onboarding-label"
        >
          primaryRole
        </label>
        
        <Dropdown
        required={true}
        options={primaryRole}
        onChange={(data)=>setUserInformation({ ...userInformation, primaryRole: data })}
        value={userInformation.primaryRole}
        />
      </Grid>
      <Grid item xs={12} md={6} >
        <label
        className="onboarding-label"
        >
          linkedIn
        </label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          type={"url"}
          size="small"
          value={userInformation.linkedIn}
          onChange={(e) => setUserInformation({ ...userInformation, linkedIn: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6} >
        <label
        className="onboarding-label"
        >
          experience
        </label>
        <Dropdown
        required={true}
        options={experience}
        onChange={(data)=>setUserInformation({ ...userInformation, experience: data })}
        value={userInformation.experience}
        />
      </Grid>
      <Grid item xs={12} md={6} >
        <label
        className="onboarding-label"
        >
          bio
        </label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          size="small"
          value={userInformation.bio}
          onChange={(e) => setUserInformation({ ...userInformation, bio: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6} >
        <label
        className="onboarding-label"
        >
          skills
        </label>
        <SearchDropDown
        
        required={true}
        options={skills} 
        onChange={(data)=>handleSkills(data,'add')}
         values={userInformation.skills}
         onDelete={(data)=>handleSkills(data,'delete')}
        />
      </Grid>
      <Grid item xs={12}>
       
       <FileUpload
       required={true}
       filetype='doc'
       onUpload={(url)=>setUserInformation({ ...userInformation, resume: url })}
       value={userInformation.resume}
       />  
      </Grid>
      <Grid item xs={12}
      className='submit-btn'
      >
        <button
        type="submit"
        >
          Complete Onboarding
        </button>
        </Grid>
    </Grid>
    </form>
  );
}

export default CandidateOnboarding;
