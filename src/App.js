import React from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from "components/Header/Header"
import { Flex } from "components/Common/Common"

import Home from "views/Home/Home"
import Movies from "views/Movies/Movies"
import TvShows from "views/TvShows/TvShows"
import Person from "views/Person/Person"
import Search from "views/Search/Search"
import Media from "views/Media/Media"
import NotFound from "views/NotFound/NotFound"

import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary"

import PATHS from "constants/paths"

import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { theme } from "utils/styles/theme"

const ViewContainer = styled(Flex)`
  flex-basis: 80%;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

const StyledSearch = styled(Search)`
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
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.text};
    font-weight: 300;
  }
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;

    &:visited {
      color: ${({ theme }) => theme.colors.text};
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
      <ErrorBoundary>
        <StyledFlexContainer alignItems="stretch" wrap="no-wrap">
          <ViewContainer>
            <Switch>
              <Route exact path={PATHS.NOT_FOUND} component={NotFound} />
              <Route exact path={PATHS.HOME} component={Home} />
              <Route exact path={PATHS.MOVIES} component={Movies} />
              <Route exact path={PATHS.TV_SHOWS} component={TvShows} />
              <Route exact path={PATHS.SEARCH} component={StyledSearch} />
              <Route exact path={PATHS.DISCOVER} component={StyledSearch} />
              <Route path={PATHS.PERSON} component={Person} />
              <Route path={PATHS.DETAILS} component={Media} />
              <Route path={PATHS.ERROR} component={Error} />
            </Switch>
          </ViewContainer>
        </StyledFlexContainer>
      </ErrorBoundary>
    </Router>
  </ThemeProvider>
)

export default App
