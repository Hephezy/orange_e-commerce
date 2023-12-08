import { getCategories } from '@/lib/action';
import Image from 'next/image';
import Link from 'next/link';

const ShopByCategory = async () => {

    const data = await getCategories();

    return (
        <div className='flex w-[90%] my-12'>
            <div className='flex flex-col w-full'>
                <h1 className='text-[32px] text-primary-500 font-medium mb-8'>Shop By Category</h1>
                <div className='grid grid-cols-4 w-full justify-center items-center gap-6 max-sm:flex-col max-sm:flex max-lg:grid-cols-3'>
                    {data.map((item: any) => (
                        <Link href="/product" key={item.title}>
                            <div className='flex flex-col w-full justify-center items-center rounded-lg bg-[#F4F6F8] shadow-2xl h-[500px] px-2.5 py-2 gap-3 max-sm:h-[600px]'>
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
                                    <h1 className='text-primary-500 text-[28px] font-bold flex-wrap'>{item.title}</h1>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopByCategory;