import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

const useAuth = () => {
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState(null);

  const loginMutation = useMutation(
    (formData) =>
      fetch('https://your-api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json()),
    {
      onSuccess: (data) => {
        setUserId(data.user.id);
        queryClient.setQueryData('user', data.user);
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
