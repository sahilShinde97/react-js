
import React from "react";

const page = () => {
  let marks = 80;
  const changeMarks = ()=>{
    console.log(marks);
    marks = 33;
    console.log(marks);
  }
  return (
    <>
    <h1 className='font-bold text-xl'>MY total marks were{marks}</h1>
    <button onClick={()=>{
      changeMarks();
    }} 
    className='bg-gray-400 px-5 py-2 rounded mt-5 text-white font-bold' >update</button>
    
    </>

  )
}

export default page