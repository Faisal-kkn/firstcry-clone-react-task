export const GridSystem = ({ col, data, className = '', imgClass = '', key}) => {
    return (
        <div className={`grid grid-cols-${col}  ${className} `}>
            {
                data.map((item, index) => {
                    return (
                        <img key={key+''+index} src={item} alt={item} className={`w-full ${imgClass} `} />
                    )
                })
            }
        </div>
    )
}