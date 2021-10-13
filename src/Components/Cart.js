import React from 'react'

function Cart({cartItems,removeItem,buyNow}) {
    // console.log(removeItem);

    const totalAmmount = cartItems.reduce((total,current)=>{
        console.log(current.productPrice);
        return parseFloat(total) + parseFloat(current.productPrice)
    },0)
    return (
        <div className="container-fluid">
            <h2 className="text-primary">Cart</h2>
            <ul className="list-group">
                {
                 cartItems && cartItems.length > 0 && cartItems.map((item)=>(
                     <li className="list-group-item">
                         <div className="row">
                             <div className="col">
                                 <img height={80} src={item.tinyImage} alt="Tiny" />
                             </div>
                             <div className="col text-center">
                                 <div className="text-primary">
                                     {item.productName}
                                 </div>
                                 <span>Price: $ {item.productPrice}</span>
                                 <button className="btn btn-danger" onClick={()=>{removeItem(item)}}>
                                     Remove
                                 </button>
                             </div>
                         </div>
                     </li>
                 ))   
                }
            </ul>
            {/* If the cart is empty */}
            {
                cartItems.length>=1 ? (
                    <div className="card text-center mt-5">
                        <div className="card-header">
                            Total Ammount : ${totalAmmount}
                        </div>
                        <div className="card-body">
                            You added {cartItems.length} Products to the cart
                        </div>
                        <div className="card-footer">
                            <button className="bg-success text-white px-2" onClick={buyNow}>
                                Purchase Here
                            </button>
                        </div>
                        </div>
                ): <h2 className="text-primary">Your Cart is Empty</h2>
            }
        </div>
    )
}

export default Cart
