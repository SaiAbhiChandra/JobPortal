// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ResumeList = () => {
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("http://127.0.0.1:8000/api/resumes/", {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         });
//         setResumes(response.data);
//       } catch (error) {
//         console.error("Error fetching resumes:", error);
//       }
//     };

//     fetchResumes();
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-4">Uploaded Resumes</h2>
//       {resumes.length === 0 ? (
//         <p>No resumes uploaded yet.</p>
//       ) : (
//         <ul className="list-disc pl-6">
//           {resumes.map((resume) => (
//             <li key={resume.id}>
//               <a
//                 href={resume.file}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 underline"
//               >
//                 {resume.file_name || resume.file.split("/").pop()}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ResumeList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FileText, CalendarDays, FileDown } from "lucide-react";

const ResumeList = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://127.0.0.1:8000/api/resumes/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setResumes(response.data);
      } catch (error) {
        console.error("Error fetching resumes:", error);
      }
    };

    fetchResumes();
  }, []);

  return (
    <div
      className="min-h-screen px-4 py-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://assets.telegraphindia.com/telegraph/2022/Jan/1643369961_resized-pic2.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-60 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          Uploaded Resumes
        </h2>

        {resumes.length === 0 ? (
          <p className="text-white text-center">No resumes uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumes.map((resume) => (
              <div
                key={resume.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="text-blue-600 w-6 h-6" />
                  <p className="font-semibold text-lg text-gray-800">
                    {resume.file_name || resume.file.split("/").pop()}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <CalendarDays className="w-4 h-4" />
                  <span>
                    {resume.uploaded_at
                      ? new Date(resume.uploaded_at).toLocaleDateString()
                      : "Unknown Date"}
                  </span>
                </div>

                {resume.skills?.length > 0 && (
                  <div className="mb-4">
                    <p className="font-medium text-gray-700 mb-1">
                      Extracted Skills:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                      {resume.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <a
                  href={resume.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  View Resume
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeList;


