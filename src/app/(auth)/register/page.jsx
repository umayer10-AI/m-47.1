"use client"
import Navbar from '@/component/Navbar';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Registerpage = () => {

    const {register,handleSubmit,watch,formState: { errors }} = useForm()

    const router = useRouter()
    const [show, setShow] = useState(false)

    const handleClick = async (v) => {
        console.log(v)

        const { data, error } = await authClient.signUp.email({
            name: v.name,
            email: v.email,
            password: v.password,
            image: v.url,
            // callbackURL: "/",
            // onSuccess: () => {
            //     router.push("/");
            // },
        });

        console.log({data,error})

        if(data){
            alert("Data Successfully")
            router.push("/")
        }
        if(error){
            alert(error.message ||"Undefined")
        }

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
                    <input type={show? "text" : "password"} className="input w-full" placeholder="Enter your password"  {...register("password", { required: "password filed required" })} />
                    <span onClick={() => setShow(!show)}>{show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                    {errors.password && <p className='font-semibold text-red-500'>{errors.password.message}</p>}

                    <label className="label text-black mt-2 font-semibold"><input type="checkbox" className="checkbox checkbox-info" />Accept Term & Conditions</label>

                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Registerpage;