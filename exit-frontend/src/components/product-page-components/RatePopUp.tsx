import { useEffect, useState } from "react"
import PopUp from "../PopUp"
import type { Installment } from "../../types/types"
import { fetchInstallments } from "../../api/strapi"
import LoadingSpinner from "../LoadingSpinner"
import { useNavigate } from "react-router-dom"
import SquareBtn from "../buttons/SquareBtn"

type RatePopUpOpenProps = {
    isOpen:boolean
    setIsOpen: (val:boolean)=>void
    finalPrice:number
}

const RatePopUp = ({isOpen, setIsOpen,finalPrice} : RatePopUpOpenProps) => {

    const [installments, setInstallments] = useState<Installment[]| null>(null)
    const [loading, setLoading] = useState(false)
    const [selectedInstallment, setSelectedInstallment] = useState<Installment | null>(installments ? installments[0]: null)
    const navigate = useNavigate()

  useEffect(() => {
  setLoading(true);
  fetchInstallments()
    .then((data) => {
      setInstallments(data);
      if (data && data.length > 0) {
        setSelectedInstallment(data[0]);
      }
    })
    .catch((err) => console.error(err.message))
    .finally(() => setLoading(false));
}, []);
    
    console.log(selectedInstallment)

    const handleClick = (installment: Installment)=>{
        setSelectedInstallment(installment)
    }

  return (
    <div>
      <PopUp isOpen={isOpen} isDark={false} handleClose={()=>setIsOpen(false)}>
        {loading ? (<LoadingSpinner/>) : (
        <div className="text-center">
        <h2 className="text-4xl font-bold pb-5 md:pb-10">Cumpără în rate</h2>
            <div className="flex flex-wrap items-center gap-6">
                {installments?.sort((a,b)=>a.number_of_installments-b.number_of_installments)?.map(installment=>(
                    <div
                    key={installment.id}
                    className={`relative cursor-pointer text-start border-1 bg-[var(--color-bg-white)] p-4 pr-15 rounded-lg
                        ${selectedInstallment?.id === installment.id ? 
                    "border-[var(--color-accent)]":
                    "border-[var(--color-bg-white)]"
                    }`
                    }
                    onClick={()=>handleClick(installment)}
                    >
                        <h4 className="text-md md:text-lg font-semibold">{(finalPrice/installment.number_of_installments).toFixed(0)} Lei</h4>
                        <p className="opacity-80">{installment.number_of_installments} Rate</p>
                        <div className={`absolute top-2 right-2 px-2 py-1 rounded-lg text-sm font-bold text-white
                             ${installment.interest_rate ===0 ? "bg-[var(--color-red)]" : "bg-[var(--color-dark-red)]"}`}>
                                {installment.interest_rate}%
                        </div>
                    </div>
                ))}

            </div>
                <div className="text-center pt-10 md:mx-30">

                                 <SquareBtn
  handleClick={()=>navigate("/checkout")}
  text="Continuă"
  isDark={false}
/>
                </div>
        </div>

        )}
      </PopUp>
    </div>
  )
}

export default RatePopUp
