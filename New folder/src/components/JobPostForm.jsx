// src/components/JobPostForm.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const JobPostForm = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [skillsRequired, setSkillsRequired] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem('token'); // ✅ Get token after login

//     if (!token) {
//       alert('You must be logged in to post a job.');
//       return;
//     }

//     try {
//       const response = await axios.post(
//         'http://localhost:8000/api/jobs/',
//         {
//           title,
//           description,
//           skills_required: skillsRequired,
//         },
//         {
//           headers: {
//             Authorization: `Token ${token}`, // ✅ Set token in header
//           },
//         }
//       );

//       alert('Job posted successfully!');
//       setTitle('');
//       setDescription('');
//       setSkillsRequired('');
//     } catch (error) {
//       console.error('Error posting job:', error.response?.data || error.message);
//       alert('Failed to post job.');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Job Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <textarea
//           placeholder="Job Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Skills Required (comma separated)"
//           value={skillsRequired}
//           onChange={(e) => setSkillsRequired(e.target.value)}
//           className="w-full p-2 border rounded"
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default JobPostForm;


import React, { useState } from 'react';
import axios from 'axios';

const JobPostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [skillsRequired, setSkillsRequired] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      alert('You must be logged in to post a job.');
      return;
    }

    try {
      await axios.post(
        'http://localhost:8000/api/jobs/',
        { title, description, skills_required: skillsRequired },
        { headers: { Authorization: `Token ${token}` } }
      );
      alert('Job posted successfully!');
      setTitle('');
      setDescription('');
      setSkillsRequired('');
    } catch (error) {
      console.error('Error posting job:', error.response?.data || error.message);
      alert('Failed to post job.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/keyboard-coffee-smartphone-notebook-color-background-top-view_1286-776.jpg')", // 🖼️ Change if needed
      }}
    >
      <div className="w-full max-w-xl bg-light backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 tracking-tight">
          📌 Post a New Job
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-black-700 font-medium mb-1">Job Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="e.g., Backend Developer"
              required
            />
          </div>

          <div>
            <label className="block text-black-700 font-medium mb-1">Job Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              placeholder="Describe the responsibilities and requirements"
              required
            />
          </div>

          <div>
            <label className="block text-black-700 font-medium mb-1">Skills Required</label>
            <input
              type="text"
              value={skillsRequired}
              onChange={(e) => setSkillsRequired(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="e.g., React, Node.js, SQL"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 transition-all duration-300 text-white py-3 rounded-lg font-semibold shadow-lg tracking-wide"
          >
            🚀 Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobPostForm;

