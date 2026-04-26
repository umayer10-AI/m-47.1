"use client"
import Navbar from '@/component/Navbar';
import React from 'react';
import { useForm } from 'react-hook-form';

const page = () => {

    const {register,handleSubmit,watch,formState: { errors }} = useForm()

    const handleClick = (v) => {
        console.log(v)
    }

    // console.log(watch("url"))

    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center mt-5 mb-10'>
                <form onSubmit={handleSubmit(handleClick)} className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-8">

                    <h2 className='text-3xl font-semibold text-center mb-5'>Register your account</h2>

                    <label className="label text-black font-semibold text-base">Your Name</label>
                    <input type="text" className="input w-full" placeholder="Enter your name" {...register("name", { required: "name filed required" })}/>
                    {errors.name && <p className='font-semibold text-red-500'>{errors.name.message}</p>}

                    <label className="label text-black font-semibold text-base">Photo URL</label>
                    <input type="text" className="input w-full" placeholder="Enter your url" {...register("url", { required: "url filed required" })}/>
                    {errors.url && <p className='font-semibold text-red-500'>{errors.url.message}</p>}

                    <label className="label text-black font-semibold text-base">Email</label>
                    <input type="email" className="input w-full" placeholder="Email" {...register("email", { required: "Email filed required" })}/>
                    {errors.email && <p className='font-semibold text-red-500'>{errors.email.message}</p>}

                    <label className="label text-black font-semibold text-base">Password</label>
                    <input type="password" className="input w-full" placeholder="Password" {...register("password", { required: "password filed required" })}/>
                    {errors.password && <p className='font-semibold text-red-500'>{errors.password.message}</p>}

                    <label className="label text-black mt-2 font-semibold"><input type="checkbox" className="checkbox checkbox-info" />Accept Term & Conditions</label>

                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default page;