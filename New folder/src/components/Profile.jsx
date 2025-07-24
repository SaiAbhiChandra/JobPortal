// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Profile = () => {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         });
//         setProfile(response.data);
//       } catch (error) {
//         console.error("Error fetching profile:", error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (!profile) return <p className="p-4">Loading profile...</p>;

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">My Profile</h2>
//       <p><strong>ID:</strong> {profile.id}</p>
//       <p><strong>Username:</strong> {profile.username}</p>
//       <p><strong>Email:</strong> {profile.email}</p>
//     </div>
//   );
// };

// export default Profile;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "lucide-react";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1470&q=80')"
      }}>
        <p className="text-white text-lg font-semibold">Loading profile...</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1470&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative z-10 bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl px-10 py-8 max-w-md w-full border border-white/30 transition-all duration-300 hover:shadow-blue-400/30 hover:scale-[1.02]">
        {/* Avatar */}
        <div className="w-24 h-24 mx-auto bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-md animate-bounce-slow">
          <User className="w-10 h-10" />
        </div>

        <h2 className="text-2xl font-bold text-center text-white mb-1">My Profile</h2>
        <p className="text-center text-gray-200 mb-6">Welcome to your personal dashboard</p>

        <div className="space-y-3 text-white text-[17px]">
          <p><span className="font-semibold">User ID:</span> {profile.id}</p>
          <p><span className="font-semibold">Username:</span> {profile.username}</p>
          <p><span className="font-semibold">Email:</span> {profile.email}</p>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

