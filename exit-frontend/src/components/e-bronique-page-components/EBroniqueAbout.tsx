import PaddingContainer from "../PaddingContainer";
import EBroniqueAdvantages from "./EBroniqueAdvantages";
import EBroniqueWhyUs from "./EBroniqueWhyUs";
import EBroniqueBgImg from "/img/bg/ebronique-bg.png";

const EBroniqueAbout = () => {
  return (
      <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${EBroniqueBgImg})` }}
      >
      <div>
        <PaddingContainer>
        <EBroniqueAdvantages/>
        <EBroniqueWhyUs/>
    </PaddingContainer>
        </div>
    </div>

  );
};

export default EBroniqueAbout;
