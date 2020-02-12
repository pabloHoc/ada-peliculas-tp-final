import React from "react"
import styled from "styled-components"

const BackdropContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  background-color: #000;
`

const BackdropOverlay = styled.div`
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, #000 0, transparent 50%, transparent);
`

const BackdropImage = styled.div`
  width: 70%;
  height: 100%;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center;
`

const MovieBackdrop = ({ src }) => (
  <BackdropContainer>
    <BackdropOverlay />
    <BackdropImage src={`https://image.tmdb.org/t/p/original${src}`} />
  </BackdropContainer>
)

export default MovieBackdrop
