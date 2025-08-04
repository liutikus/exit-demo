import ColoredBtn from "../buttons/ColoredBtn"
import PaddingContainer from "../PaddingContainer"
import TradeInHeroImg from "/img/bg/Trade_in_Banner.png"

type TradeInHeroProps ={
    handleClick: ()=>void
}

const TradeInHero = ({handleClick}: TradeInHeroProps) => {
  return (
      
      <PaddingContainer>
            <div className="bg-[linear-gradient(to_top,_#121212,_rgba(255,255,255,0.05))] border-[rgba(var(--color-gray-rgb),0.26)] border-1 rounded-xl my-10 ">
    <div className="flex flex-col gap-y-6 items-center ">
        <div className="flex flex-col gap-y-2 sm:gap-y-8 items-center sm:w-[60%] text-center p-4 sm:p-15">
        <button className="hidden sm:inline px-5 lg:px-10 font-semibold border-1 py-3 rounded-full border-[var(--color-accent)]  hover:text-white hover:bg-[var(--color-accent)] transition-all ease-in-out duration-200 cursor-pointer text-[var(--color-accent)]">PROGRAMUL TRADE-IN</button>
        <h2 className="text-lg sm:text-4xl font-bold">Faceți schimb. Upgrade. Economisește. Sau reciclează-l gratuit.</h2>
        <p className="opacity-30 text-sm">Vizitează site-ul nostru sau vino într-un magazin EXIT Service pentru a evalua starea iPhone-ului tău. Oferă detalii precum modelul, capacitatea de stocare și eventualele daune vizibile. </p>
        <p className="opacity-30 text-sm">Vei primi instant o estimare preliminară a valorii dispozitivului tău.</p>
        <div
        onClick={handleClick}
        >
        <ColoredBtn text={"Estimează valoarea"} isTextBold={true}/>
        </div>

        </div>
   
      
    </div>
        <div>
            <img src={TradeInHeroImg} alt="Trade In" />
        </div>
    </div>
        </PaddingContainer>
  )
}

export default TradeInHero
