import React from 'react'

export default function FooterButton({children, buttonPosition, buttonType, buttonStyle, closeDialog}) {
  return (
    <button className="dody-footer" onClick={closeDialog}>
      {children}
    </button>
  )
}