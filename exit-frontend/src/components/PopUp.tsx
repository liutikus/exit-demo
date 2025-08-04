import CloseIcon from "../assets/icons/close-x.svg?react"

type PopUpProps = {
    isOpen:boolean
    isDark:boolean
    handleClose:()=>void
    children : React.ReactNode

}

const PopUp = ({isOpen, isDark,children, handleClose}:PopUpProps) => {



   return (
    <>
      {isOpen && (
        <div className={` fixed inset-0 z-50 flex items-center justify-center
               ${isDark ? "dark" : ""}
        `}>
          <div
            onClick={handleClose}
            className="absolute inset-0 bg-[var(--color-gray)]/5
            0 dark:bg-black/60 backdrop-blur-sm"
          ></div>

          <div className="relative mx-5  bg-white dark:bg-[var(--color-exit-black)] no-scrollbar rounded-xl p-15 max-w-3xl w-full z-10 max-h-[90vh] overflow-y-auto">
          <button 
          onClick={handleClose}
          className="absolute cursor-pointer top-4 right-4 border-black dark:border-white text-black dark:text-white border-1 p-1 rounded-lg"><CloseIcon className="w-auto h-4"/></button>
         {children}
          </div>
        </div>
      )}
    </>
  )
}

export default PopUp
