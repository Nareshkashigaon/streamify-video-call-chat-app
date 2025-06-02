import React from 'react'
import { getAuthUser } from '../lib/api';
import { useQuery } from '@tanstack/react-query';

const useAuthUser = () => {
  const authUser=useQuery({queryKey:["authUser"],queryFn:getAuthUser,
  retry: false, // Don't retry on failure
});
// console.log("authUser from useAuthUser:", authUser);


  // If authUser is available, return the data and loading state
return {isLoading:authUser.isLoading, authUser:authUser.data?.user};
}

export default useAuthUser;
