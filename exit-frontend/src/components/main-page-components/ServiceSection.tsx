import { services } from "../../data/data"
import ServiceCard from "../card-components/ServiceCard"
import PaddingContainer from "../PaddingContainer"

const ServiceSection = () => {
  return (
    <section className="py-6">
      <PaddingContainer>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
            {services.map(({img,title,btnText,link},index)=>(
              <div
              key={index}
              
              >
                <ServiceCard title={title} link={link} btnText={btnText} img={img}/>
              </div>
            ))}
        </div>
      </PaddingContainer>
    </section>
  )
}

export default ServiceSection
