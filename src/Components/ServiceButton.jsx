import React from 'react'

function ServiceButton({text,className}) {
  return (
    <button className={`px-20 py-2 bg-transparent border font-oxa font-bold text-lg border-[#F95C19] text-[#F95C19] duration-700 rounded-md hover:bg-[#F95C19] hover:text-white  ${className}`}>{text}</button>
  )
}

export default ServiceButton