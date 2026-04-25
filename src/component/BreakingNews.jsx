import React from 'react';
import Marquee from 'react-fast-marquee';
import { HiH2 } from 'react-icons/hi2';

const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

const BreakingNews = () => {
    return (
        <div className='max-w-[80%] mx-auto flex gap-3 bg-gray-100 py-2 px-2'>
            <button className='btn bg-red-600 text-white'>Latest</button>
                <Marquee>
                    <div className='font-semibold flex gap-5'>
                            {
                                news.map(v => <h2 key={v._id}>{v.title}</h2>)
                            }
                    </div>
                </Marquee>
        </div>
    );
};

export default BreakingNews;