import { useState, useEffect, useCallback } from "react"
import axios from "axios"

export const useGet = url => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.get(url)
      setData(data)
      setIsLoading(false)
    } catch {
      setIsLoading(false)
      setHasError(true)
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [data, isLoading, hasError, fetchData]
}
