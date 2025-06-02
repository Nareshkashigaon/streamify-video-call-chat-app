import React from "react";
import { ShipWheel } from "lucide-react";
import { Link } from "react-router-dom";

import useSignUp from "../hooks/useSignUp.js";

const SignUpPage = () => {
  const [signupData, setSignupData] = React.useState({
    fullName: "",
    email: "",
    password: "",
  });
  
 const {error,isPending,signUpMutation} =useSignUp();

  
  const handleSignup = (e) => {
    e.preventDefault();
    signUpMutation(signupData);
  };
  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:pd-6 md:p-8"
      data-theme="forest"
      >
    
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full  max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* signup form left side */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* logo */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <ShipWheel className="size-9 text-primary" />
            <span className="text-3xl font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Streamify
            </span>
          </div>
          {/* Error message */}
                {error && (
                  <div className="alert alert-error mb-4">
                  <span>{error.response.data.message}</span>
                  </div>
                )}
          <div className="w-full">
            <form onSubmit={handleSignup}>
              <div className="space-y-4">
                <div><h2 className="font-xl font-semibold">Create an Account</h2>
                <p className="text-sm opacity-70">
                  Join Streamify start your learning language adventure! 
                </p>
                </div>

                

                {/* {fullName} */}

                <div className="space-y-3">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">
                        Full Name
                      </span>
                    </label>
                    <input type="text" placeholder="ex: Naresh Kashigaon" 
                    className="input input-bordered w-full" 
                    value={signupData.fullName}
                    onChange={(e)=>setSignupData({...signupData,fullName:e.target.value})}/>
                  </div>

                  {/* Email Input */}

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">
                        Email
                      </span>
                    </label>
                    <input type="email" placeholder="ex: naresh@gmail.com" 
                    className="input input-bordered w-full" 
                    value={signupData.email}
                    onChange={(e)=>setSignupData({...signupData,email:e.target.value})}/>
                  </div>

                  {/* Password Input */}

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">
                        password
                      </span>
                    </label>
                    <input type="password" placeholder="enter your password" 
                    className="input input-bordered w-full" 
                    value={signupData.password}
                    onChange={(e)=>setSignupData({...signupData,password:e.target.value})}/>
                    <p className="text-xs opacity-70 mt-1">password at least must be 6 characters</p>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input type="checkbox" className="checkbox checkbox-sm" required />
                      <span className="text-xs leading-tight">
                        I agree to the{" "}
                        <span className="text-primary hover:underline">terms of services </span>
                        <span className="text-primary hover:underline">privacy policy</span>

                      </span>
                    </label>
                    
                  </div>
                </div>
                <button type="submit" onClick={handleSignup} className="btn btn-primary w-full" >
                  {isPending?
                  (<>
                  <span className="loading loading-spinner loading-xs"></span>
                  loading...</>)
                  :("Create Account")}
                  </button>
                <div className="text-center mt-4">
                  <p className="text-sm">
                    already have an account?{" "}
                    <Link to="/login" className="text-primary hover:underline">
                    Sign in</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>          
        </div>

        {/* SIGNUP FORM - RIGHT SIDE */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <img src="/i.png" alt="Language connection illustration" className="w-full h-full" />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">Connect with language partners worldwide</h2>
              <p className="opacity-70">
                Practice conversations, make friends, and improve your language skills together
              </p>
            </div>
          </div>
      </div>
    </div>

    </div>
  );
};

export default SignUpPage;