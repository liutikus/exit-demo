import { sortOptions } from "../../data/data"
import SimpleBtn from "../buttons/SimpleBtn"

type SortComponentProps = {
    currentSort: string,
    handleSort: (e: React.ChangeEvent<HTMLSelectElement>)=>void
}

const SortComponent = ({currentSort, handleSort} : SortComponentProps) => {
  return (
    <SimpleBtn isSquare={false}>
    <div>
      <select 
      value={currentSort}
      onChange={handleSort}
      className="outline-none cursor-pointer"
      >
        {sortOptions.map(({label,value}, index)=>(
            <option
            key={index}
            value={value}
            >
                {label}
            </option>
        ))}
      </select>
    </div>

    </SimpleBtn>
  )
}

export default SortComponent
