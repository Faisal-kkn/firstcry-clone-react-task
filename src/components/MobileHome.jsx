import Slider from "react-slick";
import { GridAd, ScrollCards, GridSystem, SplashCards } from '../components/index'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const MobileHome = () => {

    var mobileSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const shopByCategory = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_1.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_2.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_3.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_4.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_5.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_6.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_7.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_8.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_9.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_10.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_11.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_Summer_28042023.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_13.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_14.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_15.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_16.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_17.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_18.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_19.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_20.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_21.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_22.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_23.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_24.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_25.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_26.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_28.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/SBC_Default_summer_27.webp',
    ]

    const offerAd = [
        'https://cdn.fcglcdn.com/brainbees/banners/newuser_march23-Appstrip.gif',
        'https://cdn.fcglcdn.com/brainbees/banners/wpc_18may23-appstrip.jpg',
    ]

    const premiumAd = [
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/svs_hp_fh_def_11684232928042.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/601684240918485.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/svs_hp_fh_def_31684232989216.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/501684240925693.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/svs_hp_fh_def_51684233053350.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/2991684240933543.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/svs_hp_fh_def_71684233160796.webp',
    ]

    const explore = [
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/fc_explore_2pvibbes1682748006052.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/fc_explore_2ppstylesss1682748032535.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/fc_explore_ddflaunt1682748067296.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/fc_explore_influencersway1682748101538.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/fc_explore_ddhitlisst1682748163688.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/fc_explore_2pppicks1682748202067.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/fc_explore_2ppdayoutt1682748222171.webp',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/fc_explore_2pploookbook1682748252983.jpg"',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/fc_explore_ddbrragg1682748283829.jpg"',

    ]

    const parenting = [
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/8_tools_apr231681907602334.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/1_tools_apr231681907561167.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/3_tools_apr231681907568073.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/4_tools_apr231681907574708.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/5_tools_apr231681907581337.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/6_tools_apr231681907588207.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/7_tools_apr231681907594408.webp',
    ]

    const trendignStore = [
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/club-non-club_babyhug_diaper_p1_trending-store_438x624-1684385077584.webp',
        'https://cdn.fcglcdn.com/brainbees/banners/mobile/cuatio11684211759362.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/temp2_timios_tasty_nutritious_meals_&amp;_snacks_02052023.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/trending_store_SVS_default_17thMay.webp',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
    ]

    const budgetStore = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/budget-store_Def_01_280423.gif',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/budget-store_Def_02_280423.gif',
    ]

    const dealCorner = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Deal_Corner_Tees_Sets_more_default_280423.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Deal_Corner_honeyhap_default_280423_1.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Deal_Corner_babyoye_default_280423.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Deal_Corner_Sets_default_280423_1.webp',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
    ]

    const summerCheckList = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_190423_04.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_190423_05.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_190423_06.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_190423_07.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_190423_08.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_190423_09.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_190423_10.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_190423_11.webp',
    ]

    const brands = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_190423_18.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180523_19.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180523_20.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_21.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_22.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_23.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_24.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180523_25.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_26.webp',
    ]

    const topWear = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_28.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_29.webp'
    ]
    const comfyCool = {
        first: [
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_1044_Comfy_&_cool_Bottoms_Default_020523_02.webp',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_1044_Comfy_&_cool_Bottoms_Default_020523_03.webp'
        ],
        second: [
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_1044_Comfy_&_cool_Bottoms_Default_020523_04.webp',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_1044_Comfy_&_cool_Bottoms_Default_020523_05.webp',
            'https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_1044_Comfy_&_cool_Bottoms_Default_020523_06.webp'
        ]
    }

    const swimSuit = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_37.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_38.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_39.webp'
    ]

    const babyBasics = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_baby_basics_Default_180423_01.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_baby_basics_Default_180423_02.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_baby_basics_Default_180423_03.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_baby_basics_Default_180423_04.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_baby_basics_Default_180423_05.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_baby_basics_Default_180423_06.webp',
    ]

    const loungingStyle = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Summer2_innerwear_Default_180423.gif',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Innerwear_summer_23_Default_180423_03.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Innerwear_summer_23_Default_180423_04.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Innerwear_summer_23_Default_180423_06.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Innerwear_summer_23_Default_180423_05.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Innerwear_summer_23_Default_180423_02.webp',
    ]

    const unleashBrands = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Unleash_the_brands_Default_180423_01.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Unleash_the_brands_Default_180423_07.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Unleash_the_brands_Default_180423_09.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Unleash_the_brands_Default_180423_05.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Unleash_the_brands_Default_180423_03.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Unleash_the_brands_Default_180423_02.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Unleash_the_brands_Default_180423_04.webp',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png" alt="Cucumber',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png" alt="Nike',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png" alt="Tango',
    ]

    const fashionObjects = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_47.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_48.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_49.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_50.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_260423_51.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_260423_52.webp',
    ]

    const perfect = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_54.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_55.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_260423_56.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_57.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_58.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_59.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_60.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_61.webp',
    ]

    const eligent = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_65.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_66.webp'
    ]

    const belovedBrands = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Beloved_Brands_23_Default_180423_01.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Beloved_Brands_23_Default_180423_03.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Beloved_Brands_23_Default_180423_05.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Beloved_Brands_23_Default_180423_07.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Beloved_Brands_23_Default_180423_09.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Beloved_Brands_23_Default_180423_02.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Beloved_Brands_23_Default_180423_04.webp',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
    ]

    const summerDeal = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_essentials_Summer_Essentials_def_02.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_essentials_Summer_Essentials_def_03.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_essentials_Summer_Essentials_def_04.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_essentials_Summer_Essentials_def_05.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_essentials_Summer_Essentials_def_06.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_essentials_Summer_Essentials_def_07.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_essentials_Summer_Essentials_def_08.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_essentials_Summer_Essentials_def_09.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_essentials_Summer_Essentials_def_10.webp',
    ]

    const globalBrands = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_70.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_71.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_72.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_73.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_74.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_75.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_76.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_77.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_78.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_79.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_80.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_190423_81.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_82.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_83.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_84.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_85.webp',
    ]

    const exploreNew = [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Explore_Carousal_170423_01.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Explore_Carousal_250423_04.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Explore_Carousal_170423_02.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Explore_Carousal_170423_05.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Explore_Carousal_170423_03.webp',

    ]

    const mostLoved= [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/458_217_MLB_Def_270423_07.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/458_217_MLB_Def_270423_10.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/458_217_MLB_Def_270423_030.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/458_217_MLB_Def_270423_02.webp',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder_banner.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder_banner.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder_banner.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder_banner.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder_banner.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder_banner.png',
    ]

    const internationalBrands= [
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Summer_Defualt_international_carousal_180223_07.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Summer_Defualt_international_carousal_180223_02.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Summer_Defualt_international_carousal_180223_14.webp',
        'https://cdn.fcglcdn.com/brainbees/images/cattemplate/438_624_Summer_Defualt_international_carousal_180223_06.webp',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',
        'https://cdn.fcglcdn.com/brainbees/images/m/place_holder.png',

    ]

    const splashSale = [
        {
            img: '',
            heading: '',
            discription: '',
        }
    ]

    return (
        <main>
            <div className="p-3">
                <img src="https://cdn.fcglcdn.com/brainbees/banners/test/clubfreeship_202211720637.jpg" alt="" className=" shadow-md rounded-md" />
            </div>
            <Slider {...mobileSettings}>
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
            <ScrollCards data={offerAd} />
            <GridAd heading={'Shop By Category'} data={shopByCategory} col={2} gap={4} className={'pb-0 text-left mx-4 mt-3'} />
            <div className="mx-auto mt-5" style={{ width: 'fit-content' }}>
                <button className="see-all-btn">
                    See All Categories <ChevronRightIcon className="h-4 inline" />
                </button>
            </div>
            <div>
                <img src="https://cdn.fcglcdn.com/brainbees/banners/mobile/svs_mobile_ea_exclusivedeal_topslice_hp1684257906494.png" alt="" />
            </div>
            <div className="pl-4 pt-4">
                <ScrollCards data={premiumAd} className={'w-[200px]'} />
            </div>
            <div className="mt-5 bg-[#ffb6c1]">
                <img src="https://cdn.fcglcdn.com/brainbees/banners/fc_explore_strippp.webp" alt="" />
                <ScrollCards data={explore} className={'w-[200px] p-2 pt-5'} />
            </div>
            <div className="mt-5">
                <img src="https://cdn.fcglcdn.com/brainbees/banners/mobile/1_pfh_apr231681968844875.jpg" alt="" />
                <ScrollCards data={parenting} className={'w-[200px] p-1 pt-5 rounded-sm'} />
            </div>

            <div className="mt-5">
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/TRENDING-STORES_20052020.jpg" alt="" />
                <ScrollCards data={trendignStore} className={'w-[350px] p-1 pt-5 rounded-sm'} />
            </div>
            <div className="mt-5">
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_164_Carousal_280323_01.jpg" alt="" />
                <Slider {...mobileSettings}>
                    <div>
                        <img className="mx-auto" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_769_swimwear_default__020523.webp" alt="slider 1" />
                    </div>
                    <div>
                        <img className="mx-auto" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_769_CharacterStore_Default_020523.webp" alt="slider 1" />
                    </div>
                    <div>
                        <img className="mx-auto" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_769_Rainwear_Default_240423.webp" alt="slider 1" />
                    </div>
                </Slider>
            </div>
            <div>
                <GridSystem col={2} data={budgetStore} />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/budget-store_Def_03_280423.gif" alt="" />
            </div>
            <div className="mt-5 bg-[#ffbb59]">
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_194_DealCorner_Def_280423.gif" alt="" />
                <ScrollCards data={dealCorner} className={'w-[350px] p-2 pt-5'} />
            </div>
            <div>
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_220_Summer2_logo_Default_110523.gif" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_1145_Summer_02_Default_180423_02.jpg" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_190423_03.webp" alt="" />
            </div>
            <div>
                <GridSystem col={4} data={summerCheckList} />
            </div>
            <div>
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_674_Fashion_hit_at_a_steal_banner_260423.jpg" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_590_Summer_02_Default_180423_12.jpg" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_152_Summer_02_Default_180423_13.jpg" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_1071_Summer_02_Default_180523_14.jpg" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_582_Summer_02_Default_170523_15.jpg" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_443_Summer_02_Default_180423_16.jpg" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_17.webp" alt="" />
                <GridSystem col={3} data={brands} />
            </div>
            <div>
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_153_look_book_Default_190423.jpg" alt="" />
                <Slider {...mobileSettings}>
                    <div>
                        <img className="mx-auto" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_739_Look_book_23_Default_180423_03.webp" alt="slider 1" />
                    </div>
                    <div>
                        <img className="mx-auto" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_739_Look_book_23_Default_180423_02.webp" alt="slider 1" />
                    </div>
                    <div>
                        <img className="mx-auto" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_739_Look_book_23_Default_180423_01.webp" alt="slider 1" />
                    </div>
                </Slider>
            </div>
            <div>
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180523_27.webp" alt="" />
                <GridSystem col={2} data={topWear} />
            </div>
            <div>
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_1044_Comfy_&_cool_Bottoms_Default_020523_01.webp" alt="" />
                <GridSystem col={2} data={comfyCool.first} />
                <GridSystem col={3} data={comfyCool.second} />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_122_Summer_02_Default_170523.jpg" alt="" />
            </div>
            <div>
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_159_Summer_02_Default_170523.webp" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_36.webp" alt="" />
                <GridSystem col={3} data={swimSuit} />
            </div>
            <div>
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_500_Swimwear_2504233.jpg" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_153_Summer_02_Default_180423_40.jpg" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_943_Summer_02_Default_180523_41.jpg" alt="" />
                <ScrollCards data={babyBasics} className={'w-[180px] p-2 pt-5'} />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_906_First_Time_on_default_170523.jpg" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_160_Summer_02_Default_180423_42.jpg" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_684_Summer_02_Default_180423_43.jpg" alt="" />
                <ScrollCards data={loungingStyle} className={'w-[170px] p-2 pt-5'} />
            </div>
            <div>
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_143_Summer_02_Default_180423_44.jpg" alt="" />
                <ScrollCards data={unleashBrands} className={'w-[170px] p-2 pt-5'} />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_1035_Summer_02_Default_180423_45.jpg" alt="" />
            </div>
            <div>
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_46.webp" alt="" />
                <GridSystem col={3} data={fashionObjects} />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_53.webp" alt="" />
                <GridSystem col={2} data={perfect} />
            </div>
            <div>
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_130_Summer_02_Default_180423_62.jpg" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_740_Summer_02_Default_180423_63.jpg" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_64.webp" alt="" />
                <GridSystem col={2} data={eligent} />
            </div>
            <div>
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_130_Summer_02_Default_180423_67.jpg" alt="" />
                <ScrollCards data={belovedBrands} className={'w-[165px] p-2 pt-5'} />
            </div>
            <div>
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer_essentials_Summer_Essentials_def_01_270423.webp" alt="" />
                <GridSystem col={3} data={summerDeal} />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_832_Summer_02_Default_170523_68.jpg" alt="" />
            </div>
            <div>
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/Summer_02_Default_180423_69.webp" alt="" />
                <GridSystem col={4} data={globalBrands} />
            </div>
            <div>
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_166_ExploreTitle_def_110523.gif" alt="" />
                <ScrollCards data={exploreNew} className={'w-[165px] p-2 pt-5'} />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_119_LovedBrand_Def_280423.gif" alt="" />
                <ScrollCards data={mostLoved} className={'w-[300px] pt-5'} />
                <img className="mb-4" src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_799_Frocks_Segment_Banner_Malyalam_280423.jpg" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/mobile_cat_new_styles_both_carters_140423.webp" alt="" />
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/750_136_nternationa_Brands_Carousel_300822.jpg" alt="" />
                <ScrollCards data={internationalBrands} className={'w-[300px] pt-5'} />
            </div>
            <div className="bg-[#2f2f2f]">
                <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/Default_176x640_summer23.gif" alt="" />
                {

                }
                <SplashCards />
            </div>
        </main>
    )
}