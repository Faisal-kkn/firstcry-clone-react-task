export const FooterLinks = ({ data, className = '' }) => {
    console.log(data);
    return (
        <>
            {
                data.map((item, index)=>{
                    return(
                        <div className={`${className}`} key={index}>
                            <h6 className="border-b border-[#bfd4d5] text-[14px] mb-2 text-[#484848]">{item.heading}</h6>
                            <ul>
                                {
                                    item.links.map((item) => {
                                        return (
                                            <li className="text-[12px] mb-[6px] text-[#575757]">{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </>
    )
}