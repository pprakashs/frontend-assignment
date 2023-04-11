import { useEffect, useState } from "react"

type ScreenStateProps = { screenWidth: number; screenHeight: number }

export default function useScreenSize() {
  const [screenSizes, setScreenSizes] = useState<ScreenStateProps>({
    screenWidth: 0,
    screenHeight: 0,
  })
  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    function resize() {
      setScreenSizes({
        screenHeight: height,
        screenWidth: width,
      })
    }

    if (!screenSizes.screenWidth || !screenSizes.screenHeight) {
      resize()
      return
    }

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [screenSizes])

  return screenSizes
}
