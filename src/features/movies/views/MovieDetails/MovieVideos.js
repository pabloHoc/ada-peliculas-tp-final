import React from "react"
import styled from "styled-components"

const VideosContainer = styled.div``
const VideoContainer = styled.div``

const MovieVideos = ({ videos }) => (
  <VideosContainer>
    {videos.map(video => (
      <VideoContainer key={video.id}>
        <iframe
          id="player"
          type="text/html"
          width="640"
          height="360"
          src={`http://www.youtube.com/embed/${video.key}`}
          frameBorder="0"
          title={video.name}
        ></iframe>
      </VideoContainer>
    ))}
  </VideosContainer>
)

export default MovieVideos
