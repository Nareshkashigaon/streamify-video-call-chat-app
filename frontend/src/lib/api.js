import { axiosInstance } from "./axios";

export const signup = async(signupData)=>{
      const response=await axiosInstance.post("/auth/signup",signupData);
    //   console.log("response : ",response.data);
      return response.data;
}

export const login = async(loginData)=>{
      const response=await axiosInstance.post("/auth/login",loginData);
    //   console.log("response : ",response.data);
      return response.data;
}
export const logout = async()=>{
      const response=await axiosInstance.post("/auth/logout");
      console.log("response-api-logout : ",response.data);
      return response.data;
}

export const getAuthUser = async()=>{
  try{
    const res=await axiosInstance.get("/auth/me");  
    // console.log("getAuthUser response : ",res.data);
    return res.data;
  }catch(error){
    console.error("Error fetching auth user:", error);
    // Handle the error as needed, e.g., return null or throw an error
    return null;
  }
    
}

export const completeOnboarding = async(userData)=>{
    const res=await axiosInstance.post("/auth/onboarding",userData);    
    return res.data;
}

export const getUserFriends = async()=>{
    const res=await axiosInstance.get("/users/friends");
    // console.log("getUserFriends response : ",res.data);
    return res.data;
}

export const getRecommendedUsers = async()=>{
    const res=await axiosInstance.get("/users");
    // console.log("getUserFriends response : ",res.data);
    return res.data;
}

export const getOutgoingFriendReqs = async()=>{
    const res=await axiosInstance.get("/users/outgoing-friend-requests");
    // console.log("getUserFriends response : ",res.data);
    return res.data;
}

export const sendFriendRequest = async(userId)=>{
    const res=await axiosInstance.post(`/users/friend-request/${userId}`);
    // console.log("getUserFriends response : ",res.data);
    return res.data;
}

export async function getFriendRequests() {
  const response = await axiosInstance.get("/users/friend-requests");
  return response.data;
}

export async function acceptFriendRequest(requestId) {
  const response = await axiosInstance.put(`/users/friend-request/${requestId}/accept`);
  return response.data;
}

export async function getStreamToken() {
  const response = await axiosInstance.get("/chat/token");
  return response.data;
}