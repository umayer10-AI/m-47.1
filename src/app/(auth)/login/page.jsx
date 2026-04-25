import Navbar from '@/component/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center mt-5 mb-10'>
                <form className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-8">

                    <h2 className='text-3xl font-semibold text-center mb-5'>Register your account</h2>

                    <label className="label text-black font-semibold text-base">Email address</label>
                    <input type="email" className="input w-full" placeholder="Enter email address" />

                    <label className="label text-black font-semibold text-base">Password</label>
                    <input type="password" className="input w-full" placeholder="Enter your password" />

                    <button className="btn btn-neutral my-4">Login</button>

                    <p className='text-center font-semibold text-base'>Dont’t Have An Account ? <span className='
                    text-red-600'>Register</span></p>
                </form>
            </div>
        </div>
    );
};

export default page;