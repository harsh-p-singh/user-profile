import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      setUser(response.data.results[0]);
    } catch (err) {
      setError("Failed to fetch user data. Please try again.");
      console.error("Error fetching user data:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {loading ? (
        <p className="text-gray-700 text-lg animate-pulse">Loading...</p>
      ) : error ? (
        <div className="text-red-600 text-lg">{error}</div>
      ) : (
        <UserCard user={user} />
      )}
      <button
        onClick={fetchUser}
        className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Load New User
      </button>
    </div>
  );
}

export default App;
