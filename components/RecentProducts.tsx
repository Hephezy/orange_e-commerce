import { getRecentProducts } from '@/lib/action';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const RecentProducts = async () => {

    const data = await getRecentProducts();

    return (
        <div className='flex w-[90%] my-12'>
            <div className='flex flex-col w-full'>
                <h1 className='text-[32px] text-primary-500 font-medium mb-8'>Most Recent Products</h1>
                <div className='grid grid-cols-5 w-full justify-center items-center gap-6 max-sm:flex-col max-sm:flex max-lg:grid-cols-3'>
                    {data.map((item: any) => (
                        <Link href={`/product/${item.id}`} key={item.id}>
                            <div className='flex flex-col w-full justify-center items-center rounded-lg border border-primary-500 h-[400px] px-2.5 py-2 gap-3 max-sm:h-[600px]'>
                                <div className='flex w-full justify-center'>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={300}
                                        height={250}
                                        className='w-full object-contain'
                                    />
                                </div>
                                <div className='w-full flex flex-col'>
                                    <h1 className='text-primary-500 text-[18px] font-medium flex-wrap'>{item.title}</h1>
                                    <p className='text-light-3 text-[16px] font-medium'>${item.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentProducts;