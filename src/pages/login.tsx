import Image from "next/image"
import { FormEvent } from "react"
import Seo from "@/components/Seo"
import { H1 } from "@/components/Typography"
import { Input, Label } from "@/components/Forms"

export default function Login() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <>
      <Seo title="Login" />
      <div className="min-h-screen flex justify-center items-center overflow-hidden relative p-4">
        <div className="w-36 h-8 absolute top-6 left-5">
          <a href="#">
            <Image fill={true} src="/logo.svg" alt="logo" />
          </a>
        </div>
        <div className="w-[450px] z-10 relative sm:pt-0 pt-16">
          <div className="bg-white rounded-lg shadow-xl sm:p-10 p-6">
            <div className="text-center mb-5">
              <H1 className="text-3xl" title="Login" />
              <p className="text-base">Welcome back! Please enter your details.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-7">
                <Label title="Email" />
                <Input placeholder="Enter your email" name="email" type="email" />
              </div>
              <div className="mb-7">
                <Label title="Password" />
                <div className="relative">
                  <Input placeholder="Enter your password" name="password" type="password" className="pr-32" />
                  <a className="absolute top-1/2 -translate-y-1/2 right-3 text-blue-500 hover:underline font-medium" href="#">
                    Forgot password?
                  </a>
                </div>
              </div>
              <button className="button--blue w-full font-bold text-base">Login</button>
              <button className="border-gray-200 rounded-lg p-2 border w-full font-medium text-base mt-5 flex items-center justify-center space-x-2 hover:bg-black transition hover:text-white">
                <span className="relative w-7 h-7">
                  <Image fill={true} src="/icons8-google.svg" alt="google login" />
                </span>
                <span>Sign in with Google</span>
              </button>
            </form>
          </div>
          <div className="text-center text-white pt-7">
            Don’t have an account?{" "}
            <a href="#" className="underline hover:no-underline">
              Sign up
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-end">
          <Image src="/login-bg.svg" fill={true} alt="" className="h-[auto!important] top-[auto!important]" />
        </div>
      </div>
    </>
  )
}
