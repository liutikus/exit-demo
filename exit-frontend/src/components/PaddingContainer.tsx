
type ContainerProps = {
    children : React.ReactNode
}

const PaddingContainer = ({children} : ContainerProps) => {


  return (
    <div className="px-[15px] md:px-[30px] lg:px-[60px]">
      {children}
    </div>
  )
}

export default PaddingContainer
