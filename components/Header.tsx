import React from 'react'
import Image from 'next/image';

const Header = () => {
    return (
        <div className='flex w-full justify-center items-center'>
            <div className='flex w-[90%] justify-between items-center max-sm:flex-col gap-5'>
                <div className='flex flex-col w-full justify-center items-center gap-3'>
                    <h1 className='flex text-[48px] text-primary-500 font-extrabold max-lg:text-[24px]'>Find the best quality products that suits your need</h1>
                    <p className='text-[18px] text-light-3 font-normal '>
                        We provides you with quality products that are made from the state of the art technology
                    </p>
                </div>
                <div className='flex w-full justify-center items-center'>
                    <Image
                        src="/assets/images/15-inch-macbook-air-2tb-midnight.png"
                        alt="product"
                        width={560}
                        height={440}
                        className='w-full'
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;