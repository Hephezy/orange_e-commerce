import { getSimilarProducts } from '@/lib/action';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    itemId: string;
}

const SimilarProducts = async ({ itemId }: Props) => {

    const data = await getSimilarProducts({ itemId: itemId });

    return (
        <div className='flex w-[90%] my-12'>
            <div className='flex flex-col w-full'>
                <h1 className='text-[32px] text-primary-500 font-medium mb-8'>Similar Products</h1>
                <div className='grid grid-cols-5 w-full justify-center items-center gap-6 max-sm:flex-col max-sm:flex'>
                    {data.length > 0
                        ? data.map((item: any) => (
                            <Link href={`/product/${item.id}`} key={item.id}>
                                <div className='flex flex-col w-full justify-center items-center rounded-lg border border-primary-500 h-[450px] px-2.5 py-2 gap-3 max-sm:h-[600px]'>
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
                        ))
                        : (
                            <div className='flex w-full mt-6'>
                                <Link href="/product" className='flex flex-col gap-4'>
                                    <h1 className='text-[24px] text-red font-medium'>No Similar Products</h1>
                                    <button className='bg-black text-primary-500 py-2.5 px-5'>Explore other Products</button>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SimilarProducts; 