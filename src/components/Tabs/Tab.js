import React from 'react'

const Tab = ({className, activeTab, label, onClick}) => (
  <li
    className={className}
    onClick={() => onClick(label)}
  >
    {label}
  </li>
)

export default Tab