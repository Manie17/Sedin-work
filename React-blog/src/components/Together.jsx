// import react from "react"
//  import client from "../assets/client-img.png"; // Make sure the path is correct

// const Together = () => {
//   return (
    // <div>
    //   <section className="together">
    //     <div className="container cmn-container">
    //       <div className="row">
    //         {/* Left part */}
    //         <div className="col-lg-6 col-md-12 col-sm-6">
    //           <h1 className="text-h2 pb-2">
    //             Together we are stronger in the means
    //           </h1>
    //         </div>
    //         <div className="col-lg-1"></div>
    //         {/* Right part */}
    //         <div className="col-lg-5 col-md-12 col-sm-6">
    //           <div className="together-p">
    //             <p className="text-p1 fw-600 text-dark pb-2">
    //               We help solve your most complex business problems at every
    //               level using Salesforce multi-cloud solutions to significantly
    //               improve your business.
    //             </p>
    //             <p className="text-p1 fw-400 pb-5">
    //               We help solve your most complex business problems at every
    //               level using Salesforce multi-cloud solutions to significantly
    //               improve your business. We help solve your most complex
    //               business problems at every level using Salesforce multi-cloud
    //               solutions to significantly improve your business.
    //             </p>
    //           </div>
    //         </div>
    //         {/* Image section */}
    //         <div className="col-lg-6">
    //           <div className="client-img pt-3">
    //             { <img src={client} className="img-fluid" alt="Client" />}
    //             <div className="col-lg-2"></div>
    //           </div>
    //         </div>
    //         {/* Right text */}
    //         <div className="col-lg-6">
    //           <div className="feedback-cli">
    //             <p className="text-h2 pt-5 pb-5 text-dark">
    //               "Our goal is to build software that gives customer-facing
    //               teams at SMBs the ability"
    //             </p>
    //           </div>
    //           <p className="text-p1 text-dark">Lorem ipsum</p>
    //           <p className="text-p1 fw-400">Founder & CEO</p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    
//   );
// };

// export default Together;
import React from "react";

const ProcessSteps = () => {
  const steps = [
    { number: "1", title: "Requirement Analysis", description: "Understanding your needs." },
    { number: "2", title: "Concept Design", description: "Creating initial designs." },
    { number: "3", title: "Detailed Engineering", description: "Refining with precise details." },
    { number: "4", title: "Prototyping", description: "Building working prototypes." },
    { number: "5", title: "Final Delivery", description: "Ensuring quality & completion." },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">How We Process</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center w-40"
            >
              <div className="w-20 h-20 flex items-center justify-center text-xl font-bold text-white bg-blue-600 border-4 border-white shadow-lg rounded-full">
                {step.number}
              </div>
              <div className="mt-4 p-4 bg-white shadow-lg rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              {index !== steps.length - 1 && (
                <div className="w-20 h-1 bg-blue-500 absolute top-10 left-24 md:left-28"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
