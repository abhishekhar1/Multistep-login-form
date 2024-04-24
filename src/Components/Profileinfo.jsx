import React from "react";
import {useNavigate} from 'react-router-dom'
const Profileinfo = () => {
    const nav=useNavigate();
    const submitprofileinfo=(e)=>{
            e.preventDefault();
            nav('/profileverify');
    }
  return (
    <>
      <div className="container w-3/4 mx-auto mt-14 text-xl">
        <h1 className="font-bold text-center mb-3">What Brings you here ?? </h1>
        <p className="text-center mb-3 text-yellow-900">
          Select the options that best describe you don't worry later on you
          will able to choose more.
        </p>
      </div>
<form onSubmit={submitprofileinfo}>
      <div class="grid grid-rows-1 grid-flow-col gap-4 w-3/4 mx-auto">
        <div class="bg-white">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">
              I'm am a Designers
            </h2>

            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div class="group relative">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 w-80">
                  <img
                    src="Images/web-design.png"
                    alt="desinger"
                    class="h-full w-full object-cover object-center lg:h-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <input
                        type="radio"
                        class="btn-check"
                        name="options"
                        id="option1"
                        autocomplete="off"
                        checked
                      />
                      <label class="btn btn-secondary" for="option1">
                      click
                      </label>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">
              I'm am a Developer
            </h2>

            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div class="group relative">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 w-80">
                  <img
                    src="Images/coding.png"
                    alt="coding"
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <input
                        type="radio"
                        class="btn-check"
                        name="options"
                        id="option1"
                        autocomplete="off"
                        checked
                      />
                      <label class="btn btn-secondary" for="option1">
                        click
                      </label>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">
              I'm am a Testing
            </h2>

            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div class="group relative">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 w-80">
                  <img
                    src="Images/search.png"
                    alt="searchpng"
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between ">
                  <div>
                    <h3 class="text-sm text-gray-700 ">
                      <input
                        type="radio"
                        class="btn-check"
                        name="options"
                        id="option1"
                        autocomplete="off"
                        checked
                      />
                      <label class="btn btn-secondary" for="option1">
                      click
                      </label>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
       
      </div>
      <div className="container text-center infobtn">
      <button type="submit" className="text-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Finish </button>
      </div>
      </form>
    </>
  );
};

export default Profileinfo;
