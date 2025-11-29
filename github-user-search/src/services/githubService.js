import axios from "axios";

// Function to fetch GitHub user data
export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;

  const response = await axios.get(url);

  return response.data;
};
