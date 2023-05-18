export const Sidebar = () => {
    return (
        <div className="pl-6 pr-4">
            <p className="text-[13px] font-medium mb-3">DELIVER TO PINCODE <span className="link-demo">673323</span></p>
            <p className="p-2 bg-gray-200 ">FILTER BY</p>
            <p className="py-3">Clothes & Shoes</p>
            <div>
                <div className="mb-2">
                    <input type="checkbox" name="" id="athleisure" />
                    <label htmlFor="athleisure" className="pl-2 text-[14px]">Athleisure & Sportswear  <span className="text-[#9e9e9e]"> (1744)</span></label>
                </div>
                <div className="mb-2">
                    <input type="checkbox" name="" id="Bath" />
                    <label htmlFor="Bath" className="pl-2 text-[14px]">Bath Time<span className="text-[#9e9e9e]"> (1744)</span></label>
                </div>
                <div className="mb-2">
                    <input type="checkbox" name="" id="Caps" />
                    <label htmlFor="Caps" className="pl-2 text-[14px]">Caps, Gloves & Mittens<span className="text-[#9e9e9e]"> (1744)</span></label>
                </div>
                <div className="mb-2">
                    <input type="checkbox" name="" id="Ethnic" />
                    <label htmlFor="Ethnic" className="pl-2 text-[14px]">Ethnic Wear  <span className="text-[#9e9e9e]"> (1744)</span></label>
                </div>
            </div>
        </div>
    )
}