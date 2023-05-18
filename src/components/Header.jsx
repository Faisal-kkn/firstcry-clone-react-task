import { MagnifyingGlassIcon, MapPinIcon, HeartIcon, ShoppingCartIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export const Header = () => {

    const topMenu = [
        'Stores & Preschools',
        'Support',
        'Track Order',
        'FirstCry Parenting',
        'Login / Register',
    ]

    const mainMenu = [
        'BOY FASHION',
        'GIRL FASHION',
        'Footwear',
        'Toys',
        'Diapering',
        'Gear',
        'Feeding',
        'Bath',
        'Nursery',
        'Moms',
        'Health',
        'Boutiques',
    ]

    return (
        <>
            <div className="mx-auto w-11/12 px-4 sm:px-3 lg:px-2 container">
                <div className="flex justify-between py-[15px] items-center">
                    <div className="flex gap-3 items-center">
                        <div className="logo">
                            <img src="//cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="Logo" />
                        </div>
                        <div className="border text-sm w-[335px] rounded-sm relative h-[29px]">
                            <input type="text" placeholder="Search for a Category, Brand or Product" className='p-1 pl-3 h-full w-full text-black text-[13px] outline-1 focus:outline-primary' />
                            <MagnifyingGlassIcon className='absolute right-2 top-1 h-5 text-primary' />
                        </div>
                    </div>
                    <div className=" flex h-[20px]">
                        <div className='cursor-pointer px-2 border-r-2 text-[12px] text-gray-500 flex '>
                            <MapPinIcon className='h-8 inline-block' />
                            <div>
                                <span>Select location</span>
                                <span className='block font-medium'>673323</span>
                            </div>
                        </div>
                        <ul className="flex gap-1">
                            {
                                topMenu.map((item, index) => {
                                    return (
                                        <li key={index} className='text-center cursor-pointer px-1 border-r-2 text-[12px] text-gray-500'>{item}</li>
                                    )
                                })
                            }
                        </ul>
                        <div className='cursor-pointer px-2 border-r-2 text-[12px] text-gray-500 flex '>
                            <HeartIcon className='h-5 inline-block pr-1' />
                            <span>Shortlist</span>
                        </div>
                        <div className='cursor-pointer px-2 text-[12px] text-gray-500 flex items-center'>
                            <ShoppingCartIcon className='h-8 inline-block pr-1' />
                            <span className='font-medium'>Cart</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-yellow-400 shadow-sm'>
                <div className="mx-auto w-11/12 sm:px-3 lg:px-2 flex gap-2 uppercase font-medium items-center h-full">
                    <div className='text-center cursor-pointer px-1 text-[13px]  hover:bg-white py-3'>
                        <span> All Categories</span>
                        <ChevronDownIcon className='h-5 inline-block pl-1' />
                    </div>
                    <ul className="flex gap-2 h-[40px] items-center">
                        {
                            mainMenu.map((item, index) => {
                                return (
                                    <li key={index} className='text-center cursor-pointer px-1 text-[13px] hover:bg-white py-3'><Link to={'/products'}>{item}</Link></li>
                                )
                            })
                        }
                    </ul>
                    <div className='text-center cursor-pointer px-1 text-[13px] hover:bg-white'>
                        <img src="//cdn.fcglcdn.com/brainbees/images/n/club_logo.png" alt="menu logo" className='h-5' />
                    </div>
                    <div className='text-center cursor-pointer px-1 text-[13px]  hover:bg-white'>
                        <img src="//cdn.fcglcdn.com/brainbees/banners/FC-menu-carters-logo.jpg" alt="menu logo" className='h-11' />
                    </div>
                </div>
            </div>
        </>
    )
}