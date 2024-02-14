
type Props = {
    productName: string,
    
}

const Product = (props: Props) => {
    return (
        <>
        Hello Product: {props.productName}
        </>
    )
}

export default Product;