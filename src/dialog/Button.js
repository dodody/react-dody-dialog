import React from 'react'

export default function Button({children}) {
  return (
    <div className="dody-button" onClick={() => console.log(2)}>
      {console.log(children)}
      {children}
    </div>
  )
}
