import React from 'react'

function Container({children}) {
  return (
    <div className={`mx-auto max-w-container`}>{children}</div>
  )
}

export default Container