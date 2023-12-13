import axios from "axios";

const loginUser = async (userId) => {
  const userIdInt = parseInt(userId, 10);
  try {
    const response = await axios.get(`https://globaleducomm.com/api/users/user/${userIdInt}`); 
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Failed to fetch user data");
  }
};

export default loginUser;



