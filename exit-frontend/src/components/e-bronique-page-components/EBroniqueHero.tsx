import PaddingContainer from '../PaddingContainer'
import ColoredBtn from '../buttons/ColoredBtn'
import EBroniqueHeroImg from '/img/bg/e-bronique-hero.png'
import EBroniqueLogo from '../../assets/icons/ebronique-logo.svg?react'

const EBroniqueHero = () => {
  return (
     <PaddingContainer>
            <div className="bg-[linear-gradient(to_top,_#121212,_rgba(255,255,255,0.05))] text-white border-[rgba(var(--color-gray-rgb),0.26)] border-1 rounded-xl my-10 ">
                <div className="md:flex justify-between items-end">
    <div className="flex">
        <div className="flex flex-col items-start gap-y-2 sm:gap-y-8 p-4 sm:p-15">
            <EBroniqueLogo className='w-auto h-13'/>
        <h2 className="text-lg sm:text-4xl font-bold">Ieșirea unică spre protecție premium și stil sofisticat.</h2>
        <p className="opacity-30 text-sm">EXITBronique reprezintă un pas înainte în protecția dispozitivelor moderne. Cu o combinație de tehnologie avansată și design sofisticat, peliculele noastre bronate nu doar protejează, ci și adaugă un aer premium dispozitivelor tale.<br/> Ne mândrim cu soluții personalizate care se adaptează perfect nevoilor fiecărui utilizator. </p>
        <p className="opacity-30 text-sm">Fiecare detaliu este gândit pentru a oferi excelență și fiabilitate, astfel încât să te bucuri de tehnologia ta fără griji.</p>
        <ColoredBtn text={"Estimează valoarea"} isTextBold={true}/>

        </div>
   
      
    </div>
         <div className=" flex justify-end items-end">
      <img src={EBroniqueHeroImg} alt="E-Bronique" className="max-h-[1000px] object-contain" />
    </div>

                </div>
    </div>
        </PaddingContainer>
  )
}

export default EBroniqueHero
