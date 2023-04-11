import Image from "next/image"
import Pagination from "../Pagination"
import { H1 } from "../Typography"
import { StepProps } from "@/types/step"

export default function StepThree({ step, totalSteps }: StepProps) {
  return (
    <>
      <div className="flex justify-center mb-7">
        <Image src="/step-3.png" alt="" width={307} height={394} />
      </div>
      <div className="relative pr-11">
        <Pagination currentStep={step} totalStep={totalSteps} />

        <H1 title="Enter scrape data"></H1>
        <p>On this modal section, enter the details of your scrape</p>
        <p>Here you can choose where you will like to be notified, the interval of your scrape and the Upwork RSS feed for your jobs</p>
        <p>
          Don{`'`}t worry, on the form we{`'`}ll have a video showing you exactly how to get this information
        </p>
      </div>
    </>
  )
}
