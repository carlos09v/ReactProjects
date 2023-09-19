
interface ProductProps {
    params: {
        id: string
    }
}

const Product = ({ params }: ProductProps) => {
    return (
        <div>
            <h1>Product: {params.id}</h1>
        </div>
    )
}

export default Product