import { useEffect, useState } from "react"
import { fetchCategories, fetchCategoryDeviceModels, fetchColors } from "../../api/strapi"
import type { Category } from "../../types/types"
import CalculatorCard from "./CalculatorCard"
import CloseIcon from "../../assets/icons/close-x.svg?react"
import ColoredBtn from "../buttons/ColoredBtn"
import { useToast } from "../../context/ToastContext"

type TradeInCalculatorProps = {
  isOpen: boolean
  handleClose: () => void
}

const TradeInCalculator = ({ isOpen, handleClose }: TradeInCalculatorProps) => {

    const {showToast} = useToast()
    const [categories, setCategories] = useState<Category[] | null>(null)
 const [selectedCategory, setSelectedCategory] = useState<{ name: string; documentId: string } | null>(null)
const [selectedSubCategory, setSelectedSubCategory] = useState<{ name: string; documentId: string } | null>(null)
const [selectedDeviceModel, setSelectedDeviceModel] = useState<{ name: string; documentId: string } | null>(null)
const [selectedColor, setSelectedColor] = useState<{ name: string; documentId: string } | null>(null)
const [selectedConfiguration, setSelectedConfiguration] = useState<{name:string; documentId:string} | null>(null)

    const [subCategory, setSubCategory] = useState<Category | null>(null)
    const [name,setName] = useState("")
    const [phone, setPhone] = useState("")
    const [colors,setColors] = useState<[{documentId:string, name:string}] | null>(null)
    const [configuration] = useState<
        { documentId: string; name: string }[]
        >([
        { name: "16 GB", documentId: "16gb" },
        { name: "32 GB", documentId: "32gb" },
        { name: "64 GB", documentId: "64gb" },
        { name: "128 GB", documentId: "128gb" },
        { name: "256 GB", documentId: "256gb" },
        { name: "512 GB", documentId: "512gb" },
        { name: "1 TB", documentId: "1tb" },
        { name: "2 TB", documentId: "2tb" }
        ])

    useEffect(()=>{
        fetchCategories()
        .then(setCategories)
        .catch(err=> console.error(err.message))
    },[])

    useEffect(()=>{
        fetchColors()
            .then(setColors)
                .catch(err=> console.error(err.message))

    },[])

    useEffect(()=>{
        setSelectedSubCategory(null)
    },[selectedCategory])

    useEffect(()=>{
        if(selectedSubCategory){
            fetchCategoryDeviceModels(selectedSubCategory.documentId)
                    .then(setSubCategory)
                    .catch(err=> console.error(err.message))

        }
    }, [selectedSubCategory])

  const handleSubmit = async () => {
    if (
      !selectedCategory ||
      !selectedSubCategory ||
      !selectedDeviceModel ||
      !selectedColor ||
      !selectedConfiguration ||
      !name ||
      !phone
    ) {
      showToast("Vă rugăm să selectați toate opțiunile și să completați datele!");
      return;
    }

    const payload = {
      category: selectedCategory?.name,
      subCategory: selectedSubCategory?.name,
      deviceModel: selectedDeviceModel?.name,
      color: selectedColor?.name,
      configuration: selectedConfiguration?.name,
      name,
      phone,
    };

    try {
      const res = await fetch("http://localhost:1337/api/trade-in-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: payload }),
      });

      if (!res.ok) {
        const errData = await res.json();
        console.error("Strapi error:", errData);
        showToast("Eroare la trimitere. Vă rugăm încercați din nou.");
        return;
      }

      const data = await res.json();
      console.log("Trimis cu succes:", data);
      showToast("Datele au fost trimise cu succes!");

      setSelectedCategory(null);
      setSelectedSubCategory(null);
      setSelectedDeviceModel(null);
      setSelectedColor(null);
      setSelectedConfiguration(null);
      setName("");
      setPhone("");
    } catch (err) {
      console.error(err);
      showToast("Eroare la trimitere. Vă rugăm încercați din nou.");
    }
  };


  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          ></div>

          <div className="relative mx-10 md:mx-0 bg-[var(--color-exit-black)] no-scrollbar text-white/90 rounded-xl p-15 max-w-3xl w-full z-10 max-h-[90vh] overflow-y-auto">
          <h2 className="text-center text-2xl font-bold py-5">Dispozitivul dvs. vechi</h2>
          <button 
          onClick={handleClose}
          className="absolute cursor-pointer top-4 right-4 border-white border-1 p-1 rounded-lg"><CloseIcon className="w-auto h-4"/></button>
          <div>
                <CalculatorCard 
            items={categories
                ?.filter(c => c.subCategories.length >= 1)
                .map(c => ({ name: c.title, documentId: c.documentId })) || null}
            handleSelect={setSelectedCategory}
            selectedItem={selectedCategory}
            title="Selectați categoria"
            />

            {selectedCategory && (
            <CalculatorCard
                items={categories
                ?.filter(categor=>categor.subCategories.length>=1).find(c => c.documentId === selectedCategory.documentId)
                ?.subCategories.map(sc => ({ name: sc.title, documentId: sc.documentId })) || null}
                handleSelect={setSelectedSubCategory}
                selectedItem={selectedSubCategory}
                title="Selectați subcategoria"
            />
            )}

            {subCategory && (
            <CalculatorCard
                items={subCategory.device_models}
                handleSelect={(selected) => setSelectedDeviceModel(selected)}
                selectedItem={selectedDeviceModel}
                title="Selectați modelul"
            />
            )}

            <CalculatorCard
            items={colors}
            handleSelect={(selected) => setSelectedColor(selected)}
            selectedItem={selectedColor}
            title="Selectați culoarea"
            />

            <CalculatorCard
            items={configuration}
            handleSelect={(selected) => setSelectedConfiguration(selected)}
            selectedItem={selectedConfiguration}
            title="Selectați configurația"
            />
         <div className="mt-4">
  <label className="block mb-2 text-sm font-medium">Nume</label>
  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-full px-4 py-2 rounded-lg bg-black/30 border border-[var(--color-gray)]/20 text-white focus:outline-none focus:border-[var(--color-accent)]"
    placeholder="Introduceți numele dvs."
  />
</div>

<div className="mt-4">
  <label className="block mb-2 text-sm font-medium">Telefon</label>
  <input
    type="tel"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="w-full px-4 py-2 rounded-lg bg-black/30 border border-[var(--color-gray)]/20 text-white focus:outline-none focus:border-[var(--color-accent)]"
    placeholder="Introduceți numărul de telefon"
  />
</div>
          </div>
          <div
          onClick={handleSubmit} 
          className="text-center pt-5">
            
            <ColoredBtn text={"Trimite"} isTextBold={true}/>
          </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TradeInCalculator
