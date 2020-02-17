import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import { useAuth } from "utils/hooks/useAuth"

// TODO: DEFINE WHAT IS FUNCTION AND WHAT HOOKS

const API_KEY = "6a93319b2d78795675b8bd9aa0965a95"

const getApiUrl = (endpoint, extraQueryParams = "") =>
  `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&${extraQueryParams}`

const useGet = (endpoint, extraQueryParams) => {
  const [data, setData] = useState(null)
  const url = getApiUrl(endpoint, extraQueryParams)

  const fetchData = useCallback(
    () => axios.get(url).then(response => setData(response.data)),
    [url]
  )

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [data, fetchData]
}

// API SHOULD NOT

const getAuthToken = async () => {
  const getTokenUrl = getApiUrl("/authentication/token/new")
  const { data } = await axios.get(getTokenUrl)
  return data.request_token
}

// TODO: BREAK THIS FUNCTION

const signIn = async (username, password) => {
  try {
    const requestToken = await getAuthToken()
    const validateTokenUrl = getApiUrl("/authentication/token/validate_with_login")
    const body = { username, password, request_token: requestToken }
    const { data } = await axios.post(validateTokenUrl, body)

    if (!data.success) {
      throw new Error(data.status_message)
    }

    const getSessionUrl = getApiUrl("/authentication/session/new")
    const { data: sessionData } = await axios.post(getSessionUrl, {
      request_token: requestToken
    })

    if (!sessionData.success) {
      throw new Error(sessionData.status_message)
    }

    return sessionData
  } catch (error) {
    return error
  }
}

const useMovie = id => useGet(`/movie/${id}`)
const useCast = id => useGet(`/movie/${id}/credits`, "cast")
const useExternalIds = id =>
  useGet(`/movie/${id}/
external_ids`)
const useActor = id => useGet(`/person/${id}`)

const addList = async (name, sessionId) => {
  const addListurl = `${getApiUrl("/list")}&session_id=${sessionId}`
  const body = {
    name,
    description: "",
    language: "es"
  }
  const { data } = await axios.post(addListurl, body)
  return data
}

const addMovieToList = async (movieId, listId, sessionId) => {
  const addMovieToListurl = `${getApiUrl(
    `/list/${listId}/add_item`
  )}&session_id=${sessionId}`
  const body = {
    media_id: movieId
  }
  const { data } = await axios.post(addMovieToListurl, body)
  return data
}

const useLists = (username, sessionId, page = 1) =>
  useGet(`/account/${username}/lists`, `session_id=${sessionId}&page=${page}`)

export {
  useMovie,
  useCast,
  useExternalIds,
  useActor,
  signIn,
  addList,
  useLists,
  addMovieToList
}
