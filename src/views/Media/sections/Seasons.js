import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { useMedia } from "utils/hooks/useMedia"
import styled from "styled-components"
import { Select, SelectWrapper, Flex } from "components/Common/Common"
import EpisodeCard from "components/EpisodeCard/EpisodeCard"

const StyledEpisodeCard = styled(EpisodeCard)`
  width: calc(100% / 3 - 40px / 3);
  /* 
  @media (max-width: 1200px) {
    width: calc(25% - 20px);
  } */

  @media (max-width: 1200px) {
    width: calc(50% - 20px);
  }
  /* 
  @media (max-width: 650px) {
    width: calc(50% - 20px);
  } */

  @media (max-width: 400px) {
    width: calc(100% - 20px);
  }
`

// TODO: add episodes count

const Seasons = ({ tvShowId, seasons = [] }) => {
  const { season } = useParams()
  const [{ episodes = [] }] = useMedia(tvShowId, "tv", `season/${season}`)
  const history = useHistory()

  const handleSeasonChange = event =>
    history.push(`/tv/${tvShowId}/seasons/${event.target.value}`)

  return (
    <Flex flexDirection="column">
      <SelectWrapper>
        <Select onChange={handleSeasonChange}>
          {seasons.map(season => (
            <option key={season.id} value={season.season_number}>
              Temporada {season.season_number}
            </option>
          ))}
        </Select>
      </SelectWrapper>
      <Flex justifyContent="space-between">
        {episodes.map(episode => (
          <StyledEpisodeCard
            key={episode.id}
            title={episode.name}
            overview={episode.overview}
            img={episode.still_path}
            episodeNumber={episode.episode_number}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default Seasons
