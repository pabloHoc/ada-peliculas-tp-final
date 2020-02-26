import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useHistory, useLocation } from "react-router-dom"

const SearchInput = styled.input`
  background: transparent;
  border: 0;
  padding: 10px 20px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
`

// BUG: Fix bug on reload when page not found

const SearchBar = () => {
  const [value, setValue] = useState("")
  const history = useHistory()
  const location = useLocation()
  const [lastPage, setLastPage] = useState(location.pathname)

  const handleChange = event => setValue(event.target.value)

  useEffect(() => {
    if (!location.pathname.includes("multi")) {
      setLastPage(location.pathname)
    }
  }, [location])

  useEffect(() => {
    setTimeout(() => {
      history.push(value ? `/multi/${value}/page/1` : lastPage)
    }, 200)
  }, [value, history, lastPage])

  return (
    <SearchInput value={value} onChange={handleChange} placeholder="Búsqueda..." />
  )
}

export default SearchBar
