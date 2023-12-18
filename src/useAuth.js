import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

const useAuth = () => {
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState(null);

  const loginMutation = useMutation(
    async (formData) => {
      const response = await fetch('https://globaleducomm.com/api/send/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) {
        console.error("Login failed", data.error);
        throw new Error(data.error.message);
      }

      const newUserId = data.user.id;
      console.log("New UserId:", newUserId);
      setUserId(newUserId);

      queryClient.setQueryData('user', data.user);

      console.log("Updated UserId:", newUserId);
      return newUserId;
    },
  );

  return {
    userId,
    login: loginMutation.mutate,
  };
};


export default useAuth;
