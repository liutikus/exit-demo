import { useState } from "react"
import FooterBg from "/img/bg/footer-bg.png"
import Logo from "../assets/icons/exit-logo.svg?react"
import AppleIcon from "../assets/icons/apple-auth.svg?react"
import PaddingContainer from "./PaddingContainer"
import { contactData, footerInfo, footerSocialMedia, underFooterLinks } from "../data/data"
import AdressIcon from "../assets/icons/home-icon.svg?react"
import PhoneIcon from "../assets/icons/phone-icon.svg?react"
import VisaIcon from "../assets/icons/visa-icon.svg?react"
import PayPalIcon from "../assets/icons/pay-pal-icon.svg?react"
import AmericanExpressIcon from "../assets/icons/american-express-icon.svg?react"
import MasterCardIcon from "../assets/icons/mastercard-icon.svg?react"




const Footer = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = ()=>{
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false)
        }, 200);
    }

  return (
<div className="relative w-full bg-black">
  <img
    src={FooterBg}
    alt="Hero background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  <div className="absolute inset-0 bg-black opacity-70 z-10" />

  <div className="relative z-20 px-6 pb-4 pt-20 text-white ">
    <div className=" flex text-white items-center px-5 py-15 md:py-30 justify-center">
        <div className="text-center">
            <h2 className="text-[2.7em] font-bold ">Primește noutăți primul!</h2>
            <p className="opacity-70 py-2">Fii primul care știe despre cele mai fierbinte oferte de la EXIT!</p>
            <div className="bg-white flex justify-between mt-6 text-black rounded-lg p-2">
                <input 
                type="text"
                placeholder="Email"
                className="pl-4 flex-grow flex-shrink min-w-0"
                />
                <button 
                onClick={handleClick}
                className={`${isClicked ? "shadow-none" : "shadow-md"} text-white bg-[var(--color-accent)] text-sm sm:text-md px-2 sm:px-12 py-1 sm:py-3 font-bold rounded-md cursor-pointer `}>Abonează-te</button>
            </div>
        </div>
    </div>

    <PaddingContainer>
    <div className="text-white ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pb-6">
            <div className="flex items-center  ">
               <div>
                <Logo className="h-[32px] w-auto"/>
               </div>
               <div className="border-l-2 border-[rgba(var(--color-gray-rgb),0.51)] w-0.5 h-12 mx-6 rounded-full"/>
               <div>
                <AppleIcon className="h-[32px] w-auto"/>
               </div>
            </div>
            <div>
                <h3 className="text-xl py-5">Informații de Contact</h3>
                <ul className=" opacity-80">
                    <li className="flex items-center gap-3 py-2"><AdressIcon className="h-[15px] w-[15px]"/>{contactData.adress}</li>
                    <li><a className="flex items-center gap-3" href={contactData.tel.href}><PhoneIcon className="h-[15px] w-[15px]" /> {contactData.tel.formatted}</a></li>
                </ul>
            </div>
            </div>
            {footerInfo.map(({title, content}, index)=>(
                <div
                className="pb-6"
                key={index}
                >
                    <h3 className="text-xl pb-3 md:pb-5">{title}</h3>
                    <ul>
                        {content.map(({link, text}, index)=>(
                            <li
                            className="py-1 hover:opacity-100 opacity-80"
                            key={index}
                            ><a href={link}>{text}</a></li>
                        ))}

                    </ul>
                </div>
            ))}

        </div>
    </div>
    <div className="text-white pt-5 md:pt-20">
        <div className="md:flex items-center justify-between">
            <div className="sm:flex items-center">
                {underFooterLinks.map(({ text, link }, index) => (
                    <div
                        key={index}
                        className={`opacity-80 pr-4 hover:opacity-100 ${
                        index === 0 ? "" : "sm:border-l sm:pl-4 border-[rgba(var(--color-gray-rgb),0.5)]"
                        }`}
                    >
                        <a href={link}>{text}</a>
                    </div>
                    ))}

            </div>
            <div className="flex pt-4 md:pt-0 gap-6 items-center">
                {footerSocialMedia.map(({Icon, link},index)=>(
                    <div
                    key={index}
                    >
                        <a href={link}><Icon className="h-[20px] w-auto"/></a>
                    </div>
                ))}
            </div>
            

        </div>
    </div>
    <div className="sm:flex pt-15 justify-between">
                <div className="flex gap-3">
                <a href="#"><AmericanExpressIcon className="w-auto h-[25px]"/></a>
                <a href="#"><VisaIcon className="w-auto h-[25px]"/></a>
                <a href="#"><PayPalIcon className="w-auto h-[25px]"/></a>
                <a href="#"><MasterCardIcon className="w-auto h-[25px]"/></a>


                </div>
                <div className="text-white opacity-80">
                    <p>© 2025, EXIT Moldova. Creat de <a href="https://icode.md/ro/" className="text-[var(--color-accent)]">ICode</a></p>
                </div>
            </div>
    </PaddingContainer>
  </div>
</div>
  )
}

export default Footer
