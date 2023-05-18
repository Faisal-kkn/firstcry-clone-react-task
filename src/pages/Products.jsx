import { useWindowSize, Sidebar, Product } from '../components/index'

export const Products = () => {

    const size = useWindowSize();

   

    return (
        <main className='bg-[#eee]'>
            <div className="bg-white mx-auto w-11/12 px-4 sm:px-3 lg:px-2 container hidden lg:block">
                {`Home > Clothes & Shoes > Footwear > Best Sellers`}
            </div>
            <section className=" bg-white py-8 mx-auto w-full lg:w-11/12 px-4 sm:px-3 lg:px-2 container">
                <div className="flex">
                    <div className=' hidden lg:flex'>
                        <Sidebar />
                    </div>
                    <div className='w-full'>
                        <div className='justify-between hidden lg:flex'>
                            <div>
                                <p className="text-[18px] font-medium">Clothes & Shoes <span className='text-[#9e9e9e] text-[12px]'>(123394 Results)</span></p>
                                <p className='text-[#555] text-[14px]'>Shop from 123394 Footwear online at FirstCry.com with prices starting at Rs. 123.</p>
                            </div>
                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                            <Product />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
