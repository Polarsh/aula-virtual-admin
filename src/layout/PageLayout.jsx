import { Fragment, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild
} from '@headlessui/react'

import {
  Bars3Icon,
  MoonIcon as MoonLightIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

import { MoonIcon as MoonDarkIcon } from '@heroicons/react/24/solid'

import SideBarComponent from './SideBar'
import { useApp } from '../context/AppContext'

import { findTitleByPath } from './Routes'

export default function PageLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const { darkMode, setDarkMode } = useApp()

  const location = useLocation()
  const path = location.pathname

  return (
    <>
      <div>
        <Transition show={sidebarOpen} as={Fragment}>
          <Dialog className='relative z-50 lg:hidden' onClose={setSidebarOpen}>
            <TransitionChild
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <div className='fixed inset-0 bg-gray-900/80' />
            </TransitionChild>

            <div className='fixed inset-0 flex'>
              <TransitionChild
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'>
                <DialogPanel className='relative mr-16 flex w-full max-w-xs flex-1'>
                  <TransitionChild
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
                      <button
                        type='button'
                        className='-m-2.5 p-2.5'
                        onClick={() => setSidebarOpen(false)}>
                        <span className='sr-only'>Cerrar menú lateral</span>
                        <XMarkIcon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </TransitionChild>
                  {/* //! Sidebar component, swap this element with another sidebar if you like */}
                  <SideBarComponent />
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        {/* Static sidebar for desktop */}
        <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
          {/* //! Sidebar component, swap this element with another sidebar if you like */}
          <SideBarComponent />
        </div>

        {/* Content */}
        <div className='lg:pl-72'>
          <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
            <button
              type='button'
              className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
              onClick={() => setSidebarOpen(true)}>
              <span className='sr-only'>Abrir menú lateral</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>

            {/* Separator */}
            <div
              className='h-6 w-px bg-gray-900/10 lg:hidden'
              aria-hidden='true'
            />

            {/* NavBar */}
            <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
              <div className='relative flex flex-1'>
                <div className=' flex items-center text-lg font-semibold'>
                  {findTitleByPath(path)}
                </div>
              </div>
              <div className='flex items-center gap-x-4 lg:gap-x-6'>
                <button
                  type='button'
                  className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500'
                  onClick={() => setDarkMode(!darkMode)} // Alterna el modo oscuro
                >
                  <span className='sr-only'>Alternar modo oscuro</span>
                  {darkMode ? (
                    <MoonDarkIcon className='h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MoonLightIcon className='h-6 w-6' aria-hidden='true' />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Outlet */}
          <main className='py-10'>
            <div className='px-4 sm:px-6 lg:px-8'>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
