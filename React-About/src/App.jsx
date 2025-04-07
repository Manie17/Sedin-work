import React from 'react'
import Hero from './Components/Hero'
import Category from './Components/category'
import Organisaton from './Components/Organisaton'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
// import PaginationButtons from './Components/PaginationButtons'
import  Pagination from "./Components/pagination"

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <Category/>
        <Pagination/>
        {/* <PaginationButtons/> */}
        <Organisaton/>
        <Footer/>
    </div>
  )
}

export default App