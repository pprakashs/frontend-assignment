import Pagination from "../Pagination"
import { H1 } from "../Typography"
import { TextArea, Label } from "../Forms"
import { StepProps } from "@/types/step"

export default function StepOne({ step, totalSteps }: StepProps) {
  return (
    <>
      <form>
        <div className="sm:mb-16 mb-8">
          <Label title="Expertise and Experience" />
          <TextArea
            placeholder="I have 5 years experience working at a fortune 500 company where we helped 1000th companies scale to X.
            I have strong copywriting skills via ...."
            rows={5}
            name=""
          />
        </div>
        <div className="sm:mb-16 mb-8">
          <Label title="How would you like to sign off the proposal" />
          <TextArea
            placeholder="I look forward to hearing a prompt response from yourself as I prepare to engage with your organisation
            Best"
            name=""
            rows={5}
          />
        </div>
      </form>
      <div className="relative pr-11">
        <H1 title="Help Us Customize your Prompts"></H1>
        <p>Please fill in this form to the best of your detail so we can customize your AI generated proposals as much as possible. </p>
        <p>You can change these at any time by heading over to the settings tab within the app! </p>
        <Pagination currentStep={step} totalStep={totalSteps} />
      </div>
    </>
  )
}
