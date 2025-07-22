
type SquareBtnProps = {
    text:string,
    isDark:boolean
}

const SquareBtn = ({text, isDark}: SquareBtnProps) => {
  return (
    <button
    className={`px-auto w-full py-4 font-bold rounded-md cursor-pointer ${
        isDark? "bg-[var(--color-black)] text-white" : 
        "bg-[var(--color-accent)] text-[var(--color-black)]"}`}
    >
      {text}
    </button>
  )
}

export default SquareBtn
