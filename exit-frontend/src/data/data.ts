import FaqIcon1 from "../assets/faq-icons/faq-icon-1.svg?react"
import FaqIcon2 from "../assets/faq-icons/faq-icon-2.svg?react"
import FaqIcon3 from "../assets/faq-icons/faq-icon-3.svg?react"
import FaqIcon4 from "../assets/faq-icons/faq-icon-4.svg?react"
import FaqIcon5 from "../assets/faq-icons/faq-icon-5.svg?react"
import FaqIcon6 from "../assets/faq-icons/faq-icon-6.svg?react"
import FaqIcon7 from "../assets/faq-icons/faq-icon-7.svg?react"
import InstagramIcon from "../assets/social-icons/instagram-icon.svg?react"
import YoutubeIcon from "../assets/social-icons/youtube-icon.svg?react"
import FacebookIcon from "../assets/social-icons/facebook-icon.svg?react"
import TikTokIcon from "../assets/social-icons/tiktok-icon.svg?react"
import TelegramIcon from "../assets/social-icons/telegram-icon.svg?react"



export const pageSize = 10;

export const services = [{
    title: "Personalizarea Gadgetului",
    btnText: "Peliculă Bronată",
    img:"/img/service-img/personalize-service.png"
},{
    title: "Service Centru",
    btnText: "Centru de reparații",
    img:"/img/service-img/repair-service.png"
},{
    title: "Trade in Recycle",
    btnText: "Re-utilizează gadgetul tău",
    img:"/img/service-img/trade-service.png"
},]

export const categoriesData = [{
btnText: "Accesorii",
img:"/img/category-img/accesories-category.png"
},{
btnText: "Distracții",
img:"/img/category-img/entertainment-category.png"
},{
btnText: "Pentru casa ta",
img:"/img/category-img/for-home-category.png"
},{
btnText: "Reduceri și oferte",
img:"/img/category-img/sales-category.png"
},]

export const faqs = [{
  question: "Care sunt tarifele de transport?",
  answer: "Tarifele pornesc de la 150 MDL în Chișinău, iar în afara orașului se calculează aproximativ 8 MDL/km. Pentru o ofertă exactă, vă rugăm să ne contactați.",
  Icon: FaqIcon1,
  id:1
},{
  question: "Care sunt tarifele de transport?",
  answer: "Tarifele pornesc de la 150 MDL în Chișinău, iar în afara orașului se calculează aproximativ 8 MDL/km. Pentru o ofertă exactă, vă rugăm să ne contactați.",
  Icon: FaqIcon2,
  id:2
},{
  question: "Care sunt tarifele de transport?",
  answer: "Tarifele pornesc de la 150 MDL în Chișinău, iar în afara orașului se calculează aproximativ 8 MDL/km. Pentru o ofertă exactă, vă rugăm să ne contactați.",
  Icon: FaqIcon3,
  id:3
},{
  question: "Care sunt tarifele de transport?",
  answer: "Tarifele pornesc de la 150 MDL în Chișinău, iar în afara orașului se calculează aproximativ 8 MDL/km. Pentru o ofertă exactă, vă rugăm să ne contactați.",
  Icon: FaqIcon4,
  id:4
},{
  question: "Care sunt tarifele de transport?",
  answer: "Tarifele pornesc de la 150 MDL în Chișinău, iar în afara orașului se calculează aproximativ 8 MDL/km. Pentru o ofertă exactă, vă rugăm să ne contactați.",
  Icon: FaqIcon5,
  id:5
},{
  question: "Care sunt tarifele de transport?",
  answer: "Tarifele pornesc de la 150 MDL în Chișinău, iar în afara orașului se calculează aproximativ 8 MDL/km. Pentru o ofertă exactă, vă rugăm să ne contactați.",
  Icon: FaqIcon6,
  id:6
},{
  question: "Care sunt tarifele de transport?",
  answer: "Tarifele pornesc de la 150 MDL în Chișinău, iar în afara orașului se calculează aproximativ 8 MDL/km. Pentru o ofertă exactă, vă rugăm să ne contactați.",
  Icon: FaqIcon7,
  id:7
},]

export const footerInfo = [{
    title: "EXIT Magazin",
    content:[{
        link:"#",
        text:"Catalog"
    },{
        link:"#",
        text:"Noutăți"
    },{
        link:"#",
        text:"Cariere"
    },{
        link:"#",
        text:"Contact"
    },]
},{
    title: "Găsește Rapid",
    content:[{
        link:"#",
        text:"iPhone"
    },{
        link:"#",
        text:"MacBook"
    },{
        link:"#",
        text:"Accesorii iPhone"
    },{
        link:"#",
        text:"Peliculă Bronată"
    },]
},{
    title: "Economisește cu Noi",
    content:[{
        link:"#",
        text:"Trade In"
    },{
        link:"#",
        text:"EXIT Service"
    },{
        link:"#",
        text:"EXIT 360"
    },]
}]

export const contactData = {
tel: {
    href: "tel:+37378004007",
    formatted: "078 004 007"
},
adress: "str. Albisoara 4, etajul 1"
}

export const underFooterLinks=[{
    text:"Politica de Retur",
    link:"#"
},{
    text:"Politica de Livrare",
    link:"#"
},{
    text:"Termeni și Condiții",
    link:"#"
},{
    text:"Politica de Confidențialitate",
    link:"#"
},]

export const footerSocialMedia=[{
    Icon:TelegramIcon,
    link:"#"
},{
    Icon:FacebookIcon,
    link:"#"
},{
    Icon:InstagramIcon,
    link:"#"
},{
    Icon:TikTokIcon,
    link:"#"
},{
    Icon:YoutubeIcon,
    link:"#"
},]

export const sortOptions=[{
    label:"Pret desc.",
    value:"start_price:desc"
},{
    label:"Pret asc.",
    value:"start_price:asc"
},]

export const allowedCategories = ["cellphones-and-accessories", "mac-book-and-computers", "entertainment","accesories", "watch" ]

export const stockOptions =[{
    title: "In Stock",
    slug:"is_in_stock",
    value:"true"
},{
    title: "Out of Stock",
    slug:"is_in_stock",
    value:"false"
},]


export const populateValues = ["size", "product_type", "categories", "mainImage", "images", "memory_options", "colors", "brand"];

export const tradeSteps = [{
    stepNumber: 1,
    title:"Care este device-ul dvs. curent?",
    bgColor: "bg-[linear-gradient(to_top,_#121212,_rgba(255,0,0,0.05))]",
    description:"Vă rugăm să selectați configurările pentru dispozitivul pe care doriți să-l predați."
},{
    stepNumber: 2,
    title:"Alegeți device-ul dorit",
    bgColor: "bg-[linear-gradient(to_top,_#121212,_rgba(0,255,0,0.05))]",
    description:"Vă rugăm să selectați configurările pentru dispozitivul dorit de dvs."
},{
    stepNumber: 3,
    title:"Estimare preliminară",
    bgColor: "bg-[linear-gradient(to_top,_#121212,_rgba(0,0,255,0.05))]",
    description:"Aici o să fie afișată o estimare preliminară a prețului. Dacă doriți să contactați echipa noastră vă rugăm să apelați pe butonul de mai jos."
}]