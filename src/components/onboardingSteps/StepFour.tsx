import Image from "next/image"
import Pagination from "../Pagination"
import { H1 } from "../Typography"
import { StepProps } from "@/types/step"

export default function StepFour({ step, totalSteps }: StepProps) {
  return (
    <>
      <div className="flex justify-center mb-7">
        <Image src="/step-4.png" alt="" width={489} height={368} />
      </div>
      <div className="relative pr-11">
        <Pagination currentStep={step} totalStep={totalSteps} />

        <H1 title="Get a list of jobs"></H1>
        <p>With your scrape added, now the fun begins!</p>
        <p>Either check the jobs dashboard or just sit back and wait for you to be notified in your chosen platforms!</p>
      </div>
    </>
  )
}
