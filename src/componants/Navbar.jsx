import React from 'react'
import '/src/index.css'

const Navbar = () => {
  return (
    <div id='navbardiv' style={{ backgroundColor:"#E5FEFF", padding:"10px 10px 10px 10px", flexWrap:"wrap" , display:"flex",alignContent:"center", alignItems:"center", justifyContent:"space-evenly"}}>

          <h1 style={{ color:"#0A2751"}}> ACT <i class="fa-solid fa-heart-pulse" style={{ color:"red"}}></i>  4 FITNESS </h1>
          <div style={{ gap:"10px", display:"flex", justifyContent:"center", alignContent:"center", alignItems:"center" }}>
            <a href="/"> 
            <button id='navbtns'> Home </button>
            </a>
            <a href="/"> 
            <button id='navbtns' > My Overall stats </button>
            </a>
            <a href="/"> 
            <button id='navbtns' > Add New Milestone </button>
            </a>
          </div> 

    </div>
  )
}

export default Navbar
