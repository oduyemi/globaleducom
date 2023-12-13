import axios from "axios";

const loginUser = async (userId) => {
  try {
    const response = await axios.get(`https://globaleducomm.com/api/users/user/${userId}`); 
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Failed to fetch user data");
  }
};

export default loginUser;



