import React from 'react';
import Image from 'next/image';
import { URLProps } from '@/types';
import { getProductsById } from '@/lib/action';
import EditDescription from '@/components/EditDescription';
import SimilarProducts from '@/components/SimilarProducts';

const Page = async ({ params }: URLProps) => {

    const data = await getProductsById({ itemId: params.id });

    return (
        <section className='flex flex-col w-full justify-center items-center'>
            <div className='flex w-[90%] justify-center items-center max-sm:flex-col gap-8'>
                <div className='flex w-1/2 justify-center items-center max-sm:w-full'>
                    <Image
                        src={data.image}
                        alt={data.title}
                        width={400}
                        height={500}
                        className='object-contain h-fit'
                        priority
                    />
                </div>
                <div className='flex flex-col w-1/2 max-sm:w-full'>
                    <h1 className='text-[48px] text-primary-500 font-medium'>{data.title}</h1>
                    <p className='text-[24px] text-light-3 font-medium'>${data.price}</p>
                    <EditDescription 
                      description={data.description}
                      itemId={data.id}
                    />
                </div>
            </div>
            <SimilarProducts 
              itemId={params.id}
            />
        </section>
    );
};

export default Page;