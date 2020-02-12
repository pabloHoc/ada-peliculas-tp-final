import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const SearchInput = styled.input`
  background: transparent;
  border: 0;
  padding: 10px 20px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray[100]};
`

const SearchBar = () => {
  const [value, setValue] = useState("")
  const history = useHistory()

  const handleChange = event => setValue(event.target.value)

  useEffect(() => {
    setTimeout(() => {
      history.push(value ? `/?query=${value}` : "/")
    }, 200)
  }, [value, history])

  return (
    <SearchInput value={value} onChange={handleChange} placeholder="Búsqueda..." />
  )
}

export default SearchBar
