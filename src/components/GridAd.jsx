export const GridAd = ({ heading, data, col, gap, className = '', styles = {} }) => {
    return (
        <div className={`p-[50px] ${className}`}>
            <h2 className="text-[24px] font-medium text-center mb-4">{heading}</h2>
            <div className={`grid grid-cols-${col} gap-${gap}`} style={styles}>
                {
                    data.map((item, index) => {
                        return (
                            <img key={index} src={item} alt="" className="w-full" />
                        )
                    })
                }
            </div>
        </div>
    )
}