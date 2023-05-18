export const SplashCards = ({ data }) => {
    return (
        <div className="p-3 bg-white m-2 mb-5">
            <div className="relative mb-3">
                <img src={data.img} alt="" className="w-full" />
                <div className="absolute bottom-[20px] right-0 bg-black text-white pl-4 py-1 pr-4" style={{borderRadius: '16px 0 0 16px'}}>{data.left}</div>
            </div>
            <p className="splash-card-heading">{data.heading} <span className="text-primary">| NEW TODAY</span></p>
            <p className="splash-card-description">{data.description}</p>
        </div>
    )
}