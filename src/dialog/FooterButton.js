import React from 'react'

export default function FooterButton({children, position, buttonType, disable, closeDialog}) {
  return (
    <div className={`dody-footer dody-button-${position} dody-${buttonType}`}>
      {buttonType === 'cross' ?
        <div className={`cross-wrapper dody-cross-button-${position}`} onClick={closeDialog}>
          <span className={`css-cancel css-cancel-${position}`} />
        </div>
        :<button 
          onClick={closeDialog} 
          className={`dody-button dody-buttonType-${buttonType}`}
          >
          {children}
        </button>
      }
    </div>
  )
}