import React from "react";

const Profileverify = () => {
  return (
    <>
      <div className="text-center items-center w-3/5 mx-auto mt-10 text-2xl mb-6">
        <h1 className="mb-3  font-bold">Please verify your email ......</h1>
        <div className="w-1/5 mx-auto mb-2">
          <img src="Images/email.png" alt="emial" className="h-52" />
        </div>
        <div>
          <p className="mb-3 text-slate-400">
            {" "}
            Please verify your email Address. We have sent the confimation to:{" "}
          </p>
          <p className="mb-3 font-bold"> accounts@gmail.com</p>
          <p className="mb-3 text-slate-400">
            Click on the confimation link in email to get started{" "}
          </p>
          <p className="mb-3 text-slate-400">
            Didn't Receive the email try again.
          </p>
        </div>
      </div>

      <footer className="bg-sky-100">
        <div class="grid grid-cols-4 gap-4 px-20">
          <div className="text-center">
              <span className="font-bold text-xl">For Designers</span>
              <ul>
                <li className="mb-3 mt-3">Go pro</li>
                <li className="mb-3">Explore the web</li>
                <li className="mb-3">Design blogs </li>
                <li className="mb-3"> Overtime Podcasts</li>
                <li className="mb-3">Play Offs </li> 
              </ul>
          </div>

          
          <div className="text-center">
              <span className="font-bold text-xl">Hire Designers </span>
              <ul>
                <li className="mb-3 mt-3">Post a job Opening</li>
                <li className="mb-3">Post a free lencer</li>
                <li className="mb-3">serach designer </li>
                
              </ul>
              <span className="font-bold text-xl">Brands </span>
              <ul>
                <li className="mb-3 mt-3">Advertise with us</li>               
              </ul>
          </div>
          <div className="text-center">
              <span className="font-bold text-xl">Company</span>
              <ul>
                <li className="mb-3 mt-3">About</li>
                <li className="mb-3">Career</li>
                <li className="mb-3">Support </li>
                <li className="mb-3">Media kit</li>
                <li className="mb-3">Testimonials</li>
                <li className="mb-3">Apis </li>
              </ul>
              
          </div>
          <div className="text-center">
              <span className="font-bold text-xl">Design Resource</span>
              <ul>
                <li className="mb-3 mt-3">Freelencing hiring</li>
                <li className="mb-3">Design Hiring</li>
                <li className="mb-3">Portfolio</li>
                <li className="mb-3">Design Education</li>
                <li className="mb-3">Creative process</li>
                <li className="mb-3">Design Industry Trends </li>
              </ul>
              
          </div>

        </div>
      </footer>
    </>
  );
};

export default Profileverify;
