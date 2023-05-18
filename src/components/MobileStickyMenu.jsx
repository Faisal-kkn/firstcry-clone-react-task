
import { HomeIcon, PlayCircleIcon, HeartIcon, UserIcon, Bars3Icon } from '@heroicons/react/24/solid'

export const MobileStickyMenu = () => {
    return (
        <div className="fixed bottom-0 bg-white w-full px-5 py-2 flex justify-between text-center items-center border-t z-50">
            <div className="text-[10px] text-primary text-center">
                <HomeIcon className='h-6 mx-auto' />
                <p className=" ">Shopping</p>
            </div>
            <div className=" text-[10px] text-center">
                <PlayCircleIcon className='h-6 mx-auto' />
                <p>Explore</p>
            </div>
            <div className=" text-[10px] text-center">
                <HeartIcon className='h-6  mx-auto' />
                <p>Parenting</p>
            </div>
            <div className=" text-[10px] text-center">
                <UserIcon className='h-6  mx-auto' />
                <p>Profile</p>
            </div>
            <div className=" text-[10px] text-center">
                <Bars3Icon className='h-6  mx-auto' />
                <p>Menu</p>
            </div>
        </div>
    )
}