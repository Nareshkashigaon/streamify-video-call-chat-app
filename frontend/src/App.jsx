import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import CallPage from "./pages/CallPage";
import OnBoardingPage from "./pages/OnBoardingPage";
import NotificationsPage from "./pages/NotificationsPage";
import HomePage from "./pages/HomePage";
import  { Toaster } from "react-hot-toast";
import PageLoader from "./components/PageLoader.jsx";
import useAuthUser from "./hooks/useAuthUser.js";
import Layout from "./components/Layout.jsx";
import { useThemeStore } from "./store/useThemeStore.js";

export const App=()=> {
  // tanstack query
  const {isLoading,authUser}=useAuthUser();

  // console.log("authUser : ",authUser);

  const isAuthenticated = Boolean(authUser); // Check if authUser is not null or undefined
  // console.log("isAuthenticated : ",isAuthenticated);

  const isOnboarded = authUser?.isOnBoarded; // Check if onboarding is completed
  // console.log("isOnboarded : ",isOnboarded);

// console.log("authUser : ",authUser);
// console.log("data :",{authData},"loadingState :",{isLoading},"error",{error});

// zustand store can be used to manage global state, but here we are using local state

const {theme}=useThemeStore();

if(isLoading) return <PageLoader />;

  return (
   
    <div className="h-screen text-5xl"  data-theme={theme}>
      <Routes>
        <Route path="/" element={isAuthenticated && isOnboarded ?(<Layout showSidebar={true}><HomePage /></Layout> ): <Navigate to={!isAuthenticated?"/login":"/onboarding"  }/>} />
        <Route path="/signup" element={!isAuthenticated ?<SignUpPage />:<Navigate to={isOnboarded?"/":"/onboarding"  } />} />
        <Route path="/login" element={!isAuthenticated?<LoginPage />:<Navigate to={isOnboarded?"/":"/onboarding"  } />} />
        
        <Route path="/notifications" element={isAuthenticated && isOnboarded ?(<Layout showSidebar={true}><NotificationsPage /></Layout>):<Navigate to={!isAuthenticated ? "/login": "/onboarding"  } />} />
        <Route path="/chat/:id" element={isAuthenticated && isOnboarded ?(<Layout showSidebar={false}><ChatPage /></Layout>):<Navigate to={!isAuthenticated ? "/login": "/onboarding"  } />} />
        <Route path="/call/:id" element={isAuthenticated && isOnboarded ?(<CallPage />) :<Navigate to={!isAuthenticated ?"/login": "/onboarding" }/>} />
        <Route 
        path="/onboarding" 
        element={isAuthenticated ? (
          !isOnboarded ? (
          <OnBoardingPage />
        ) : (
        <Navigate to="/" />
        )
        ):(
          <Navigate to="/login" />
        )
        } />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Toaster toastOptions={{
    className: '',
    style: {
      fontSize: '16px',
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
  }} />
    </div>
  );
}


