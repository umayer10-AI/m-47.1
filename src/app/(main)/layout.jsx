import BreakingNews from '@/component/BreakingNews';
import Headers from '@/component/Headers';
import Navbar from '@/component/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Headers></Headers>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default layout;