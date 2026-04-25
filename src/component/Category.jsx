import { getCategories } from '@/lib/fetching';
import React from 'react';
import CategoryList from './CategoryList';

const Category = async ({id}) => {

    const f = await getCategories()
    const data = f.data.news_category
    // console.log(data)

    return (
        <div>
            <h2 className='text-xl font-bold mb-3'>All Caterogy</h2>
            <div className='flex flex-col gap-2'>
                {
                    data.map(v => <CategoryList key={v.category_id} p={v} id={id}></CategoryList>)
                }
            </div>
        </div>
    );
};

export default Category;