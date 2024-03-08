import { Transition } from "@headlessui/react"
import { Fragment } from "react"


export const BackgroundLayer = () => (
    <Transition.Child
      enter="transition-opacity ease-in-out duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="fixed inset-0 bg-transparent opacity-75" />
    </Transition.Child>
  )
  
export const SlideOverLayer = ({ children }) => (
    <Transition.Child
      as={Fragment}
      enter="transform transition ease-in-out duration-1000 delay-1000"
      enterFrom="translate-x-2/4"
      enterTo="translate-x-0"
    >
              <div className="flex flex-col bg-transparent py-6">
                <div className="px-4 sm:px-6">{children}</div>
        </div>
    </Transition.Child>
  )

export const ProjectsOverLayer = ({ children }) => (
    <Transition.Child
      as={Fragment}
      enter="transform transition ease-in-out duration-1000 delay-500"
      enterFrom="translate-y-full"
      enterTo="translate-y-1/4"
    >
        <div className="flex flex-col bg-transparent py-6">
                <div className="px-4 py-8 sm:px-6">{children}</div>
        </div>
    </Transition.Child>
  )