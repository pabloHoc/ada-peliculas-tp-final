import React from 'react'

const Panel = ({className, label, children}) => (
  <div className={className}>
    {children}
  </div>
)

export default Panel