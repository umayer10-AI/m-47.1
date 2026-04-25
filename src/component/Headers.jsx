import React from 'react';
import img from "../assets/logo.png"
import Image from 'next/image';
import { format } from "date-fns";

const Headers = () => {
    return (
        <div className='font-semibold text-center space-y-2 my-4'>
            <Image src={img} alt='logo' className='h-10 object-cover mx-auto'></Image>
            <h2 className='text-gray-500'>Journalism Without Fear or Favour</h2>
            <h2>{format(new Date(), "EEEE, MMMM dd, yyyy")}</h2>
        </div>
    );
};

export default Headers;