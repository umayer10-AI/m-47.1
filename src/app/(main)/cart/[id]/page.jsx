import Category from '@/component/Category';
import MidSide from '@/component/MidSide';
import RightSide from '@/component/RightSide';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    // console.log(id)

    return (
        <div className='grid grid-cols-5 max-w-[80%] mx-auto gap-5'>
            
            <Category id={id}></Category>

            <div className='col-span-3'>
                <MidSide id={id}></MidSide>
            </div>

            <RightSide></RightSide>
        </div>
    );
};

export default page;