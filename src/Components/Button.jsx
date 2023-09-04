import React from 'react'

function Button({text,className}) {
  return (
   <button className={`px-5 py-3 bg-[#FFE4D9] font-oxa font-bold text-xl text-[#F95C19] rounded-md duration-700 hover:bg-[#F95C19] hover:text-[#FFE4D9] border border-bg-[#F95C19] ${className}`}>{text}</button>
  )
}

export default Button