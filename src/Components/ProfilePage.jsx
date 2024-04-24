import React from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {useNavigate} from 'react-router-dom'

export default function ProfilePage() {
  const navigate=useNavigate();
  const profilesubmit=(e)=>{
      e.preventDefault();
    navigate('/profileinfo')
  }
  return (
    <>
      <div className="container w-2/4 mx-auto mt-20">
        <form onSubmit={profilesubmit}>
        <div className="head mb-5">
          <h1 className="font-bold pheading">
            Welcome ! Let's create your profile
          </h1>
          <p className="text-red-900 text-lg">
            Lets other get to know you better. Connect with{" "}
            <span className="font-bold">WORLD.</span>
          </p>
        </div>
        <div className="container mb-5 font-bold text-xl">
          <h1>Add an avatar</h1>
          <div className="flex -space-x-2 overflow-hidden mt-3 gap-4">
            <img
              className="inline-block rounded-full ring-2 ring-white proimg"                
              alt=""
            />
            <AddAPhotoIcon/>
            <div className="prodiv mb-3">
            <input className="form-control rounded" type="file" id="formFile" required/>
          </div>
          </div>
        </div>
        <div className="container mt-2 prodiv1 mb-7">
          
          <h1 className="font-bold text-xl">Add your locations</h1>
          <input type="text" name="location" className="block flex-1 border-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter location" required/>
           <hr/>
        </div>
        <button type="submit" className="text-xl rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next</button>
        </form>
      </div>
    </>
  );
}
