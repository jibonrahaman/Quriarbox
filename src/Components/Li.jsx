import React from 'react'

function Li({className,text}) {
  return (
    <li className={`font-ral text-base font-bold hover:font-extrabold hover:text-[#F95C19] duration-500 ${className}`}>{text}</li>
  )
}

export default Li