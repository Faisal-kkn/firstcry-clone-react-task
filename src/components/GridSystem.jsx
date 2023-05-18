export const GridSystem = ({ col, data, className = '', imgClass = ''}) => {
    return (
        <div className={`grid grid-cols-${col} ${className}`} style={{ gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))` }}>
            {
                data.map((item, index) => {
                    return (
                        <img key={index} src={item} alt={item} className={`w-full ${imgClass} `} />
                    )
                })
            }
        </div>
    )
}