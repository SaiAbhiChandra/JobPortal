// import React from "react";
// import { useNavigate } from "react-router-dom";

// const HomePage = () => {
//   const navigate = useNavigate();

//   return (
    
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
//       <h1 className="text-3xl font-bold text-center mb-10">Welcome to the Job Portal</h1>

//       <p className="text-lg text-gray-700 mb-8 text-center">
//         Find the best jobs that match your resume, explore job listings, and post jobs easily.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
//         <button
//           onClick={() => navigate("/upload")}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg"
//         >
//           Upload Resume
//         </button>

//         <button
//           onClick={() => navigate("/resumes")}
//           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg"
//         >
//           View Resumes
//         </button>

//         <button
//           onClick={() => navigate("/post-job")}
//           className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg"
//         >
//           Post Job
//         </button>

//         <button
//           onClick={() => navigate("/jobs")}
//           className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg"
//         >
//           View Jobs
//         </button>

//         <button
//           onClick={() => navigate("/match-resume")}
//           className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg"
//         >
//           Match Resume to All Jobs
//         </button>

//         <button
//           onClick={() => navigate("/match-online-jobs")}
//           className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg"
//         >
//           Match Resume to Online Jobs
//         </button>

//         <button
//           onClick={() => navigate("/profile")}
//           className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg"
//         >
//           My Profile
//         </button>

//         <button
//           onClick={() => {
//             localStorage.removeItem("token");
//             navigate("/");
//           }}
//           className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Upload,
  Eye,
  Briefcase,
  ClipboardList,
  Search,
  Globe,
  User,
  LogOut,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Upload Resume",
      description: "Add your resume to find matching jobs.",
      icon: <Upload className="h-7 w-7 text-blue-600" />,
      onClick: () => navigate("/upload"),
    },
    {
      title: "View Resumes",
      description: "Browse all uploaded resumes.",
      icon: <Eye className="h-7 w-7 text-green-600" />,
      onClick: () => navigate("/resumes"),
    },
    {
      title: "Post Job",
      description: "Create a new job listing.",
      icon: <Briefcase className="h-7 w-7 text-purple-600" />,
      onClick: () => navigate("/post-job"),
    },
    {
      title: "View Jobs",
      description: "Explore all available jobs.",
      icon: <ClipboardList className="h-7 w-7 text-yellow-600" />,
      onClick: () => navigate("/jobs"),
    },
    {
      title: "Match Resume to All Jobs",
      description: "Find matching jobs from the database.",
      icon: <Search className="h-7 w-7 text-pink-600" />,
      onClick: () => navigate("/match-resume"),
    },
    {
      title: "Match Resume to Online Jobs",
      description: "Scan online listings for matches.",
      icon: <Globe className="h-7 w-7 text-orange-600" />,
      onClick: () => navigate("/match-online-jobs"),
    },
    {
      title: "My Profile",
      description: "View and edit your profile.",
      icon: <User className="h-7 w-7 text-indigo-600" />,
      onClick: () => navigate("/profile"),
    },
    {
      title: "Logout",
      description: "Sign out of your account.",
      icon: <LogOut className="h-7 w-7 text-red-600" />,
      onClick: () => {
        localStorage.removeItem("token");
        navigate("/");
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-gray-100 font-sans relative">
      {/* Hero Section */}
      <div
        className="absolute top-0 left-0 w-full h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="w-full h-full bg-gradient-to-b from-black/70 to-black/30 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-xl">Find Your Dream Job</h1>
          <p className="text-xl mb-6 font-light">Thousands of opportunities at your fingertips</p>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search jobs..."
              className="px-5 py-2 rounded-l-full w-80 text-black focus:outline-none shadow-md"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-full text-white font-semibold transition shadow-md">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow z-30 relative">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-800 tracking-wide">Job Portal</h1>
          <div className="flex space-x-6 text-gray-700 font-medium">
            <button onClick={() => navigate("/jobs")} className="hover:text-blue-600">Jobs</button>
            <button onClick={() => navigate("/upload")} className="hover:text-blue-600">Upload</button>
            <button onClick={() => navigate("/profile")} className="hover:text-blue-600">Profile</button>
            <button onClick={() => { localStorage.removeItem("token"); navigate("/"); }} className="hover:text-red-600">Logout</button>
          </div>
        </div>
      </nav>

      {/* Action Cards */}
      <main className="relative z-10 mt-[55vh] max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {actions.map((action, idx) => (
            <div
              key={idx}
              onClick={action.onClick}
              className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all cursor-pointer p-6 flex items-start space-x-4"
            >
              <div className="mt-1">{action.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{action.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{action.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-20 py-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-1">
            <h2 className="text-lg font-bold text-gray-800">Contact Us</h2>
            <p className="text-gray-600">📍 Hyderabad, Telangana, India</p>
            <p className="text-gray-600">📞 +91 77940 80711</p>
            <p className="text-gray-600">✉️ <a href="mailto:support@jobportal.com" className="text-blue-600 hover:underline">support@jobportal.com</a></p>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Follow Us</h2>
            <div className="flex justify-center space-x-6 text-gray-600">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><Linkedin className="w-6 h-6" /></a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500"><Twitter className="w-6 h-6" /></a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-black"><Github className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;




