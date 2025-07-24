// import React, { useState} from 'react';
// import API from '../api/api';

// function ResumeUpload() {
//   const [file, setFile] = useState(null);
//   const [skills, setSkills] = useState([]);
//   const  [error, setError] = useState("");

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('file', file);
//       const res = await API.post('resumes/upload/', formData);
//       setSkills(res.data.skills);
//     } catch(err) {
//       setError("Failed to upload resume");
//     }
//   };

//   return (
//     <div className="p-4">
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button className="bg-black text-white px-4 py-2" onClick = {handleUpload}>
//         Upload Resume
//       </button>
//       <div className="mt-4">
//         {error && <p className="text-red-500">{error}</p>}
//         <h2 className="font-bold">Extracted Skills:</h2>
//         <ul>
//           {skills.map((s, i) => <li key={i}>{s}</li>)}
//         </ul>
//       </div>
//     </div>
//   );
// }
// export default ResumeUpload;

import React, { useState } from 'react';
import API from '../api/api';
import { FileUp, FileText } from 'lucide-react';

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await API.post('resumes/upload/', formData);
      setSkills(res.data.skills);
      setError("");
    } catch (err) {
      setError("Failed to upload resume");
      setSkills([]);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/flat-lay-stationary-arrangement-desk-with-copy-space-coffee_23-2148404490.jpg')",
      }}
    >
      <div className="bg-light backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <FileUp className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Upload Your Resume</h1>
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Choose Resume (PDF/DOCX)</label>
          <input
            type="file"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Upload & Extract Skills
        </button>

        {/* Error */}
        {error && (
          <p className="text-red-600 font-medium mt-4">{error}</p>
        )}

        {/* Skills Result */}
        {skills.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="text-green-600 w-5 h-5" />
              <h2 className="text-xl font-semibold text-gray-800">Extracted Skills</h2>
            </div>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeUpload;
