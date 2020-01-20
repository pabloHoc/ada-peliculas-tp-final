import { useLocation } from "react-router-dom"

const useQuery = () => {
  const query = new URLSearchParams(useLocation().search)
  const keys = query.keys()
  const queryParams = {}

  for (const key of keys) {
    queryParams[key] = query.get(key)
  }

  return queryParams
}

export default useQuery
