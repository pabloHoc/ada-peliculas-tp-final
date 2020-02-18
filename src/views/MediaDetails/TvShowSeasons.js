import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { useMedia } from "utils/hooks/media"
import { Select, SelectWrapper } from "components/Common/Common"
import EpisodeCard from "components/EpisodeCard/EpisodeCard"

const TvShowSeasons = ({ tvShowId, seasons }) => {
  const { season } = useParams()
  const [data] = useMedia(tvShowId, "tv", `season/${season}`)
  const history = useHistory()

  const handleSeasonChange = event =>
    history.push(`/tv/${tvShowId}/seasons/${event.target.value}`)

  return (
    <>
      <SelectWrapper>
        <Select onChange={handleSeasonChange}>
          {seasons?.map(season => (
            <option key={season.id} value={season.season_number}>
              Temporada {season.season_number}
            </option>
          ))}
        </Select>
      </SelectWrapper>
      <div>
        {data?.episodes?.map(episode => (
          <EpisodeCard
            key={episode.id}
            title={episode.name}
            overview={episode.overview}
            img={episode.still_path}
            episodeNumber={episode.episode_number}
          />
        ))}
      </div>
    </>
  )
}

export default TvShowSeasons
