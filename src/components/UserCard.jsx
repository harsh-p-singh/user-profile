import React from "react";

const UserCard = ({ user }) => {
  if (!user) return <p className="text-center text-gray-600">User data not available</p>;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden flex items-center p-6">
      <div className="w-32 h-32 flex-shrink-0">
        <img
          className="w-full h-full rounded-lg border-2 border-gray-300 object-cover"
          src={user?.picture?.large || "https://via.placeholder.com/128"}
          alt={`Profile picture of ${user?.name?.first || "Unknown"} ${user?.name?.last || "User"}`}
        />
      </div>
      <div className="ml-6 flex flex-col">
        <p className="text-xl font-semibold text-gray-800">
          {user?.name?.first || "N/A"} {user?.name?.last || ""}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Gender:</span> {user?.gender || "Not specified"}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Phone:</span> {user?.phone || "Not available"}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
