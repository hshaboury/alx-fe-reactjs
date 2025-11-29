import axios from "axios";

// البحث المتقدم
export const fetchUserDataAdvanced = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}&per_page=20`;

  const response = await axios.get(url);
  return response.data; // تحتوي على items array
};
