import React from 'react'
import Image from 'next/image';
import { getProducts } from '@/lib/action';
import Link from 'next/link';
import Header from '@/components/Header';

const Page = async () => {

  const data = await getProducts();

  return (
    <section className='flex flex-col w-full justify-center items-center'>
      <Header />
      <div className='flex flex-col w-[90%] items-center justify-center mt-12'>
        <h1 className='text-[32px] text-primary-600 font-semibold mb-6'>All Products</h1>
        <div className='grid grid-cols-3 w-full  gap-6 max-sm:flex-col max-sm:flex mb-12 max-lg:grid-cols-2'>
          {data.map((item: any) => (
            <Link href={`/product/${item.id}`} key={item.id}>
              <div className='flex flex-col w-full justify-center items-center rounded-lg border border-primary-500 h-[700px] px-2.5 py-2 gap-3 max-sm:h-[800px]'>
                <div className='flex w-full justify-center'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={250}
                    className='w-full object-contain'
                    priority
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
    </section>
  );
};

export default Page;