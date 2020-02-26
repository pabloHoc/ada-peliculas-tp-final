import { useState, useEffect, useCallback } from "react"
import axios from "axios"
const CancelToken = axios.CancelToken

export const useGet = url => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const fetchData = useCallback(async () => {
    const source = axios.CancelToken.source()

    setIsLoading(true)
    try {
      const { data } = await axios.get(url, { cancelToken: source.token })
      setData(data)
      setIsLoading(false)
    } catch {
      setIsLoading(false)
      setHasError(true)
    }
    return () => source.cancel()
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [data, isLoading, hasError, fetchData]
}
