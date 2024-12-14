import React from 'react'

const FeatureSection = () => {
  return (
    <div style={{ display:"flex", justifyContent:"space-evenly", gap:"20px", flexWrap:"wrap", alignContent:"center" ,alignItems:"center", backgroundColor:"red", padding:"20px 20px 20px 20px"}}>
         <div id='formcard' style={{ padding:"20px 20px 20px 20px", borderRadius:"25px" ,backgroundColor:"white", width:"400px", maxWidth:"600px"}}>
               <label style={{ display:"block"}}>Name</label>
              <input style={{ width:"100%", border:"1px solid grey", borderRadius:"25px", padding:"10px 10px 10px 10px"}} type="text" placeholder='Please enter your name' />
         </div>
         <div>
            <button> Get Started </button>
         </div>
    </div>
  )
}

export default FeatureSection
