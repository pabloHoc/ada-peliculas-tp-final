import React from "react"
import styled from "styled-components"
import { Flex } from "components/Common/Common"

const VideoContainer = styled.div`
  padding: 10px;
  box-sizing: border-box;
  width: calc(100% / 3);

  @media (max-width: 1800px) {
    width: 50%;
  }

  @media (max-width: 1400px) {
    width: 100%;
  }
`

const Video = styled.iframe`
  width: 100%;
`

const MovieVideos = ({ videos }) => (
  <Flex>
    {videos.map(video => (
      <VideoContainer key={video.id}>
        <Video
          id="player"
          type="text/html"
          width="640"
          height="360"
          src={`http://www.youtube.com/embed/${video.key}`}
          frameBorder="0"
          title={video.name}
        />
      </VideoContainer>
    ))}
  </Flex>
)

export default MovieVideos
