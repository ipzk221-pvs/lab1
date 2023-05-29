import style from "./ProductList.module.css"
import ProductItem from "./ProductItem";

function ProductList(props) {
    return (<div id={style.list}>
        <h2 id={style.listName}>{props.listName}</h2>
        <div>
            <div id={style.productContainer}>
                {props.products.map((product) => <ProductItem key={product.id} product={product}/>)}
            </div>
        </div>
    </div>)
}

export default ProductList;