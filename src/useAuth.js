import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

const useAuth = () => {
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState(null);

  const updateUserId = (newUserId) => {
    const userIdAsNumber = parseInt(newUserId, 10);
    setUserId(userIdAsNumber);
  }

  const loginMutation = useMutation(
    async (formData) => {
      try {
        const response = await fetch('https://globaleducomm.com/api/send/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
  
        console.log("Login API Response:", data);
  
        if (data.error) {
          console.error("Login failed", data.error);
          throw new Error(data.error.message);
        }
  
        const newUserId = data.userId;
        console.log("New UserId:", newUserId);
        setUserId(newUserId);
  
        queryClient.setQueryData('user', data.user);
  
        console.log("Updated UserId:", newUserId);
  
        return { userId: newUserId, error: null };
  
      } catch (error) {
        console.error("Error during login:", error);
        return { userId: null, error };
      }
    }
  );
  
  return {
    userId,
    login: loginMutation.mutate,
    updateUserId,
  };
};

export default useAuth;
