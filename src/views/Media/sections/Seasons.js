import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { useMedia } from "utils/hooks/useMedia"
import styled from "styled-components"
import { Select, SelectWrapper, Flex } from "components/Common/Common"
import EpisodeCard from "components/EpisodeCard/EpisodeCard"

const StyledEpisodeCard = styled(EpisodeCard)`
  width: calc(100% / 3 - 40px / 3);
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 600px) {
    width: calc(100%);
  }
`

const StyledSelectWrapper = styled(SelectWrapper)`
  margin-bottom: 20px;
`

const Seasons = ({ tvShowId, seasons = [] }) => {
  const { season } = useParams()
  const [{ episodes = [] }] = useMedia(tvShowId, "tv", `season/${season}`, 'es-ES')
  const history = useHistory()

  const handleSeasonChange = event =>
    history.push(`/tv/${tvShowId}/seasons/${event.target.value}`)

  return (
    <Flex flexDirection="column">
      <StyledSelectWrapper>
        <Select onChange={handleSeasonChange}>
          {seasons.map(season => (
            <option key={season.id} value={season.season_number}>
              Temporada {season.season_number}
            </option>
          ))}
        </Select>
      </StyledSelectWrapper>
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
