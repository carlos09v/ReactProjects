import { useState } from 'react'
import { BsFillCloudSunFill, BsFillCloudMoonFill } from 'react-icons/bs'


const ToggleTheme = () => {
    const [iconToggle, setIconToggle] = useState(localStorage.getItem('theme') === 'dark' ? true : false)

    // Manual Theme Switch
    const themeSwitch = () => {
        setIconToggle(!iconToggle)

        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            return localStorage.setItem('theme', 'light')
        }

        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }

    return (
        <button className='absolute flex items-center top-6 left-8 rounded-full border p-4 text-3xl bg-zinc-300 border-zinc-600 dark:bg-zinc-950 dark:border-zinc-300 shadow-md hover:scale-110 duration-200' onClick={themeSwitch}>
            {iconToggle ? (
                <BsFillCloudSunFill className='dark:fill-blue-100' />
            ) : (
                <BsFillCloudMoonFill className='dark:fill-blue-100' />
            )}
        </button>
    )
}

export default ToggleTheme