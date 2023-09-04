import React, { Children } from 'react'

function Section({className,children}) {
  return (
    <section className={`bg-[#fff7e7] pt-40 ${className}`}>{children}</section>
  )
}

export default Section