// ProfileDemo.js
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function ProfileDemo() {
  const { user, loading, error, signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="container mx-auto w-[670px] px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">My Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <img 
            className="w-20 h-20 rounded-full" 
            src={user.photoURL} 
            alt="Profile" 
          />
          <div>
            <h2 className="text-xl font-bold">{user.displayName}</h2>
            <p>{user.email}</p>
             <p>Member since: {new Date(user?.metadata.creationTime).toDateString()}</p>
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDemo;