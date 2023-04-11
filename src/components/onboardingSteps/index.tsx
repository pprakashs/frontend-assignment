import { useState } from "react"
import StepOne from "@/components/onboardingSteps/StepOne"
import StepTwo from "@/components/onboardingSteps/StepTwo"
import StepThree from "@/components/onboardingSteps/StepThree"
import StepFour from "@/components/onboardingSteps/StepFour"
import Modal from "@/components/Modal"
import { StepProps } from "@/types/step"

const Steps = ({ step, totalSteps }: StepProps) => {
  if (step === 2) return <StepTwo step={step} totalSteps={totalSteps} />
  if (step === 3) return <StepThree step={step} totalSteps={totalSteps} />
  if (step === 4) return <StepFour step={step} totalSteps={totalSteps} />
  return <StepOne step={step} totalSteps={totalSteps} />
}

export default function OnboardingSteps() {
  const [modelVisible, setModalVisible] = useState<boolean>(true)
  const [step, setStep] = useState<number>(1)

  const totalSteps = 4

  const handleNext = () => {
    if (step > 3) {
      setModalVisible(false)
      return
    }
    setStep(step + 1)
  }
  return (
    <Modal modelVisible={modelVisible}>
      <Steps step={step} totalSteps={totalSteps} />

      <div className="flex space-x-3 mt-4">
        <button type="button" className="border-gray-200 border rounded-lg w-full hover:bg-black transition hover:text-white" onClick={handleNext}>
          Skip
        </button>
        <button type="button" className="button--blue w-full" onClick={handleNext}>
          {step > 3 ? (
            <span className="flex items-center space-x-2 justify-center">
              <span>Enter app</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 relative top-0.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          ) : (
            "Next"
          )}
        </button>
      </div>
    </Modal>
  )
}
