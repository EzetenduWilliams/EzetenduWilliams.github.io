import Logo from "../assets/logo.png";
import Box1 from "../assets/box-2-bg.png"
import Box2 from "../assets/box-3-bg.png"
import Box3 from "../assets/box-4-bg.png"
import Box4 from "../assets/box-5-bg.png"
import Box5 from "../assets/box-6-bg.png"

import art from "../assets/photograph-content.png"
import website from "../assets/website-content.png"

// HOME
import { FaShoppingBag } from 'react-icons/fa';
import { FaDev } from 'react-icons/fa';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { SiAntdesign } from 'react-icons/si';
import { FiArrowUpRight } from 'react-icons/fi';

// FASHION
import { AiOutlineLogin } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { MdOutlineDarkMode } from 'react-icons/md';

import Women from "../assets/cat-for-women.png"
import Men from "../assets/cat-for-men.png"
import Kids from "../assets/cat-for-kids.png"
import Accessories from "../assets/cat-for-accessories.png"
import PageBg from "../assets/art-work-page-bg.png"


import { RiMenu3Fill } from 'react-icons/ri';



// For home page
export const homePageData = {
    navbar: {
        logo: Logo,
        menuIcon: RiMenu3Fill,
        button: "Toggle Theme",
        menu: [
            {
                id: 1,
                innerHtml: "Home",
                link: "/"
            },
            {
                id: 2,
                innerHtml: "Fashion",
                link: "/fashion"
            },
            {
                id: 3,
                innerHtml: "Software",
                link: "/software"
            },
            {
                id: 4,
                innerHtml: "Art & Craft",
                link: "/art-craft"
            },
            {
                id: 5,
                innerHtml: "About",
                link: "/about"
            },
            {
                id: 6,
                innerHtml: "Contact Us",
                link: "/contact-us"
            },
        ]
    },
    main: {
        movingText: [
            "Welcome to Dkerulative",
            "Explore the world of...",
            "Technology...",
            "Fashion...",
            "and Art.",
            "Subscribe to our newsletter for updates"
        ],
        bgImg: "https://images.unsplash.com/photo-1486308510493-aa64833637bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80",
        descriptionTxt: "Intrigued by beauty, fascinated by technology and fuelled with an everlasting devotion to digital craftsmanship and meaningful aesthetics."
    },
    about: {
        title: "Your total solution to grow with D’kerulative",
        subtitle: "Acquire high-value clients at a low cost, increase retention and grow revenue through targeted referral and loyalty programs.",
        aboutCards: [
            {
                id: 1,
                title: "Software Development",
                icon: FaDev,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at."
            },
            {
                id: 2,
                title: "Fashion Store",
                icon: FaShoppingBag,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at."
            },
            {
                id: 3,
                title: "Design",
                icon: AiOutlineAntDesign,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at."
            },
            {
                id: 4,
                title: "Arts and Craft",
                icon: SiAntdesign,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, scelerisque ut sapien, posuere non. Faucibus egestas consectetur interdum amet id elementum. Lacinia non augue amet at."
            },
        ]
    },
    testimonials: [
        {
            id: 1,
            testimonial: "I didn’t know designing in Webflow could be this individualized. I’d never considered it before, but Landingfolio changed my mind.",
            name: "Chioma Chioma",
            position: "Head of Software"
        },
        {
            id: 2,
            testimonial: "I didn’t know designing in Webflow could be this individualized. I’d never considered it before, but Landingfolio changed my mind.",
            name: "James Doe",
            position: "Head of Design"
        },
        {
            id: 3,
            testimonial: "I didn’t know designing in Webflow could be this individualized. I’d never considered it before, but Landingfolio changed my mind.",
            name: "Philip Louis",
            position: "Head of Arts and Crafts"
        },
        {
            id: 4,
            testimonial: "I didn’t know designing in Webflow could be this individualized. I’d never considered it before, but Landingfolio changed my mind.",
            name: "Jane Dangote",
            position: "Head of Data Analyst"
        },
    ],
    fashionAds: {
        title: "Delivering the best fashion outfit",
        subtitle: "We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is.",
        button: "Our Store",
        arrowIcon: FiArrowUpRight,
        fashionCards: [
            {
                id: 1,
                title: "Red Quality Joggers",
                category: "Unsex Red joggers",
                image: Box1
            },
            {
                id: 2,
                title: "T-Shirt High-Quality",
                category: "Lapel Polo Shirt M-5XL Blue",
                image: Box2
            },
            {
                id: 3,
                title: "Top Quality Joggers Pant",
                category: "Black With White Stripes",
                image: Box3
            },
            {
                id: 4,
                title: "Smart Contour Design",
                category: "MEN/Women(man-Kneel)",
                image: Box4
            },
            {
                id: 5,
                title: "Round Neck Collection",
                category: "MEN/Women(man-Kneel)",
                image: Box5
            },
        ]
    },
    artCraftAds: {
        mainTitle: "We teach devs how to write better content.",
        subtitle: "Proin faucibus nibh et sagittis a. Lacinia purus acamet pellentesque aliquam enim.",
        description: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a.Lacinia purus ac amet pellentesque aliquam enim.",
        artCraftCard: [
            {
                id: 1,
                image: art,
                title: "How to write content about your photographs",
                date: "August 15, 2021"
            },
            {
                id: 2,
                image: website,
                title: "How to choose the right colors when creating a website?",
                date: "March 21, 2021"
            },
        ]
    },
    footer: {
        logo: "src/assets/logo.png",
        thesis: "Clarity gives you the blocks and components you need to create a truly professional website.",
        company: {
            title: "Company",
            list: [
                {
                    id: 1,
                    text: "About",
                    link: "/about"
                },
                {
                    id: 2,
                    text: "Contact Us",
                    link: "/contact-us"
                },
                {
                    id: 3,
                    text: "Home",
                    link: "/"
                },
                {
                    id: 4,
                    text: "Technology",
                    link: "/software"
                },
            ]
        },
        help: {
            title: "help",
            list: [
                {
                    id: 1,
                    text: "About",
                    link: "/about"
                },
                {
                    id: 2,
                    text: "Delivery Details",
                    link: "/delivery-details"
                },
                {
                    id: 3,
                    text: "Terms and Conditions",
                    link: "/terms-and-conditions"
                },
                {
                    id: 4,
                    text: "Technology",
                    link: "/software"
                },
                {
                    id: 5,
                    text: "Privacy Policy",
                    link: "/privacy-policy"
                },
            ]
        },
        newsletter: {
            title: "newsletter",
            type: "email",
            placeholder: "Enter your email address",
            name: "User Email",
            buttonText: "Subscribe Now",
            copyright: "© Copyright 2022, All Rights Reserved by ClarityUI"
        }
    }
}

export const fashionPage = {
    navbar: {
        loginIcon: AiOutlineLogin,
        cartIcon: HiOutlineShoppingCart,
        theme: MdOutlineDarkMode,
        menu: [
            {
                id: 1,
                innerHtml: "Men",
                link: "/fashion"
            },
            {
                id: 2,
                innerHtml: "Women",
                link: "/women"
            },
            {
                id: 3,
                innerHtml: "All-brands",
                link: "/all-brands"
            },
            {
                id: 4,
                innerHtml: "Kids",
                link: "/kids"
            },
            {
                id: 5,
                innerHtml: "Customise",
                link: "/customise"
            }
        ]
    },
    main: {
        title: "Find the best High Quality outfit in one tap",
        subtitle: "We have a wide range of products that serves various Demographic groups and markets. Our product Range are Trendy and always On point",
        input: {
            type: "search",
            placeholder: "Try joggers, Polo, T-shirts etc...",
            name: "Fashion Page Search Result"
        },
        buttonText: "Search now",
        achievements: {
            order: {
                title: "Order Delivered",
                count: "38,942"
            },
            customers: {
                title: "Registered Customers",
                count: "14,344"
            }
        }
    },
    categories: {
        title: "Popular Categories",
        categoryCards: [
            {
                id: 1,
                title: "For Women",
                productCount: "3,495 Products",
                buttonText: "Shop Now",
                bgImage: Women
            },
            {
                id: 2,
                title: "For Men",
                productCount: "2,847 Products",
                buttonText: "Shop Now",
                bgImage: Men
            },
            {
                id: 3,
                title: "For Kids",
                productCount: "385 Products",
                buttonText: "Shop Now",
                bgImage: Kids
            },
            {
                id: 4,
                title: "Accessories",
                productCount: "2,483 Products",
                buttonText: "Shop Now",
                bgImage: Accessories
            },
        ]
    }
}



export const artAndCraftPage = {
    navbar: {
        logo: Logo,
        menuIcon: RiMenu3Fill,
        button: "Toggle Theme",
        loginIcon: AiOutlineLogin,
        cartIcon: HiOutlineShoppingCart,
        theme: MdOutlineDarkMode,
        menu: [
            {
                id: 1,
                innerHtml: "Home",
                link: "/"
            },
            {
                id: 2,
                innerHtml: "Wall Painting",
                link: "/wall-painting"
            },
            {
                id: 3,
                innerHtml: "Hand Crafted",
                link: "/hand-crafted"
            },
            {
                id: 4,
                innerHtml: "Customise",
                link: "/customise"
            }
        ]
    },
    main: {
        title: "Find the best High Quality outfit in one tap",
        subtitle: "We have a wide range of products that serves various Demographic groups and markets. Our product Range are Trendy and always On point",
        bgImg: PageBg,
        form: {
            type: "search",
            placeholder: "Try joggers, Polo, T-shirts etc...",
            name: "Art and Craft Search",
            button: "Search Now"
        }
    },
    categories: {
        title: "Select from our Amazing categories",
        subtitle: "Select from our Amazing categories"
    }
}


export const detailsPage = {
    link: "Home + Artwork + Squid Famous"
}