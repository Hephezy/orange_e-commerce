import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='flex w-full justify-center items-center py-8 bg-[#F4F6F8] shadow-lg'>
            <div className='flex flex-col w-full justify-center items-center gap-6'>
                <div className='flex justify-center items-center gap-6'>
                    <Image
                        src="/assets/icons/facebook.svg"
                        alt="facebook"
                        width={20}
                        height={20}
                        className='cursor-pointer'
                    />
                    <Image
                        src="/assets/icons/instagram.svg"
                        alt="instagram"
                        width={40}
                        height={40}
                        className='cursor-pointer'
                    />
                    <Image
                        src="/assets/icons/twitter.svg"
                        alt="twitter"
                        width={40}
                        height={40}
                        className='cursor-pointer'
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex w-full justify-center items-center gap-4'>
                        <p>Info</p>
                        <p> Support</p>
                        <p>Marketing</p>
                    </div>
                    <div className='flex w-full justify-center items-center gap-4'>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;