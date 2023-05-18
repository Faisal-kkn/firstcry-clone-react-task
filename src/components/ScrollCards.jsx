export const ScrollCards = ({data, className=''})=>{
    return(
        <div className="flex overflow-x-scroll">
            {
                data.map((item, index)=>{
                    return(
                        <img key={index} className={`ml-2 ${className}`} src={item} alt="" />
                    )
                })
            }
        </div>
    )
}