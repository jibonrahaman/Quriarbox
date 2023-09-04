import React from 'react'

function Heading({className,text}) {
  return (
    <h2 className={`font-ral font-extrabold text-[49px] text-[#261134] ${className}`}>{text}</h2>
  )
}

export default Heading