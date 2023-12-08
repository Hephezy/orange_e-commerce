import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='flex w-full justify-center items-center py-5'>
            <div className='flex w-[90%] justify-center items-center'>
                <div className='flex w-1/2'>
                    <Link href="/">
                        <p className='text-[32px] font-bold text-primary-500'>
                            Shop<span className='text-red m-0'>Best</span>
                        </p>
                    </Link>
                </div>
                <div className='flex w-full justify-center items-center gap-8 mr-[250px] max-sm:mr-0 max-sm:ml-8'>
                    <Link href="/">
                        <p className='text-[24px] text-primary-500 font-medium'>Home</p>
                    </Link>
                    <Link href="/product">
                        <p className='text-[24px] text-primary-500 font-medium'>Products</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;