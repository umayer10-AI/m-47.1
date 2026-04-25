"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = () => {

    const p = usePathname()

    return (
        <div className='flex items-center gap-2'>
            <Link href={'/'} className={p==='/'? "btn btn-accent":"btn"}>Home</Link>
            <Link href={'/about'} className={p==='/about'? "btn btn-accent":"btn"}>About</Link>
            <Link href={'/career'} className={p==='/career'? "btn btn-accent":"btn"}>Career</Link>
        </div>
    );
};

export default NavLink;