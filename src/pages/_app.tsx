import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Inter_Tight } from "next/font/google"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import { useRouter } from "next/router"
import { useState } from "react"

const interTight = Inter_Tight({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  const [hideSidebar, setHideSidebar] = useState<boolean>(false)
  const router = useRouter()
  return (
    <div className={interTight.className}>
      {router.pathname !== "/login" && (
        <>
          <Sidebar hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
          <Header setHideSidebar={setHideSidebar} hideSidebar={hideSidebar} />
        </>
      )}
      <Component {...pageProps} />
    </div>
  )
}
