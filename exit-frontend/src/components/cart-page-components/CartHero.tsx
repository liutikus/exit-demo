import CartHeroImg from "/img/bg/cart-hero.png"


const CartHero = () => {

  return (
<div className="py-15">

         <div className="relative w-full rounded-2xl overflow-hidden">
  <div className="w-full h-full py-5 md:py-10 bg-[linear-gradient(to_right,_#121212_60%,_rgba(var(--color-accent-rgb),0)_100%)] relative z-10">
    <div className="flex relative z-20 p-10 w-[50%]">
      <div className="text-white">
        <h1 className="md:text-2xl xl:text-5xl pt-2 pb-2 sm:pt-4 sm:pb-3 lg:pt-5 lg:pb-8 font-bold">
          <span className="text-[var(--color-accent)]">Shop.</span>
          Cea mai bună locație pentru a cumpăra produsele pe care le iubești.
        </h1>
      </div>
    </div>
  </div>

  <img
    src={CartHeroImg}
    alt="background image"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />
</div>

</div>
   
  )
}

export default CartHero
