import Seo from "@/components/Seo"
import Layout from "@/components/Layout"
import OnboardingModal from "@/components/onboardingSteps"

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" />
      <OnboardingModal />
    </Layout>
  )
}
