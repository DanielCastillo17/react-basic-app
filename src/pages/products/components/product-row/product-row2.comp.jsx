import React from 'react';
import './product-row.style.css'



const ProductRow = () => {
    return (
    <div>

    <div className="product-row">
        <label htmlFor="texto">iPod Touch $99.99</label>
    </div>

    <div className="product-row">
        <label htmlFor="texto"><span className="color">iPhone 5</span> $399.99</label>
    </div>

    <div className="product-row">
        <label htmlFor="texto">Nexus 7 $199.99</label>
    </div>

    </div>


    )
}

export default ProductRow;