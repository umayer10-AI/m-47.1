import Category from '@/component/Category';
import RightSide from '@/component/RightSide';
import React from 'react';

const page = () => {
  return (
    <div className='grid grid-cols-3 max-w-[80%] mx-auto'>
        {/* <h2 className='text-3xl font-bold text-center my-5'>Home Page</h2> */}
        <Category></Category>
        <RightSide></RightSide>
    </div>
  );
};

export default page;