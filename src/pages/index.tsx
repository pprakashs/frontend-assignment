import Seo from "@/components/Seo"
import Layout from "@/components/Layout"
import OnboardingSteps from "@/components/onboardingSteps"

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" />
      <OnboardingSteps />
    </Layout>
  )
}
