import React, { useState, useEffect } from "react"
import Tab from "./Tab"
import Panel from "./Panel"
import { List } from "components/Common/Common"

const Tabs = ({ children, className }) => {
  const [activeTab, setActiveTab] = useState()

  useEffect(() => {
    setActiveTab(children[0].props.label)
  }, [children])

  const handleClickTabItem = tab => setActiveTab(tab)

  return (
    <>
      <List className={className}>
        {children.map(child => (
          <Tab
            activeTab={activeTab}
            key={child.props.label}
            label={child.props.label}
            onClick={handleClickTabItem}
          />
        ))}
      </List>
      {children.map(child =>
        child.props.label !== activeTab ? null : child.props.children
      )}
    </>
  )
}

Tabs.Panel = Panel

export default Tabs
