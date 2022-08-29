import { useContext } from "react"
import { SearchContext } from "../../contexts/Search"
import { Search } from "./style"

const Input = () => {
  const { value, setValue, setCurrentPage } = useContext(SearchContext)

  const handleSearch = (value: string) => {
    setValue(value)
    setCurrentPage(1)
  }

  return (
    <Search
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
      type="search"
      placeholder="busque pelo seu filme preferido"
    />
  )
}

export default Input