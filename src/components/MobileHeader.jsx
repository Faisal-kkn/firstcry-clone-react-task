import { ChevronDownIcon, MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, MapPinIcon } from '@heroicons/react/24/solid'

export const MobileHeader = ({ cart }) => {

    return (
        <>
            <div className="container">
                <div className="row bg-white p-5 shadow-md">
                    <header className="flex justify-between">
                        <div className='flex items-center gap-3'>
                            <div className="rounded-full overflow-hidden w-9 h-9">
                                <img src="https://cdn.fcglcdn.com/brainbees/images/m/pall_new.png" alt="" className="w-full" />
                            </div>
                            <div>
                                <p className='text-[14px] font-medium'>Shop for <ChevronDownIcon className='h-6 inline text-[#9e9e9e]' /></p>
                                <p className='text-[12px]'>All</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <MagnifyingGlassIcon className='h-8 text-[#9e9e9e]' />
                            <HeartIcon className='h-8 text-[#9e9e9e]' />
                            <div className='relative'>
                                <ShoppingCartIcon className='h-8 text-[#9e9e9e]' />
                                <span className='absolute top-[-10px] right-0 bg-[#fcdb65] p-1 text-[11px] rounded-sm'>{cart}</span>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="row">
                    <div className='bg-[#f5f5f5] p-2 flex justify-between items-center'>
                        <div>
                            <MapPinIcon className='h-8 text-[#9e9e9e] inline-block' />
                            <p className=' inline-block font-medium'>Delivery to  - 673323</p>
                        </div>
                        <ChevronDownIcon className='h-6 inline text-[#9e9e9e]' />
                    </div>
                </div>
            </div>
        </>
    )
}