import React from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from "components/Header/Header"
import SidebarNav from "components/SidebarNav/SidebarNav"
import { Flex } from "components/Common/Common"

import Home from "views/Home/Home"
import Movies from "views/Movies/Movies"
import TvShows from "views/TvShows/TvShows"
import MediaResults from "views/MediaResults/MediaResults"
import MediaDetails from "views/MediaDetails/MediaDetails"

import PATHS from "constants/paths"

import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { theme } from "utils/styles/theme"

const ViewContainer = styled(Flex)`
  flex-basis: 80%;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.gray[900]};
`

const StyledMediaResults = styled(MediaResults)`
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
          <Switch>
            <Route exact path={PATHS.HOME} component={Home} />
            <Route exact path={PATHS.MOVIES} component={Movies} />
            <Route exact path={PATHS.TV_SHOWS} component={TvShows} />
            <Route exact path={PATHS.SEARCH} component={StyledMediaResults} />
            <Route path={PATHS.DETAILS} component={MediaDetails} />
          </Switch>
        </ViewContainer>
      </StyledFlexContainer>
    </Router>
  </ThemeProvider>
)

export default App
