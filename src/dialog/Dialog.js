import React from 'react'

export default function Dialog({closeDialog, dialogIsOpen, size, padding, children}) {
  const Padding = {padding: `${padding}rem`};
  return (
    dialogIsOpen
    ?<div>
      <div onClick={closeDialog} className="dody-dialog-back" />
      <div 
        className={`dody-dialog-wrapper dody-${size}`}
        style={Padding}
        >
        {children}
      </div>
    </div>
    :<div />
  )
}
