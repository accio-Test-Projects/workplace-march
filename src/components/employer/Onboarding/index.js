import React, { useContext } from "react";
import { Grid, TextField } from "@mui/material";
import "./onboarding.css";
import Dropdown from "../../common/dropdown";
import FileUpload from "../../common/FileUpload";
import {  industryType, companySize } from "../../../content";
import { UserContext } from "../../../context/userContext";
function CandidateOnboarding() {
  const [userData, dispatch] = useContext(UserContext);

  // company name
  // pnone
  //industry_type
  //  company_size
  //employer_email
  //name
  //role
  //location
  //website
  //company_tag
  //company_bio
  //company_logo
  const [userInformation, setUserInformation] = React.useState({
    name: userData.user.displayName,
    employer_email: userData.user.email,
    phone: "",
    location: "",
    industry_type: "",
    company_size: "",
    role: "",
    website: "",
    company_name: "",
    company_tag: "",
    company_bio: "",
    company_logo: "",
  });
  const handleSkills = (data, type) => {
    if (type === "delete") {
      let new_data = userInformation.skills.filter((skill) => skill !== data);
      setUserInformation({ ...userInformation, skills: new_data });
    } else {
      if (userInformation.skills.find((skill) => skill === data)) {
      } else {
        let new_data = [...userInformation.skills, data];
        setUserInformation({ ...userInformation, skills: new_data });
      }
    }
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(userInformation);
  };
  return (
    <form onSubmit={(e) => submit(e)}>
      <Grid container spacing={2} className="onboarding-container">
        <Grid item xs={12}>
          <h1>ONBOARDING EMPLOYER</h1>
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label"> Company Name</label>
          <TextField
            required
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.company_name}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                company_name: e.target.value,
              })
            }
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <label className="onboarding-label">phone</label>
          <TextField
            required
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.phone}
            onChange={(e) =>
              setUserInformation({ ...userInformation, phone: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label">Industry Type</label>

          <Dropdown
            required={true}
            options={industryType}
            onChange={(data) =>
              setUserInformation({ ...userInformation, industry_type: data })
            }
            value={userInformation.industry_type}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label">Company Size</label>

          <Dropdown
            required={true}
            options={companySize}
            onChange={(data) =>
              setUserInformation({ ...userInformation, company_size: data })
            }
            value={userInformation.company_size}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label">Email</label>
          <TextField
            required
            disabled
            id="outlined-basic"
            variant="outlined"
            fullWidth
            type={"email"}
            size="small"
            value={userInformation.employer_email}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                employer_email: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label"> Name</label>
          <TextField
            required
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.name}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                name: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label"> Role</label>
          <TextField
            required
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.role}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                role: e.target.value,
              })
            }
          />
        </Grid>
  <Grid item xs={12} md={6}>
          <label className="onboarding-label">location</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.location}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                location: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label">website</label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            type={"url"}
            size="small"
            value={userInformation.website}
            onChange={(e) =>
              setUserInformation({
                ...userInformation,
                website: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label className="onboarding-label">
          Company tagline
          </label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.company_tag}
            onChange={(e) =>
              setUserInformation({ ...userInformation, company_tag: e.target.value })
            }
          />
        </Grid>
      
        <Grid item xs={12} >
          <label className="onboarding-label">bio</label>
          <TextField
            multiline
            minRows={4}
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="small"
            value={userInformation.company_bio}
            onChange={(e) =>
              setUserInformation({ ...userInformation, company_bio: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FileUpload
            required={true}
            filetype="image"
            onUpload={(url) =>
              setUserInformation({ ...userInformation, company_logo: url })
            }
            value={userInformation.company_logo}
          />
        </Grid>
        <Grid item xs={12} className="submit-btn">
          <button type="submit">Complete Onboarding</button>
        </Grid>
      </Grid>
    </form>
  );
}

export default CandidateOnboarding;
