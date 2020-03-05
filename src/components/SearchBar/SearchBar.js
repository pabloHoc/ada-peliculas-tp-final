import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { Search } from "@styled-icons/feather/Search"

const SearchWrapper = styled.div`
  position: relative;
`

const SearchInput = styled.input`
  background: transparent;
  border: 0;
  padding: 10px 20px 5px 40px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`

const SearchIcon = styled(Search)`
  width: 28px;
  height: 28px;
  color: ${({ theme }) => theme.colors.text};
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(calc(-50% + 2px));
  cursor: pointer;
  pointer-events: none;
`

const SearchBar = () => {
  const [value, setValue] = useState("")
  const history = useHistory()

  const handleChange = event => setValue(event.target.value)

  const handleKeyDown = keyCode => {
    if (keyCode === 13 && value) {
      history.push(`/multi/${value}/page/1`)
    }
  }

  return (
    <SearchWrapper>
      <SearchInput
        value={value}
        onChange={handleChange}
        onKeyDown={event => handleKeyDown(event.keyCode)}
        placeholder="Búsqueda..."
      />
      <SearchIcon />
    </SearchWrapper>
  )
}

export default SearchBar
