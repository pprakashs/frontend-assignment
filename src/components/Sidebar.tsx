import { H1 } from "./Typography"
import { useEffect } from "react"
import useScreenSize from "@/hooks/useScreenSize"

type Props = {
  hideSidebar: boolean
  setHideSidebar: (e: boolean) => void
}

export default function Sidebar({ hideSidebar, setHideSidebar }: Props) {
  const { screenWidth } = useScreenSize()
  useEffect(() => {
    if (!hideSidebar && screenWidth < 640) {
      return setHideSidebar(true)
    }
    if (hideSidebar && screenWidth > 640) {
      return setHideSidebar(false)
    }
  }, [screenWidth])

  return (
    <aside
      className={`h-full bg-white shadow-sm w-64 fixed left-0 top-0 border-r border-gray-100 ${
        hideSidebar ? "-translate-x-96" : "translate-x-0 transition"
      }`}
    >
      <H1 className="text-2xl p-5 border-b border-gray-200 text-center" title="Upnotify" />
    </aside>
  )
}
