import { useState } from "react";
import partner1 from "../Assests/Partner-1.svg";
import heropf from "../Assests/heropf.svg";
import PartnerLogo1 from "../Assests/Partner 2.svg"

const blog = [
  {
    image:PartnerLogo1,
    description: "We help seamlessly integrate Einstein Analytics with your Salesforce ecosystem, delivering  AI-powered insights across your business. Leverage advanced image recognition, sentiment analysis.",
    profile: heropf,
  },
  {
    image: partner2,
    description: "We help seamlessly integrate Einstein Analytics with your Salesforce ecosystem, delivering  AI-powered insights across your business. Leverage advanced image recognition, sentiment analysis.",
    profile: heropf,
  },
  {
    image: partner1,
    description: "We help seamlessly integrate Einstein Analytics with your Salesforce ecosystem, delivering  AI-powered insights across your business. Leverage advanced image recognition, sentiment analysis.",
    profile: heropf,
  },
  {
    image: partner1,
    description: "We help seamlessly integrate Einstein Analytics with your Salesforce ecosystem, delivering  AI-powered insights across your business. Leverage advanced image recognition, sentiment analysis.",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },{
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },{
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },
  {
    image: partner1,
    description: "Step-by-Step Guide to Hard Bounce Auto Suppression in",
    profile: heropf,
  },

];

const ITEMS_PER_PAGE = 9; // Adjust as needed

export default function BlogPagination() {
  const [currentPage, setCurrentPage] = useState(1);
   const totalPages = Math.ceil(blog.length / ITEMS_PER_PAGE)

  const paginatedBlog = blog.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-6xl mx-auto pt-15">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15">
        {paginatedBlog.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt="Blog Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex items-center gap-3">
              <img
                src={blog.profile}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <p className="text-p1">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-25">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
