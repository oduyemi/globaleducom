import axios from "axios";

const loginUser = async () => {
  try {
    const response = await axios.get("https://globaleducomm.com/api/fetch/users/user/:id"); 
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Failed to fetch user data");
  }
};

export default loginUser;
