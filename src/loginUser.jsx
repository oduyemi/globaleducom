import axios from "axios";

const loginUser = async () => {
  try {
    const userId = response.data.userId;
    const userData = await loginUser(userId);
    const response = await axios.get(`https://globaleducomm.com/api/fetch/users/user/${userId}`); 
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Failed to fetch user data");
  }
};

export default loginUser;
