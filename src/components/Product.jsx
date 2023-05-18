import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../AppContext';

export const Product = ({ data }) => {

    const products = [
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/12449581a.webp',
            description: 'Manyavar Full Sleeves Floral Print Cross Cut Kurta With Pyjama - Navy Blue',
            price: '824.25',
            id: '1'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/12296769a.webp',
            description: 'Babyhug 100% Cotton Antibacterial Finish Sleeveless Slips Pack of 3 - Red Purple',
            price: '888',
            id: '2'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/9415527a.webp',
            description: 'Little Bansi Sleeveless Banarsi Style Kurti With Flared Sharara Pants &amp',
            price: '365',
            id: '3'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/11519754a.webp',
            description: 'Little Hip Boutique Stars Detail Strap On Casual Wear Booties - White',
            price: '120',
            id: '4'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/12613532a.webp',
            description: 'Little Hip Boutique Stars Detail Strap On Casual Wear Booties - White',
            price: '424.25',
            id: '5'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/10963575a.webp',
            description: 'Babyhug Cotton Jersey Knit Full Length Solid Lounge Pants Pack of 5 - Multicolour',
            price: '234234',
            id: '6'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/11644023a.webp',
            description: 'Polka Tots Full Sleeves Butti Printed Open Tieable Angrakha Kurta With Dhoti - White',
            price: '23423',
            id: '7'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/12710024a.webp',
            description: 'Babyhug Cotton Half Sleeves T-Shirt Dino',
            price: '234',
            id: '8'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/13759533a.webp',
            description: 'CrayonFlakes Blocks Printed Tshirt Short Set - Navy - Navy',
            price: '824.25',
            id: '9'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/11847727a.webp',
            description: 'depending upon membership plan. 12-months plan club members receive 2 X',
            price: '824.25',
            id: '10'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/13264680a.webp',
            description: 'Manyavar Full Sleeves Floral Print Cross Cut Kurta With Pyjama - Navy Blue',
            price: '824.25',
            id: '11'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/13104094a.webp',
            description: 'Babyhug 100% Cotton Antibacterial Finish Sleeveless Slips Pack of 3 - Red Purple',
            price: '824.25',
            id: '12'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/11767988a.webp',
            description: 'Little Bansi Sleeveless Banarsi Style Kurti With Flared Sharara Pants &amp',
            price: '824.25',
            id: '13'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/8724651a.webp',
            description: 'Little Hip Boutique Stars Detail Strap On Casual Wear Booties - White',
            price: '824.25',
            id: '14'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/13764381a.webp',
            description: 'Little Hip Boutique Stars Detail Strap On Casual Wear Booties - White',
            price: '824.25',
            id: '15'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/11586932a.webp',
            description: 'Babyhug Cotton Jersey Knit Full Length Solid Lounge Pants Pack of 5 - Multicolour',
            price: '824.25',
            id: '16'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/11670872a.webp',
            description: 'Polka Tots Full Sleeves Butti Printed Open Tieable Angrakha Kurta With Dhoti - White',
            price: '824.25',
            id: '17'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/11440643a.webp',
            description: 'Babyhug Cotton Half Sleeves T-Shirt Dino',
            price: '824.25',
            id: '18'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/12772499a.webp',
            description: 'CrayonFlakes Blocks Printed Tshirt Short Set - Navy - Navy',
            price: '824.25',
            id: '19'
        },
        {
            img: 'https://cdn.fcglcdn.com/brainbees/images/products/300x364/13107455a.webp',
            description: 'depending upon membership plan. 12-months plan club members receive 2 X',
            price: '824.25',
            id: '20'
        },
    ]
    const { setCart } = useContext(UserContext);

    let cart = [];
    let [cartStore, setCartStore] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [])

    const addtoCart = (product) => {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    useEffect(() => {
        setCartStore(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [])
        setCart(cartStore.length)
    }, [])

    

    return (
        <>
            {
                products.map((item, index) => {
                    return (
                        <div className="p-4 bg-white hover:shadow-lg single-product" key={index} >
                            <img src={item.img} alt="" className="w-full" />
                            <div className="pt-3">
                                <h6 className="hover:hidden">{item.description}</h6>
                                <h5 className="font-medium">₹ {item.price}</h5>
                                <p><span className="text-[13px]">Get it by</span><span className="text-[14px] font-medium"> Saturday, May 27 </span></p>
                                <button className="bg-primary px-3 py-2 mt-2" onClick={() => addtoCart(item)}>ADD TO CART</button>

                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}