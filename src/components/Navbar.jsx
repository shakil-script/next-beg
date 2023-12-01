// import Link from 'next/link';

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between bg-orange-600 px-20 py-2'>
            <h1 className='font-bold'>Myfas lab</h1>
            <ul className='flex gap-x-4'>
                <Link href='/'>Home</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
                
            </ul>
        </div>
    );
};

export default Navbar;