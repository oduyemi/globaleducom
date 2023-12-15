import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

const useAuth = () => {
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState(null);

  const loginMutation = useMutation(
    (formData) =>
      fetch('https://globaleducomm.com/api/send/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json()),
    {
      onSuccess: (data) => {
        console.log("Login successful. Data received:", data);
  
        if (data.error) {
          console.error("Login failed", data.error);
          throw new Error(data.error.message);
        }
  
        setUserId(data.user.id);
        queryClient.setQueryData('user', data.user);
        return data;
      },
    }
  );
  

  const logout = () => {
    setUserId(null);
    queryClient.setQueryData('user', null);
  };

  return {
    userId,
    login: loginMutation.mutate,
    logout,
    isLoading: loginMutation.isLoading,
    isError: loginMutation.isError,
    error: loginMutation.error,
  };
};

export default useAuth;