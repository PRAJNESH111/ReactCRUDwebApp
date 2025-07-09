// import React from "react";
import style from "./style.module.css";


const Product = ({ name, img, price, description, key }) => {
    return (
        <>

            <div className={style.container}>
                <div className={style.card} key={key}>
                    <img src={img} alt="product" />
                    <h3>{name}</h3>
                    <p>₹ {price}</p>
                    <p>{description.substring(0, 30)}</p>
                </div>
            </div>
        </>
    );
};

export default Product;
