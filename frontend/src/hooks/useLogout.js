import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { logout } from '../lib/api.js';
import toast from 'react-hot-toast';

const useLogout = () => {
    const queryClient = useQueryClient();
  const {mutate:logoutMutation}=useMutation({
        mutationFn: logout,
        onSuccess: () => {
            // Invalidate the authUser query to ensure it gets refetched
            queryClient.invalidateQueries({ queryKey: ["authUser"] });
            // Optionally, you can redirect the user or show a success message
            toast.success("Logout successful!");
        },
    });
    return { logoutMutation};
}

export default useLogout;
