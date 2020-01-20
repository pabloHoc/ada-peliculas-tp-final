import { useState, useEffect } from "react"
import axios from "axios"

const API_KEY = "6a93319b2d78795675b8bd9aa0965a95"

const getEndpoint = endpoint =>
  `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}`

const useRequest = (endpoint, resProp) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get(getEndpoint(endpoint))
      .then(response => setData(response.data[resProp] || response.data))
  }, [endpoint, resProp])

  return data
}

const useMovie = id => useRequest(`/movie/${id}`)
const useCast = id => useRequest(`/movie/${id}/credits`, "cast")
const useExternalIds = id =>
  useRequest(`/movie/${id}/
external_ids`)
const useActor = id => useRequest(`/person/${id}`)

export { useMovie, useCast, useExternalIds, useActor }
