import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const SearchContainer = styled.div``
const SearchInput = styled.input`
  border: 1px solid lightgray;
  padding: 10px 20px;
  font-size: 20px;
`

const SearchBar = () => {
  const [value, setValue] = useState("")
  const history = useHistory()

  const handleChange = event => setValue(event.target.value)

  useEffect(() => {
    setTimeout(() => {
      if (value) history.push(`/?query=${value}`)
    }, 200)
  }, [value, history])

  return (
    <SearchContainer>
      <SearchInput value={value} onChange={handleChange} />
    </SearchContainer>
  )
}

export default SearchBar
