import React, { useState } from "react";
import { fetchUserDataAdvanced } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username && !location && !minRepos) return;

    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchUserDataAdvanced(username, location, minRepos);
      setUsers(data.items); // API ترجع users في items
    } catch (err) {
      setError("Looks like we cant find the user");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      {/* Advanced Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-2 items-center"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded w-full md:w-1/6"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="mt-4">Loading...</p>}

      {/* Error */}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Users Display */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded shadow hover:shadow-lg"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h2 className="text-center mt-2 font-bold">{user.login}</h2>
            {user.location && (
              <p className="text-center text-sm text-gray-600">
                {user.location}
              </p>
            )}
            <p className="text-center text-sm">
              Repos: {user.public_repos || "N/A"}
            </p>
            <div className="text-center mt-2">
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
