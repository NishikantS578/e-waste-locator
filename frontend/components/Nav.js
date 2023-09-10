import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div>
        <nav className='flex justify-between px-3 py-2 bg-green-400 font-medium'>
            <h1>Logo</h1>
            <div className='flex gap-4 text-sm pr-2'>
                <Link href='/'>Home</Link>
                <Link href='Locator'>Locator</Link>
                <Link href='Components'>Components</Link>
            </div>
        </nav>
    </div>
  )
}

export default Nav