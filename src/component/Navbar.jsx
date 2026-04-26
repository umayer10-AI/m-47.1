"use client"
import React from 'react';
import NavLink from './NavLink';
import { FaCircleUser } from 'react-icons/fa6';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const { data: session } = authClient.useSession()

    console.log(session)

    const user = session?.user

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 max-w-[80%] mx-auto py-4'>
            <div>

            </div>

            <NavLink></NavLink>
            
            <div className='flex items-center gap-3 justify-end'>
                <h2 className='text-4xl'><FaCircleUser /></h2>
                {/* <Link href={'/login'} className='btn bg-black text-white px-7'>Login</Link> */}
                {user? <button onClick={async() => await authClient.signOut()} className='btn btn-info text-white'>LogOut</button> 
                : <Link href={'/login'} className='btn bg-black text-white px-7'>Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;