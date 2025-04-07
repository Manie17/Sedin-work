import React from 'react'

const Category = () => {
  return (
    <div>
        <div className="container pr-5 pl-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-50">
            <div className="browse-cat pl-35">
                <h1 className='text-5xl font medium'>Browse by category</h1>
            </div>
            <div className="right-text">
                <div className="cat-btn flex gap-5">
                    <button className='border-2 rounded-3xl px-2 py-3 bg-white-500 hover:bg-blue-500 hover:text-white outline-none'>Sale Cloud</button>
                    <button className='border-2 rounded-3xl px-2 py-3 bg-white-500 hover:bg-blue-500 hover:text-white outline-none'>Sale Force</button>
                    <button className='border-2 rounded-3xl px-2 py-3 bg-white-500 hover:bg-blue-500 hover:text-white outline-none'>Sale Market</button>
                    <button className='border-2 rounded-3xl px-2 py-3 bg-white-500 hover:bg-blue-500 hover:text-white outline-none'>Sale Force</button>
                    <button className='border-2 rounded-3xl px-2 py-3 bg-white-500 hover:bg-blue-500 hover:text-white outline-none'>Sale Cloud</button>
                    </div>
                    <div className="row flex gap-5 pt-3">
                    <button className='border-2 rounded-3xl px-2 py-3 bg-white-500 hover:bg-blue-500 hover:text-white outline-none' >Sale Ma</button>
                    <button className='border-2 rounded-3xl px-2 py-3 bg-white-500 hover:bg-blue-500 hover:text-white outline-none'>Sale Cloud</button>
                    <button className='border-2 rounded-3xl px-2 py-3 bg-white-500 hover:bg-blue-500 hover:text-white outline-none'>Sale Cloud</button>
                    <button className='border-2 rounded-3xl px-2 py-3 bg-white-500 hover:bg-blue-500 hover:text-white outline-none'>Sale Cloud</button>
             </div>   
      </div>
        </div>
        </div>
    </div>
  )
}

export default Category