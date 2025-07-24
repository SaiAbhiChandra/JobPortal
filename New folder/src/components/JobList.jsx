// import React, {useEffect, useState} from 'react';
// import API from '../api/api'

// function JobList() {
//   const [jobs, setJobs] = useState([]);

//   const fetchJobs = async () => {
//     try {
//       const res = await API.get('jobs/');
//       setJobs(res.data);
//     } catch (error) {
//       console.error("Error Fetching jobs:", error)
//     }
// };

// useEffect(() => {
//   fetchJobs();
// }, []);

// return (
//   <div className="p-6">
//     <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>

//     {jobs.length === 0 ? (
//       <p>No jobs available.</p>
//     ) : (
//       <div className="grid gap-4">
//         {jobs.map((job) => (
//           <div key={job.id} className="border p-4 rounded shadow">
//             <h3 className="text-lg font-semibold">{job.title}</h3>
//             <p className="mt-1">{job.description}</p>
//             <p className="mt-2 text-sm-text-gray-600">
//               Required Skills: {job.skills_required}
//             </p>
//           </div>
//         ))}
//       </div>
//     )}
//     </div>
//   );
// }

// export default JobList

import React, { useEffect, useState } from 'react';
import API from '../api/api';

function JobList() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await API.get('jobs/');
      setJobs(res.data);
    } catch (error) {
      console.error("Error Fetching jobs:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this job?");
    if (!confirm) return;

    try {
      const token = localStorage.getItem('token');
      await API.delete(`jobs/${id}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      // Remove deleted job from state
      setJobs(jobs.filter((job) => job.id !== id));
      alert("Job deleted successfully.");
    } catch (error) {
      console.error("Error deleting job:", error);
      alert("Failed to delete the job.");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center py-10 px-4 md:px-16"
      style={{
        backgroundImage: `url('https://t3.ftcdn.net/jpg/02/10/87/80/360_F_210878007_vIRqeFVZAeODdJ4dAbw4J8O6kLKzxUfi.jpg')`
      }}
    >
      <div className="bg-white bg-opacity-90 p-6 md:p-10 rounded-xl shadow-xl max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Available Job Opportunities</h2>

        {jobs.length === 0 ? (
          <p className="text-center text-gray-700">No jobs available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-lg p-5 shadow hover:shadow-lg transition duration-300 relative"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{job.title}</h3>
                <p className="text-gray-700 text-sm mb-3">{job.description}</p>
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-800">Skills Required:</strong> {job.skills_required}
                </p>

                <button
                  onClick={() => handleDelete(job.id)}
                  className="absolute top-3 right-3 text-sm text-red-600 border border-red-500 rounded px-2 py-1 hover:bg-red-100"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default JobList;



