import EBroniqueAbout from "../components/e-bronique-page-components/EBroniqueAbout"
import EBroniqueHero from "../components/e-bronique-page-components/EBroniqueHero"
import Footer from "../components/Footer"
import NavBar from "../components/nav-components/NavBar"


const EBroniquePage = () => {
  return (
    <div className="bg-black">
      <NavBar isDark={true}/>
      <EBroniqueHero/>
      <EBroniqueAbout/>

      <Footer/>
    </div>
  )
}

export default EBroniquePage
