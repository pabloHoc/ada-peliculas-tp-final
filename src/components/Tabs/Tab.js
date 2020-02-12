import React from "react"
import { ListItem } from "components/Common/Common"

const Tab = ({ className, activeTab, label, onClick }) => (
  <ListItem className={className} onClick={() => onClick(label)}>
    {label}
  </ListItem>
)

export default Tab
