import React, { useState, useEffect } from 'react'
import Tab from './Tab'
import Panel from './Panel'

const Tabs = ({children}) => {
  const [activeTab, setActiveTab] = useState()

  useEffect(() => {
    setActiveTab(children[0].props.label)
  }, [children])

  const handleClickTabItem = tab => setActiveTab(tab)

  return (
    <div>
      <ul>
        {
          children.map(child => 
            <Tab 
              activeTab={activeTab}
              key={child.props.label}
              label={child.props.label}
              onClick={handleClickTabItem}
            />
          )
        }
      </ul>
      <div>
        {
          children.map(child => 
            child.props.label !== activeTab ?
            null :
            child.props.children
          )
        }
      </div>
    </div>
  )
}

Tabs.Panel = Panel

export default Tabs