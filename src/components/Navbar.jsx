import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-slate-800 px-8 py-3 flex justify-between'>
           <Link className='text-white font-bold' href="/"> Home </Link>
           <Link className='bg-white p-2 rounded-sm' href="/addTopics"> Add Topics  </Link> 
        </nav>
    );
};

export default Navbar;