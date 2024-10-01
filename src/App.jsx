import React from 'react'
import  './index.css';


const App = () => {
  return (
    <div>
<div id="main" className="h-[100%] w-[100%] relative">
      <div id="page1" className="h-[100vh] w-[100%]">
        <div id="nav" className="w-[100%] h-[80px] bg-white flex relative">
          <div id="nav-part1" className="w-[30%] h-[100%] font-bold text-6xl flex items-center justify-center bg-black text-white"><h1>PORTOFILO</h1></div>
          <div id="nav-part2" className="flex text-2xl items-center justify-center bg-gray-500 text-white w-[70%] h-[100%] gap-6">
            <h3>HOME</h3>
            <h3>ABOUT</h3>
            <h3>WORKS</h3>
            <h3>BLOG</h3>
            <h3>CONTACT</h3>
          </div>

        </div>
        <div id="div-container" className="h-full w-full flex">
          <div id="box1" className="bg-black h-full w-[30%] text-white relative">
            <div className='absolute top-[60%] right-[-45%] z-10'>

            <h1 className='text-6xl'>MY NAME IS </h1>
            <br />
            <div className='bg-yellow-600 w-fit px-2 py-2 '>

            <h1 className='text-6xl font-bold'>ADITYA PAWAR</h1>
            </div>
            </div>

          </div>
          <div id="box2" className="bg-white h-full w-[70%] relative object-cover object-center">
            <img className='h-full w-full' src="https://images.unsplash.com/photo-1508182314998-3bd49473002f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>

        </div>
        
      </div>
    </div>    </div>
  )
}

export default App