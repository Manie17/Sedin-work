// import React from 'react'
// import ReactPaginate from "react-paginate"
// import {BsChevronLeft,BsChevronRight} from "react-icons/bs"
// import {motion} from "framer-motion";

// const PaginationButtons = () => {
// const paginationVariants= {
//   hidden:{
//     oppacity:0,
//     y:200,
//   },
//   visible: {
//     opacity:1,
//     y:0,
//     transition:{
//         type:"spring",
//         stiffness:"260",
//         damping:"20",
//         duration:50,
//     }, 
//   },
// }

//   return (
//     <motion.div 
//       variants={paginationVariants}
//       initial="hidden"
//       animate="visible"
//       >
//          <ReactPaginate
//         breakLabel="..."
//         nextLabel={
//             <span className='w-10 h-10 flex items-center justify-center hover:bg-gray-500 rounded-md'>
//                  <BsChevronRight/> 
//             </span>
//         }
//         // onPageChange={handlePageClick}
//         pageRangeDisplayed={9}
//         pageCount={4}
//         previousLabel={
//             <span className='w-10 h-10 flex items-center justify-center hover:bg-gray-500  rounded-md mr-10'>
//                 <BsChevronLeft/>
//             </span>
//         }
//        containerClassName='flex items-center justify-center mt-8 mb-4'
//        pageClassName='block border-border-solid border-gray-500  hover:bg-gray-500 hover:text-white w-10 h-10 flex items-center justify-center rounded-md mr-4'
//        activeClassName='bg-purple-500 text-white'
//       /> 
//     </motion.div>
//   )
// }

// export default PaginationButtons