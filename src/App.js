import React from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from "components/Header/Header"
import SidebarNav from "components/SidebarNav/SidebarNav"
import { Flex } from "components/Common/Common"

import MovieResults from "views/MovieResults/MovieResults"
import MovieDetails from "views/MovieDetails/MovieDetails"

import PATHS from "constants/paths"

import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { theme } from "utils/styles/theme"

const ViewContainer = styled(Flex)`
  flex-basis: 80%;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.gray[900]};
`

const StyledMovieResults = styled(MovieResults)`
  padding: 20px;
`

const StyledFlexContainer = styled(Flex)`
  flex-grow: 1;
`

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.gray[100]};
    font-weight: 300;
  }
  a {
    color: ${({ theme }) => theme.colors.gray[100]};
    text-decoration: none;

    &:visited {
      color: ${({ theme }) => theme.colors.gray[100]};
    }
  }
  #root {
    display: flex;
    flex-direction: column;
  }
`

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Header />
      <StyledFlexContainer alignItems="stretch" wrap="no-wrap">
        <SidebarNav />
        <ViewContainer>
          <Route exact path={PATHS.HOME} component={StyledMovieResults} />
          {/* Auth routes */}

          {/* Public routes */}
          <Route exact path={PATHS.MOVIE_LIST} component={StyledMovieResults} />
          <Route path={PATHS.MOVIE_DETAILS} component={MovieDetails} />

          {/* Private routes */}
        </ViewContainer>
      </StyledFlexContainer>
    </Router>
  </ThemeProvider>
)

export default App
