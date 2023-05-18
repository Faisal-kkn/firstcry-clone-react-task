export const PremiumCard = ({ cardData }) => {
    return (
        <div className="rounded-md overflow-hidden premium-card-body">
            <div className="relative">
                <img src={cardData.img} alt="" />
                <div className="bg-slate-600 p-3 w-[90%] mx-auto text-center absolute bottom-0 left-[5%] bg-[#0000008f] text-[#f2a653] mb-5 rounded image-box hidden">
                    Picks to Fawn Over | Up to 24M
                </div>
            </div>
            <div className="p-5 bg-white relative">
                <h6>{cardData.heading}</h6>
                <p className="text-left inline-block lead" >{cardData.subhead}</p>
                <h5 className="text-left font-medium hidden mt-2" >SHOP NOW</h5>
                {
                    cardData.latest && <h6 className=" text-primary absolute bottom-5 right-5 text-[14px]">NEW TODAY</h6>
                }
            </div>
        </div>
    )
}