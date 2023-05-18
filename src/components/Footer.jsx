import { FooterLinks } from './index'

export const Footer = () => {
    const footerMenu = [
        {
            heading: 'CATEGORIES',
            links: [
                'Clothing & Fashion',
                'Toys',
                'Books & CDs',
                'School Supplies',
                'Birthday Party Supplies',
                'Baby Diapering',
                'Feeding & Nursing',
                'Bath & Skin Care',
                'Health & Safety',
                'Baby Gear',
                'Nursery',
                'Moms & Maternity',
                'Gifts',
                'Preschool Admissions',
            ]
        },
        {
            heading: 'FIRSTCRY PARENTING',
            links: [
                'Getting Pregnant',
                'Pregnancy',
                'Baby',
                'Toddler',
                'Preschooler',
                'Big Kid',
                'Vaccination',
                'Growth Tracker',
                'Baby Names',
                'FirstCry Parenting YouTube',
                'Coloring Pages',
            ]
        },
        {
            heading: 'SHIPPING & POLICIES',
            links: [
                'Payments',
                'Shipping Policy',
                'Return & Replacement Policy',
                'Cancellation Policy',
                'Terms of Use',
                'Privacy Policy',
                'Next day & Same day delivery',
                'Responsible Disclosure',
            ]
        },
        {
            heading: 'OUR APPS',
            links: [
                'FirstCry India: Shopping & Parenting',
                'FirstCry India: Shopping & Parenting iOS',
            ]
        },
        {
            heading: 'COMPANY INFO',
            links: [
                'About Us',
                'Contact Us',
                'Brands',
                'F.A.Q.s',
                'FirstCry Stores & Playschool',
            ]
        },
        {
            heading: 'REGIONAL PARENTING',
            links: [
                'FirstCry Hindi Parenting',
                'FirstCry Marathi Parenting',
                'FirstCry Bangla Parenting',
                'FirstCry Arabia Parenting',
                'FirstCry UAE Parenting',
            ]
        },
        {
            heading: 'PAYMENT METHOD',
            links: [
                'Credit Cards',
                'Net Banking',
                'ATM & Debit Cards',
                'COD(Cash on Delivery)',
                'Easy EMI',
            ]
        },
        {
            heading: 'Learning & Education',
            links: [
                'Intellikits',
                'Intellitots',
            ]
        },
        {
            heading: 'OUR OTHER WEBSITES',
            links: [
                'GlobalBees Shopping',
            ]
        },
        {
            heading: 'CONNECT WITH US',
            links: [
                'Facebook',
                'Instagram',
                'Twitter',
                'Youtube',
                'Linkedin',
                'Testimonials',
                'SITEMAP',
                'CLUB CASH',
            ]
        },
        {
            heading: 'SHOP INTERNATIONAL',
            links: [
                'FirstCry UAE',
                'FirstCry KSA',
                'FirstCry KSA(English)',
                'FirstCry Arabia: Shopping & Parenting',
                'FirstCry Arabia: Shopping & Parenting iOS',
            ]
        },
        {
            heading: 'KIDS LEARNING & EDUCATIONAL APPS',
            links: [
                'PlayBees: Kids Learning & Education App',
                'PlayBees: 123 Kids Numbers App',
                'PlayBees: ABC for Kids',
            ]
        },
        // {
        //     heading: 'CAREER AT FIRSTCRY.COM',
        //     links: [
        //         'Current Openings at FirstCry.com',
        //     ]
        // },
    ]


    return (
        <>
            <footer className="mt-2 bg-[#d9f3f4]">
                <div className="mx-auto w-11/12 px-4 sm:px-3 lg:px-2 container ">
                    <div>
                        <div className="footer-top-sticky" style={{ backgroundImage: `url('https://cdn.fcglcdn.com/brainbees/images/sprite-footer1.1.png')`, backgroundPosition: '-122px -81px' }}></div>
                        <div className="grid grid-cols-5 text-center w-10/12 mx-auto">
                            <div>
                                <div className="w-[37px] h-[46px] mx-auto" style={{ backgroundImage: `url('https://cdn.fcglcdn.com/brainbees/images/sprite-footer1.1.png')`, backgroundPosition: '-151px 346px' }}></div>
                                <p className="text-[#676767] hover:text-[#6eacae]">2 Lakhs + <br />  Unique Products</p>
                            </div>
                            <div>
                                <div className="w-[37px] h-[46px] mx-auto" style={{ backgroundImage: `url('https://cdn.fcglcdn.com/brainbees/images/sprite-footer1.1.png')`, backgroundPosition: '-107px 348px' }}></div>
                                <p className="text-[#676767] hover:text-[#6eacae]">5800 Brands</p>
                            </div>
                            <div>
                                <div className="w-[37px] h-[46px] mx-auto" style={{ backgroundImage: `url('https://cdn.fcglcdn.com/brainbees/images/sprite-footer1.1.png')`, backgroundPosition: '-192px 347px' }}></div>
                                <p className="text-[#676767] hover:text-[#6eacae]">7.5 Million <br />   Registered Users</p>
                            </div>
                            <div>
                                <div className="w-[37px] h-[46px] mx-auto" style={{ backgroundImage: `url('https://cdn.fcglcdn.com/brainbees/images/sprite-footer1.1.png')`, backgroundPosition: '-229px 347px' }}></div>
                                <p className="text-[#676767] hover:text-[#6eacae]">Easy Return, Replacement<br /> & Exchange Policy</p>
                            </div>
                            <div>
                                <div className="w-[37px] h-[46px] mx-auto" style={{ backgroundImage: `url('https://cdn.fcglcdn.com/brainbees/images/sprite-footer1.1.png')`, backgroundPosition: '-278px 352px' }}></div>
                                <p className="text-[#676767] hover:text-[#6eacae]">Free Shipping Available <br /> above ₹ 699*</p>
                            </div>
                        </div>
                        <div className="pt-8 grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
                            <div className="grid grid-cols-4 p-[50px] gap-4">
                                <FooterLinks data={footerMenu} />
                            </div>
                            <div className='mt-[50px]'>
                                <img src="https://cdn.fcglcdn.com/brainbees/images/intellitots-franchise-footer-banner.webp" alt="" className='w-full' />
                                {/* <div className="bg-white flex p-4">
                                <div className="w-[130px] h-[80px] mt-4" style={{ backgroundImage: `url('https://cdn.fcglcdn.com/brainbees/images/n/sprite-top4.png')`, backgroundPosition: '-930px -60px' }}></div>
                                <div className="text-[12px]">
                                    <p className="text-[16px]">Register & Get Rs.2500</p>
                                    <p className="inline">worth of Cash Coupons to begin your Shopping</p>
                                    <p className="text-[16px] mt-3">REGISTER NOW</p>
                                </div>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='border-t border-[#4444] pt-5'>
                        <h6 className='text-[13px] font-medium'>FirstCry India ~ Online Store for Baby & Kids Products</h6>
                        <p className='text-[12px]'>Explore kids and baby products galore at FirstCry.com, the Big Store for Little Ones. We at FirstCry.com empathize with you as a mother who always aspires to bestow her newborn, infant, baby or kid with the best things even for their smallest needs. That is why, 'Mommy Knows Best'. From breastfeeding to bathing essentials, right furniture to myriad baby care products, a mother needs them all for her lil' one. This inspires us to offer convenient & hassle-free online shopping not just for babies & kids but for moms-to-be & new moms as well.</p>
                        <p className='text-[12px]'>With 2 Lakh Baby & Kids Products, 2 Million Happy Customers, and 2 Thousand+ top-notch national and international brands like Babyhug, Chicco, Graco, BSA, Johnson & Johnson, Huggies, Pampers, Medela, Pigeon, Mothercare, Fisher-Price, FunSkool, Lego, Disney, Barbie and more you can look forward to an unparalleled shopping experience with us. Shop for baby & kids products online ranging across diapering, feeding & nursing, skin & health care, baby & kids toys, newborn & infant clothing, baby clothes, kids wear, footwear, fashion accessories, baby gear, nursery, kids furniture, gifts, party supplies, books & CDs, school supplies and more at great discounts.</p>
                        <p className='text-[12px]'>With the FirstCry mobile app, now you can shop on the go! Download the FirstCry Android and the iOS app and Voila!</p>
                    </div>
                </div>
            </footer>
        </>
    )
}