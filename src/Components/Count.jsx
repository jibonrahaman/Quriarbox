import React from 'react'

function Count({className,text}) {
  return (
   <p  className={` font-extrabold text-[39px] leading-[110%] text-[#F95C19] ${className}`}>{text}</p>
  )
}

export default Count