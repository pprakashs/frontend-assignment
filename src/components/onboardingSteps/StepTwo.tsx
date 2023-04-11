import Image from "next/image"
import Pagination from "../Pagination"
import { H1 } from "../Typography"
import { StepProps } from "@/types/step"

export default function StepTwo({ step, totalSteps }: StepProps) {
  return (
    <>
      <div className="flex justify-center mb-7">
        <Image src="/step-2.png" alt="" width={499} height={321} />
      </div>
      <div className="relative pr-11">
        <Pagination currentStep={step} totalStep={totalSteps} />

        <H1 title="Create a new scrape"></H1>
        <p>Lorem ipsum dolor sit amet consectetur. Ut sit vel fames egestas integer. Purus ipsum amet scelerisque commodo dui ut. </p>
      </div>
    </>
  )
}
