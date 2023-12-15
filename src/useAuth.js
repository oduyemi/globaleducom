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
  
        const newUserId = data.user.id;
        console.log("New UserId:", newUserId);
        setUserId(newUserId);
  
        queryClient.setQueryData('user', data.user);
  
        console.log("Updated UserId:", newUserId);
        return newUserId;
      },
    }

)};
  

export default useAuth;
