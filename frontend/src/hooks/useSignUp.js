import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import toast from 'react-hot-toast';
import { signup } from '../lib/api';

const useSignUp = () => {
    const queryClient = useQueryClient();
    const { mutate, isPending, error } = useMutation({
        mutationFn: signup,
        onSuccess: () => {
        
        queryClient.invalidateQueries({ queryKey: ["authUser"] });
        toast.success("Sign up successful!");
        },
    });
    
    return { error, isPending, signUpMutation: mutate };
}

export default useSignUp;
