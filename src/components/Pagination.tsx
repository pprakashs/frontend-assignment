import React from "react"

type Props = {
  totalStep: number
  currentStep: number
}
export default function Pagination({ totalStep, currentStep }: Props) {
  return (
    <div className="bg-blue-50 text-blue-500 px-2 py-1 inline-block font-medium text-sm absolute right-0 top-1 rounded-md">
      {currentStep}/{totalStep}
    </div>
  )
}
