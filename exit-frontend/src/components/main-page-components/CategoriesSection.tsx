import { categoriesData } from "../../data/data"
import CategoriesCard from "../card-components/CategoriesCard"
import PaddingContainer from "../PaddingContainer"

const CategoriesSection = () => {
  return (
    <section className="py-15 bg-[var(--color-black)] text-white">
        <PaddingContainer>
      <div>
        <h1 className="text-2xl font-bold">Categorii</h1>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 justify-items-center items-stretch">
  {categoriesData.map(({ btnText, img }, index) => (
    <div key={index} className="w-full h-full">
      <CategoriesCard btnText={btnText} img={img} />
    </div>
  ))}
</div>
      </div>

        </PaddingContainer>
    </section>
  )
}

export default CategoriesSection
