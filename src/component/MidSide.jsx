import { getNews } from '@/lib/fetching';
import React from 'react';
import ZeroLength from './ZeroLength';
import Image from 'next/image';
import { FaEye, FaStar } from 'react-icons/fa6';
import Link from 'next/link';

const MidSide = async ({id}) => {

    const data = await getNews(id)
    // console.log(data)

    return (
        <div className="flex flex-col gap-5">
        <h2 className='text-xl font-bold'>Dragon News Home</h2>
      {data.length === 0 ? (
        <ZeroLength></ZeroLength>
      ) : (
        data.map((v, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-4 space-y-4">
            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  height={100}
                  width={100}
                  src={v.author.img}
                  alt="author"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="font-semibold">{v.author.name}</h2>
                  <p className="text-sm text-gray-400">
                    {v.author.published_date}
                  </p>
                </div>
              </div>

              {/* icons */}
              <div className="flex gap-3 text-gray-400 text-xl">
                <span>🔖</span>
                <span>🔗</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold leading-snug">{v.title}</h2>

            {/* Image */}
            <img
              src={v.image_url}
              alt="news"
              className="w-full h-60 object-cover rounded-lg"
            />


            <p className="text-gray-500 text-sm">
              {v.details.slice(0, 150)}...
              <span className="text-orange-500 font-semibold cursor-pointer ml-1">
                Read More
              </span>
            </p>

            <div className="flex items-center justify-between border-t pt-3">

              <div className="flex items-center gap-2 text-orange-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 ml-1">{v.rating.number}</span>
              </div>
              <Link href={`/my/${v._id}`} className="btn btn-primary">
                See Details
              </Link>

              <div className="flex items-center gap-2 text-gray-500">
                <FaEye />
                <span>{v.total_view || 0}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
    );
};

export default MidSide;