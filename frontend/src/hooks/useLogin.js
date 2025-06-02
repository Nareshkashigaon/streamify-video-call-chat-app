import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { login } from '../lib/api';
import toast from 'react-hot-toast';

const useLogin = () => {
    const queryClient = useQueryClient();
  const { mutate, isPending,error } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      toast.success("Login successful!");
    },
    
  });
  return {error,isPending,loginMutation:mutate};
}

export default useLogin;
