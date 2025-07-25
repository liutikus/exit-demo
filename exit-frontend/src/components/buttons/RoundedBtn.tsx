
type RoundedBtnProps ={
    text:string,
    isTextBlack:boolean,
    handleClick: ()=>void
}

const RoundedBtn = ({text,handleClick, isTextBlack}: RoundedBtnProps) => {
  return (
    <div>
      <button 
      onClick={handleClick}
      className={`px-1 md:px-5 w-full
    py-2 
    text-sm sm:text-base md:text-lg 
    border border-[var(--color-accent)] 
    rounded-full 
    cursor-pointer
    transition-all ease-in-out duration-200
    hover:bg-[var(--color-accent)]
    inline-block
    text-center
      ${isTextBlack ? "text-[var(--color-black)]" : "text-white"}}
     `}>
      {text}</button>
    </div>
  )
}

export default RoundedBtn
