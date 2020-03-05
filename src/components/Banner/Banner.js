import React from "react"
import styled from "styled-components"

const BannerContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  background-color: #000;

  @media (max-width: 650px) {
    height: 300px;
  }
`

const BannerOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, #000 0, transparent 50%, transparent);

  @media (max-width: 650px) {
    width: 100%;
    background: linear-gradient(to top, #000 0, transparent 50%, transparent);
  }
`

const BannerImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center;
`

const Banner = ({ src }) => (
  <BannerContainer>
    <BannerOverlay />
    <BannerImage src={`https://image.tmdb.org/t/p/original${src}`} />
  </BannerContainer>
)

export default Banner
