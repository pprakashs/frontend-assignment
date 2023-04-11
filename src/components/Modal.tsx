import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import { Inter_Tight } from "next/font/google"

const interTight = Inter_Tight({ subsets: ["latin"] })

type Props = {
  modelVisible: boolean
  children: React.ReactElement | React.ReactElement[]
}

export default function OnboardingModal({ modelVisible, children }: Props) {
  return (
    <Transition appear show={modelVisible} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black-1050 bg-opacity-50" />
        </Transition.Child>

        <div className={`fixed inset-0 overflow-y-auto ${interTight.className}`}>
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
