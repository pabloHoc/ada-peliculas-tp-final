import { useState, useEffect } from "react"

export const BREAKPOINTS = {
  XS: 400,
  SM: 650,
  MD: 1000,
  LG: 1200
}

const getBreakpoint = width => {
  for (const breakpoint of Object.keys(BREAKPOINTS)) {
    if (width <= BREAKPOINTS[breakpoint]) {
      return breakpoint
    }
  }
}

export const useResponsive = () => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth))

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth))
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return breakpoint
}
