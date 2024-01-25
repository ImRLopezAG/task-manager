import { Link } from '@tanstack/react-router'
import { useEffect } from 'react'

export function Header (): JSX.Element {
  useEffect(() => {
    const listItem = document.querySelectorAll('header[landing-header] li')
    const menuBackDrop: HTMLElement = document.querySelector('#menu-backdrop')!

    listItem.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        const { left, top, width, height } = item.getBoundingClientRect()

        menuBackDrop.style.setProperty('--left', `${left}px`)
        menuBackDrop.style.setProperty('--top', `${top}px`)
        menuBackDrop.style.setProperty('--width', `${width}px`)
        menuBackDrop.style.setProperty('--height', `${height}px`)

        menuBackDrop.style.opacity = '1'
        menuBackDrop.style.visibility = 'visible'
      })

      item.addEventListener('mouseleave', () => {
        menuBackDrop.style.opacity = '0'
        menuBackDrop.style.visibility = 'hidden'
      })
    })
  }, [])
  return (
    <header
      landing-header='true'
      className='p-2 px-3 md:px-11 flex z-40 w-full h-auto items-center  sticky top-0 inset-x-0 backdrop-blur-lg  backdrop-saturate-150 bg-background/70 justify-between'
    >
      <Link
        to='/'
        className='flex flex-row md:flex-grow md:basis-0 transform transition-all duration-500 ease-in-out'
        activeOptions={{
          exact: true
        }}
        activeProps={{
          className: 'font-bold'
        }}
      >
        <h2 className='flex text-2xl font-semibold tracking-tight gap-2'>
          <span className='text-primary'>Task</span>
          <span className='text-white'>Manager</span>
        </h2>
      </Link>
      <nav className='hidden md:flex flex-grow justify-start'>
        <ul className='flex text-sm [&>li>a]:font-medium [&>li>a]:text-current [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2'>
          <li className='text-current hover:text-primary text-lg'>
            <Link to='/'>Home</Link>
          </li>
          <li className='text-current hover:text-primary text-lg'>
            <Link to='/editor'>Editor</Link>
          </li>
        </ul>
      </nav>
      <div
        id='menu-backdrop'
        className='bg-slate-300/50 absolute backdrop-blur-lg rounded translate-x-[var(--left)] translate-y-[var(--top)] left-0 top-0 w-[var(--width)] h-[var(--height)] transition-all duration-500 ease-in-out opacity-0 -z-10'
      />
    </header>
  )
}
