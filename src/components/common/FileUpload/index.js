import { TextField } from '@mui/material'
import React from 'react'
import pfgimg from '../../../assects/pfgimg.png'
function FileUpload({
  filetype,
  onUpload,
  value
}) {
  return (
    <div>
    <div>
       <label
        className="onboarding-label"
        >
          resume
        </label>
        
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          size="small"
          type={"file"}
        />
    </div>
    {
      filetype==='doc'&&value?(
        <div style={{margin: '20px'}}>
          <img src={pfgimg} width='100px' alt="pfgimg" />
        </div>
      ):filetype==='image'&&value?(
        <div>image</div>
      ):null
    }
    </div>
  )
}

export default FileUpload