import { memo } from "react"


type Props = {
    fetchProducts: () => void
}

const GetProductButton = memo (({ fetchProducts }: Props) => {
console.log("Rendered Button Component...")

  return (
    <div>
       
        <button onClick={fetchProducts}>Fetch Products</button>
    </div>
  )
})

export default GetProductButton