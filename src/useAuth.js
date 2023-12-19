import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

const useAuth = () => {
  const queryClient = useQueryClient();
  const [userId, setUserId] = useState(null);

  const updateUserId = (newUserId) => {
    setUserId(newUserId);
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
  
        console.log("Full API Response:", response);
  
        const data = await response.json();
  
        console.log("Login API Response:", data);
  
        // ... rest of the code
      } catch (error) {
        console.error("Error during login:", error);
        throw error;
      }
    }
  );  

  console.log("loginMutation:", loginMutation);

  return {
    userId,
    login: loginMutation.mutate,
  };
};

export default useAuth;
