import React from 'react'

function Paragraph({className,text}) {
  return (
      <p className={`font-ral text-lg font-medium text-[#4D4D4D] ${className}`}>{text}</p>
  )
}

export default Paragraph