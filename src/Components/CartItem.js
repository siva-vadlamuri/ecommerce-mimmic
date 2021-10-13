import React from 'react'

function CartItem({product,addToCart}) {
    // console.log(product)

    
    return (
        <div className="card mb-1 mt-2">
            <img className="card-img-top" height="250" width="100%" src={product.mediumImage} alt={product.productName} />
            <div className="card-body text-center">
                <div className="card-title">
                    {product.productName}
                </div>
                <div className="card-text text-secondary">
                    <p>Price: $ {product.productPrice}</p>
                </div>
                <button className="btn btn-primary" onClick={()=>{addToCart(product)}}>Add</button>
            </div>
            
        </div>
    )
}

export default CartItem
