import { useState } from "react"
import { faqs } from "../data/data"
import FaqCard from "./card-components/FaqCard"
import PaddingContainer from "./PaddingContainer"


const FaqSection = () => {

    const [openCardId, setOpenCardId] = useState<number | null>(null)

    const handleClick = (id: number) =>{
        setOpenCardId(prev => (prev === id ? null : id))
    }

  return (
    <section className={`py-15 

    `}>
        <PaddingContainer>
            <h2 className="text-3xl font-bold pb-5">Răspunsuri pentru tine</h2>
            <div className="flex flex-col ">
            {faqs.map(({answer, question, id, Icon})=>(
                <div
                key={id}
                >
                    <FaqCard answer={answer} isOpen={id === openCardId} handleClick={()=>handleClick(id)} question={question} Icon={Icon} />
                </div>
            ))}

            </div>
        </PaddingContainer>
    </section>
  )
}

export default FaqSection
