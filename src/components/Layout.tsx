import React from "react"

type Props = {
  children: React.ReactElement | React.ReactElement[]
}
export default function Layout({ children }: Props) {
  return (
    <main className="pl-64">
      <div className="p-10">{children}</div>
    </main>
  )
}
