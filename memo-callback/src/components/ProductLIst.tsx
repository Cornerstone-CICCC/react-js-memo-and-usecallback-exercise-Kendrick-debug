import { useCallback, useEffect, useState } from "react"
import GetProductButton from "./GetProductButton"

type Products = {
    id: number
    title: string
    category: string

}

const ProductLIst = () => {
    const [product, setProduct] = useState<Products>()


    const fetchProducts = useCallback( async () => {
        try {
            const res = await fetch (`https://dummyjson.com/products/1`)
            const data = await res.json()
            setProduct(data)

        } catch (err) {
            console.error(err)
        }
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts] )


  return (
    <div>
        <h1>Products</h1>
        <h2>Product: {product?.title}</h2>
        <h2>Category: {product?.category}</h2>
        <GetProductButton  fetchProducts={fetchProducts}/>
    </div>
  )
}

export default ProductLIst