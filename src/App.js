import React,{useState} from 'react'
import ProductList from './Components/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import {toast,ToastContainer} from 'react-toastify';
import Cart from './Components/Cart';

function App() {

    const [cartItems,setCartItems] = useState([])

    const addToCart = item =>{

        // If the item is already in cart we need to notification

      const isAlreadyAdded =  cartItems.findIndex((cardItem)=>{
            return cardItem.id == item.id
        })
        // console.log(isAlreadyAdded);
        if(isAlreadyAdded==-1){
         toast("Your Item is added into cart",{
             type: 'success'
         })
        }
        else{
            toast("Already Added in cart",{
                type:"error",
            })
            return;
        }

     setCartItems([...cartItems,item])
    //  console.log(cartItem)
    }
    const removeItem = item =>{
        setCartItems(cartItems.filter((singleItem)=>singleItem.id!==item.id))
        toast('Item was removed from cart',{
            type: 'error',
        })
    }
    const buyNow = ()=>{
        
        setCartItems([]);
        toast('Purchase Completed',{
            type: 'success'
        })
    }
    // return (
    //     <div>
    //         <ProductList addToCart={addToCart}/>
    //     </div>
    // )
    return(
        <div className="container-fluid">
            <ToastContainer/>
            <div className="row">
                <div className="col-md-8">
                <ProductList addToCart={addToCart}/>
                </div>
                <div className="col-md-4">
                    <Cart cartItems={cartItems} removeItem={removeItem} buyNow={buyNow}/>
                </div>
            </div>
        </div>
    )
}

export default App
