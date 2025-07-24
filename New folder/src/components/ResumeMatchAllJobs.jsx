// import React, { useEffect, useState } from 'react';
// import API from '../api/api';

// function ResumeMatchAllJobs() {
//   const [resumes, setResumes] = useState([]);
//   const [resumeId, setResumeId] = useState('');
//   const [results, setResults] = useState([]);
//   const [selectedResumeName, setSelectedResumeName] = useState('');

//   useEffect(() => {
//     const fetchResumes = async () => {
//       const res = await API.get('resumes/');
//       setResumes(res.data);
//     };
//     fetchResumes();
//   }, []);

//   const handleMatchAll = async () => {
//     try {
//       const selected = resumes.find(r => r.id.toString() === resumeId);
//       setSelectedResumeName(selected?.resume_name || `Resume ${resumeId}`);

//       const res = await API.get(`resumes/${resumeId}/match_jobs/`);
//       setResults(res.data.results || []);
//     } catch (err) {
//       console.error("Matching failed", err);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Job Search with Resume Matching</h2>

//       <div className="mb-4">
//         <label className="mr-2">Select Resume:</label>
//         <select
//           onChange={(e) => setResumeId(e.target.value)}
//           value={resumeId}
//           className="border p-1"
//         >
//           <option value="">-- Choose Resume --</option>
//           {resumes.map((r) => (
//             <option key={r.id} value={r.id}>
//               {r.resume_name}
//             </option>
//           ))}
//         </select>

//         <button
//           onClick={handleMatchAll}
//           className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
//           disabled={!resumeId}
//         >
//           Match Jobs
//         </button>
//       </div>

//       {results.length > 0 && (
//         <div>
//           <h3 className="font-semibold mb-2">
//             Matching Jobs for <span className="text-blue-600">{selectedResumeName}</span>
//           </h3>
//           {results.map((job, index) => (
//             <div key={index} className="border p-2 mb-2 rounded">
//               <h4 className="text-lg font-bold">{job.job_title}</h4>
//               <p>Score: {job.match_score}%</p>
//               <p>Matched Skills: {job.matched_skills.join(', ')}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ResumeMatchAllJobs;


import React, { useEffect, useState } from 'react';
import API from '../api/api';

function ResumeMatchAllJobs() {
  const [resumes, setResumes] = useState([]);
  const [resumeId, setResumeId] = useState('');
  const [results, setResults] = useState([]);
  const [selectedResumeName, setSelectedResumeName] = useState('');

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await API.get('resumes/');
        setResumes(res.data);
      } catch (err) {
        console.error('Error fetching resumes:', err);
      }
    };
    fetchResumes();
  }, []);

  const handleMatchAll = async () => {
    try {
      const selected = resumes.find((r) => r.id.toString() === resumeId);
      setSelectedResumeName(selected?.resume_name || `Resume ${resumeId}`);

      const res = await API.get(`resumes/${resumeId}/match_jobs/`);
      setResults(res.data.results || []);
    } catch (err) {
      console.error('Matching failed', err);
      setResults([]);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage: `url('https://dynamic.placementindia.com/blog_images/20171027131359_image1.jpg')`,
        backgroundColor: '#f8f9fc',
      }}
    >
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
          Resume-Based Job Matching
        </h2>

        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Select Resume:</label>
            <select
              onChange={(e) => setResumeId(e.target.value)}
              value={resumeId}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Choose Resume --</option>
              {resumes.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.resume_name}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleMatchAll}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mt-2 md:mt-6"
            disabled={!resumeId}
          >
            Match Jobs
          </button>
        </div>

        {results.length > 0 ? (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Matching Jobs for <span className="text-blue-600">{selectedResumeName}</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {results.map((job, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition"
                >
                  <h4 className="text-lg font-bold text-blue-700">{job.job_title}</h4>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Match Score:</strong> {job.match_score}%
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    <strong>Matched Skills:</strong> {job.matched_skills.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          resumeId && (
            <p className="text-center text-gray-600 mt-8">No matching jobs found for this resume.</p>
          )
        )}
      </div>
    </div>
  );
}

export default ResumeMatchAllJobs;
