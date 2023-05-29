import style from "./ProductItem.module.css"
import React, {useState} from 'react';

function ProductItem(props) {
    return (<div id={style.listItem}>
        <a id={style.productImgContainer}><img id={style.productImg} src={props.product.image} alt={props.product.image}/></a>
        <div id={style.productContainer}>
            <p id={style.productName}>{props.product.name}</p>
            <p id={props.product.sale ? style.old : style.bold}>{props.product.price}{props.product.currency}</p>
            {props.product.sale ? <p id={style.sale}>{props.product.saleprice}{props.product.currency}</p> : ""}
        </div>

    </div>)
}

export default ProductItem;