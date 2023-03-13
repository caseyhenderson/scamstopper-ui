import React from "react";
import { Grid } from '@mui/material';
import { useState } from "react"
import storage from "../firebase"
import {ref, uploadBytesResumable, getDownloadURL 
  } from "firebase/storage";



import ScamstopperWidget from "../components/ScamstopperWidget";

export default function Upload()
{
  const [fileUrl, setFileUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFileUrl(downloadURL)
        });
      }
    );
  }


  return (
    <div className="Upload">
      <Grid>
        <ScamstopperWidget/>
        <h1>Upload the text of your suspicious email or message to Scamstopper!</h1>
      <form onSubmit={handleSubmit} className='form'>
        <input type='file' />
        <button type='submit'>Upload to Scamstopper</button>
      </form>
      {
        !fileUrl &&
        <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
      }
      {
        fileUrl &&
        <img src={fileUrl} alt='uploaded file' height={200} />
      }
      </Grid>

    </div>
  );

}

// upload (to Firebase)
// analyse (in cloud)
// return 