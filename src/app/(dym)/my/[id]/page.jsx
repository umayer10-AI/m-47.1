import Headers from '@/component/Headers';
import Press from '@/component/Press';
import RightSide from '@/component/RightSide';
import { allNews } from '@/lib/fetching';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const f = await allNews(id)
    const data = f[0]
    // console.log(data)

    return (
        <div className='max-w-[80%] mx-auto mb-20'>
            <Headers></Headers>
            <div className='grid grid-cols-4 gap-5'>
                <div className='col-span-3'>
                    <h2 className='text-xl font-bold mb-3'>Dragon News</h2>
                    <div className='space-y-3 p-4 shadow-xl rounded-xl'>
                        <img src={data.image_url} alt="logo" className='w-full h-80 rounded-2xl object-cover' />
                        <h2 className='text-2xl font-bold'>{data.title}</h2>
                        <h2>{data.details}</h2>
                        
                        <Press></Press>
                    </div>
                </div>
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default page;