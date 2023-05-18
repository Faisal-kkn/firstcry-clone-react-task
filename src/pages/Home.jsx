import Slider from "react-slick";
import { PremiumCard, GridSystem, GridAd } from '../components/index'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const HomePage = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const PremiumCardData = [
        {
            img: '//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29852.webp',
            heading: 'Picks to Fawn Over | Up to 24M',
            subhead: 'Rompers, Tops, Sets &amp; more',
            latest: true
        },
        {
            img: '//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29859.webp',
            heading: 'Athletic &amp; Fun | 4 - 14Y',
            subhead: 'Athleisure &amp; Footwear Collection',
            latest: true
        },
        {
            img: '//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29862.webp',
            heading: 'Keep Yourself Cool &amp; Comfy | Up to 12Y',
            subhead: 'Swimwear',
            latest: true
        },
        {
            img: '//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29865.webp',
            heading: 'Stay Fresh &amp; Healthy',
            subhead: 'Bath &amp; Skin Care Products',
            latest: true
        },
        {
            img: '//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29861.webp',
            heading: 'Elegant &amp; Traditional | 3 - 14Y',
            subhead: 'Ethnic Wear Collection',
            latest: true
        },
        {
            img: '//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29864.webp',
            heading: 'Cheerful Picks | Up to 14Y',
            subhead: 'Shorts, Skirts, Jeans &amp; More',
            latest: true
        },
        {
            img: '//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29863.webp',
            heading: 'The Style Diaries | Up to 14Y',
            subhead: 'Shop Shirts, Eyewear &amp; More',
            latest: true
        },
        {
            img: '//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29866.webp',
            heading: 'Be Beautiful | Up to 14Y',
            subhead: 'Frocks, Dresses, Shirts, Sets &amp; more',
            latest: false
        },
        {
            img: '//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29851.webp',
            heading: 'Stay Fashion Forward | 4 - 14Y',
            subhead: 'Tees, Bottoms, Frocks &amp; more',
            latest: false
        },
        {
            img: '//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29854.webp',
            heading: 'Trendsetting Accessories | Up to 14Y',
            subhead: 'Sunglass, Hats, Hairbands &amp; more',
            latest: false
        },
        {
            img: '//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29853.webp',
            heading: 'The Brand Hustle | 3 - 16Y',
            subhead: 'Tops, Tees, Bottoms, Frocks &amp; more',
            latest: false
        },
        {
            img: '//cdn.fcglcdn.com/brainbees/images/boutique/670x670/29857.webp',
            heading: 'Dive In Fun',
            subhead: 'Baby Gear | Nursery | Toys &amp; Gaming',
            latest: false
        },
    ]

    const checkList = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_06.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_07.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_08.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_09.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_10.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_11.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_12.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_13.jpg',
    ]

    const brands = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_19.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_20.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_21.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_22.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_23.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_1111101032022_24.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_25.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_26.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_27.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_28_doodle_poodle.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_0103202_ED_A_MAMA.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_30.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_31.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_32.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_33.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_34.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_35.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_36.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_37.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_38.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_pine_active_spring_01032022_39.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring__1111101032022_40.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring__1111101032022_41.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_42.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_43.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_44.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_new_desktop_spring_12052022_45.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_46_EARTHY_TOUCH.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_skechesr_12052022_47.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring__1111112052022_48.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_new_12052022_49.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_50.jpg',
    ]

    const baby = {
        heading1: 'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_02.jpg',
        diapers: [
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_03.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_04.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_05.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_06.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_07.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_08.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_09.jpg',
        ],
        heading2: 'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_10.jpg',
        bath: [
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_11.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_12.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_13.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_14.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_15.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_16.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_17.jpg',
        ]
    }

    const feeding = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_02.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_03.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_04.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_05.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_06.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_07.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_08.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_09.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_10.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_11.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_12.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_13.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_14.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_15.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_16.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_17000.jpg',
    ]

    const toys = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_02.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_03.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_04.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_05.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_06.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_07.jpg',
    ]

    const puzzle = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_08.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_09.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_10.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_11.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_12.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_13.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_14.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_15.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_16.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_17.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_18.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_19.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_20.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_21.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_22.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_23.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_24.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_25.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_26.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_27.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_28.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_29.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_30.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_31.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_32.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_33.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_34.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_35.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_36.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_37.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_38.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_39.jpg',
    ]

    const shopByAge = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_42.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_43.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_44.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_45.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_46.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_47.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_48.jpg',
    ]

    const brandStore = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_50.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_51.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_52.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_53.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_54.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_55.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_56.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_57.jpg',
    ]

    const gearActivity = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_gear_&_activity_210323_19.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_gear_&_activity_210323_20.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_gear_&_activity_210323_21.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_gear_&_activity_210323_22.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_gear_&_activity_210323_23.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_gear_&_activity_210323_24.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_gear_&_activity_210323_25.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_gear_&_activity_210323_26.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_gear_&_activity_210323_27.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_gear_&_activity_210323_28.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_gear_&_activity_210323_29.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_gear_&_activity_210323_30.jpg',
    ]

    const library = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_97.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_98.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_99.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_100.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_101.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_102.jpg',
    ]

    const puzzle2 = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_103.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_104.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_105.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_106.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_107.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_108.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_109.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_110.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_111.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_112.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_113.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_114.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_115.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_116.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_117.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_118.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_119.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_120.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_121.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_122.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_123.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_124.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_125.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_126.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_127.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_128.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_129.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_130.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_131.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_132.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_133.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_134.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_135.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_136.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_137.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_138.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_139.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_140.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_141.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_142.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_143.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_144.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_145.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_146.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_147.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_148.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_149.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_150.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_151.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_152.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_153.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_154.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_155.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_156.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_157.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_158.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_159.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_160.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_161.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_162.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_163.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_164.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_165.jpg',
    ]

    const authors = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_180.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_181.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_182.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_183.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_184.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_185.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_186.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_187.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_188.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_189.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_190.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_191.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_192.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_193.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_194.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_195.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_196.jpg',
    ]

    const sportsGadgets = {
        gadgets1: [
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_60.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_61.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_62.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_63.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_64.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_65.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_66.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_67.jpg',
        ],
        gadgets2: [
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_68.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_69.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_70.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_71.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_72.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_73.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_74.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_75.jpg',
        ]
    }

    const brandStores = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_80.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_81.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_82.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_83.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_84.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_85.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_86.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_87.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_88.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_89.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_90.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_91.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_92.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_93.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_94.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_95.jpg',
    ]

    const babyProducts = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_32.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_33.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_34.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_35.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_36.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_37.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_38.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_39.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_40.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_41.jpg',
    ]

    const healthSafty = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_01.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_02.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_03.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_04.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_05.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_06.jpg',
    ]

    const personalCare = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_08.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_09.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_10.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_11.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_12.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_13.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_14.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_15.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_16.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_17.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_182.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_19.jpg',
    ]

    const mom = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_02.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_03.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_04.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_05.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_06.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_07.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_08.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_09.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_10.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_11.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_12.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_13.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_14.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_15.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_16.jpg',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_17.jpg',
    ]

    const store = {
        heading1: 'Bring The Spring ',
        bringTheSpring: [
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/615_384_spring22_her_160222_01.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/615_384_spring22_him_160222_02.jpg',
        ],
        heading2: 'Occasion Store!',
        occasionStore: [
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/615_384_party_edit_160222_01.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/615_384_traditional_saga_160222_02.jpg',
        ],
        heading3: 'Pick Your Styles',
        yourStyles: [
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/405_538_shorts_and_skirts_160222_01.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/405_538_onesies_160222_02.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/405_538_pajamas_160222_03.jpg',
        ],
        heading4: 'The Brand Edit ',
        brandEdit: [
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/299_384_pinekids_160222_01.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/299_384_carters_160222_02.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/615_384_babyhug_160222_03.jpg',
        ],
        heading5: 'Trendy Add Ons',
        trendyAdd: [
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/405_538_casual_shoes_160222_01.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/405_538_smart_watches_160222_02.jpg',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/405_538_sunglasses_160522_03.jpg',
        ],

    }

    const size = useWindowSize();    

    return (
        <>
            <main className="hidden">
                <Slider {...settings}>
                    <div>
                        <img className="mx-auto" src="https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_buy3_vacay_desktop1684219258601.jpg" alt="slider 1" />
                    </div>
                    <div>
                        <img className="mx-auto" src="https://cdn.fcglcdn.com/brainbees/banners/merchf_fisttimeuser_hp1683484904559.jpg" alt="slider 1" />
                    </div>
                    <div>
                        <img className="mx-auto" src="https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_btc_17thmay1684241425483.jpg" alt="slider 1" />
                    </div>
                </Slider>

                <section className=" bg-[#eee] py-8">
                    <div className="mx-auto w-11/12 px-4 sm:px-3 lg:px-2 container">
                        <p className="text-center pb-5 text-[24px] font-medium">PREMIUM BOUTIQUES </p>
                        <div className="grid grid-cols-3 gap-5">
                            {
                                PremiumCardData.map((card, index) => {
                                    return (
                                        <PremiumCard key={index} cardData={card} />
                                    )
                                })
                            }
                        </div>
                        <div className="my-3 py-4 w-full bg-white text-center rounded"> <Link to={'/'}>View All Boutiques <ChevronDoubleRightIcon className="h-6 inline" /></Link></div>
                    </div>
                </section>

                <section className="bg-[#f5f5f5] py-8">
                    <div className="mx-auto w-11/12 px-4 sm:px-3 lg:px-2 container grid">
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_01.jpg" alt="" className="w-full" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_02.jpg" alt="" className="w-full" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_03.jpg" alt="" className="w-full" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_04.jpg" alt="" className="w-full" />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_05.jpg" alt="" className="w-full" />

                        <GridSystem col={8} data={checkList} />
                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_223_desktop_summer_080323_47.jpg" alt="" className="w-full" />
                        <GridSystem col={8} data={brands} className={'px-5 bg-white'} />
                    </div>
                    <div className="mx-auto w-11/12 px-4 sm:px-3 lg:px-2 container mt-4" >
                        <div className="row bg-white">
                            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_14.jpg" alt="" className="w-full" />
                            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_15.jpg" alt="" className="w-full" />
                            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_16.jpg" alt="" className="w-full" />
                            <div className="grid grid-cols-2">
                                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_18.jpg" alt="" className="w-full" />
                                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_19.jpg" alt="" className="w-full" />
                                <div>
                                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_20.jpg" alt="" />
                                    <div className="grid grid-cols-5">
                                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_22.jpg" alt="" />
                                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_23.jpg" alt="" />
                                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_24.jpg" alt="" />
                                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_25.jpg" alt="" />
                                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_26.jpg" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_21.jpg" alt="" />
                                    <div className="grid grid-cols-5">
                                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_27.jpg" alt="" />
                                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_28.jpg" alt="" />
                                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_29.jpg" alt="" />
                                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_30.jpg" alt="" />
                                        <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_31.jpg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_essentials_200323_01.jpg" alt="" />

                            <img src={baby.heading1} alt="" />
                            <GridSystem col={7} data={baby.diapers} />

                            <img src={baby.heading2} alt="" />
                            <GridSystem col={7} data={baby.bath} />

                            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_feeding_&_kids_food_210323_01.jpg" alt="" />
                            <GridSystem col={8} data={feeding} />

                            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_01.jpg" alt="" />
                            <GridSystem col={6} data={toys} />
                            <GridSystem col={8} data={puzzle} />

                            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_40.jpg" alt="" />
                            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_41.jpg" alt="" />
                            <GridSystem col={7} data={shopByAge} />

                            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_49.jpg" alt="" />
                            <GridSystem col={8} data={brandStore} />

                            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_gear_&_activity_210323_18.jpg" alt="" />
                            <GridSystem col={6} data={gearActivity} />

                            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_96.jpg" alt="" />
                            <GridSystem col={6} data={library} />

                            <GridSystem col={9} data={puzzle2} />

                            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_179.jpg" alt="" />
                            <div className={`grid`} style={{ gridTemplateColumns: 'repeat(17, minmax(0, 1fr))' }}>
                                {
                                    authors.map((item, index) => {
                                        return (
                                            <img key={index} src={item} alt={item} />
                                        )
                                    })
                                }
                            </div>
                            <div className="grid grid-cols-2">
                                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_58.jpg" alt="" />
                                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_59.jpg" alt="" />
                            </div>
                            <div className={`flex w-full flex-wrap`}>
                                {
                                    sportsGadgets.gadgets1.map((item, index) => {
                                        return (
                                            <img key={index} src={item} alt={item} className="h-[236px]" />
                                        )
                                    })
                                }
                            </div>
                            <div className={`flex w-full flex-wrap`}>
                                {
                                    sportsGadgets.gadgets2.map((item, index) => {
                                        return (
                                            <img key={index} src={item} alt={item} className="h-[247px]" />
                                        )
                                    })
                                }
                            </div>
                            <div className="grid grid-cols-2">
                                <div>
                                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_76.jpg" alt="" />
                                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_78.jpg" alt="" />
                                </div>
                                <div>
                                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_76.jpg" alt="" />
                                    <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//summer_desktop_210323_79.jpg" alt="" />
                                </div>
                            </div>
                            <GridSystem col={8} data={brandStores} />

                            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_nursery_210323_31.jpg" alt="" />

                            <GridSystem col={5} data={babyProducts} />
                            <GridSystem col={6} data={healthSafty} />

                            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_health_&_safty_210323_07.jpg" alt="" />
                            <GridSystem col={6} data={personalCare} />

                            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_desktop_moms_&_maternity_210323_01.jpg" alt="" />
                            <GridSystem col={8} data={mom} />

                            <GridAd heading={store.heading1} data={store.bringTheSpring} col={2} gap={4} className={'pb-0'} />
                            <GridAd heading={store.heading2} data={store.occasionStore} col={2} gap={4} className={'pb-0'} />
                            <GridAd heading={store.heading3} data={store.yourStyles} col={3} gap={4} className={'pb-0'} />
                            <GridAd heading={store.heading4} data={store.brandEdit} col={3} gap={3} className={'pb-0'} styles={{ gridTemplateColumns: '1fr 1fr 2fr' }} />
                            <GridAd heading={store.heading5} data={store.trendyAdd} col={3} gap={4} className={'pb-5'} />
                        </div>
                    </div>
                </section>

                <section className="bg-[#f5f5f5] pt-8 pb-12">
                    <div className="mx-auto w-11/12 px-4 sm:px-3 lg:px-2 container">
                        <div className="grid grid-cols-3 px-[50px] gap-10">
                            <div className="bg-white flex">
                                <div className="text-[12px]  p-4">
                                    <p className="inline">Our new Mobile Apps, fast, easy &  convenient, </p>
                                    <Link to={'#'} className="font-medium">Download Now</Link>
                                    <div className="w-[172px] h-[54px] mt-2" style={{ backgroundImage: `url('https://cdn.fcglcdn.com/brainbees/images/n/sprite-top4.png')`, backgroundPosition: '-925px -5px' }}></div>
                                </div>
                                <div className="w-[235px] h-[123px] mt-2" style={{ backgroundImage: `url('https://cdn.fcglcdn.com/brainbees/images/n/sprite-top4.png')`, backgroundPosition: '-633px -28px' }}></div>
                            </div>
                            <div className="">
                                <img src="https://cdn.fcglcdn.com/brainbees/images/contests-banner-for-website.jpg" alt="" className="mx-auto" />
                            </div>
                            <div className="bg-white flex p-4">
                                <div className="w-[130px] h-[80px] mt-4" style={{ backgroundImage: `url('https://cdn.fcglcdn.com/brainbees/images/n/sprite-top4.png')`, backgroundPosition: '-930px -60px' }}></div>
                                <div className="text-[12px]">
                                    <p className="text-[16px]">Register & Get Rs.2500</p>
                                    <p className="inline">worth of Cash Coupons to begin your Shopping</p>
                                    <p className="text-[16px] mt-3">REGISTER NOW</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-[50px] mt-10">
                            <img src="https://cdn.fcglcdn.com/brainbees/images/intellitots-franchise-1dec22.webp" alt="" className='w-full' />
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
};
