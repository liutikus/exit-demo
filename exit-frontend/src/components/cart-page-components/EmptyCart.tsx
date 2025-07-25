import { useNavigate } from "react-router"
import EmptyCartIcon from "../../assets/icons/empty-cart.svg?react"
import SquareBtn from "../buttons/SquareBtn";
import { shopPath } from "../../data/data";

const EmptyCart = () => {

    const navigate = useNavigate();

  return (
<div className="flex flex-col justify-center items-center h-full text-center py-20 pb-40">
  <div className="flex flex-col items-center gap-4 opacity-60">
    <EmptyCartIcon className="h-20 w-auto text-[var(--color-accent)]" />
    <p className="text-4xl font-bold">Coșul este gol</p>
  </div>

  <div className="pt-6 w-[250px]">
    <SquareBtn
      text="Înapoi la cumpărături"
      isDark={true}
      handleClick={() => navigate(shopPath)}
    />
  </div>
</div>

  )
}

export default EmptyCart
