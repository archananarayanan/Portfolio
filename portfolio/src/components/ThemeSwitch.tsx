'use client';
import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { IoSunny } from "react-icons/io5";
import { useLocalStorage } from 'usehooks-ts'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  const [enabled, setEnabled] = useState(false)

  const handleThemeChange = (enabled: boolean) => {
    setTheme(enabled ? 'light' : 'dark')
    setEnabled(enabled)
  }

  return (
    <Switch
      checked={enabled}
      onChange={handleThemeChange}
      className={classNames(
        enabled ? 'bg-gray-400' : 'bg-yellow-600',
        'relative inline-flex md:h-6 md:w-11 sm:h-5 sm:w-10 h-4 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out'
      )}
    >
      <span
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block md:h-5 md:w-5 sm:h-4 sm:w-4 h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      >
        <span
          className={classNames(
            enabled
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
        >
          <IoSunny className='md:h-3 md:w-3 sm:h-2 sm:w-2 h-2 w-2 text-gray-400' />
        </span>
        <span
          className={classNames(
            enabled
              ? 'opacity-100 duration-200 ease-in'
              : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
        >
          <IoSunny className='md:h-3 md:w-3 sm:h-2 sm:w-2 h-2 w-2  text-yellow-600' />
        </span>
      </span>
    </Switch>
  )
}

export default ThemeSwitch