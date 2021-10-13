import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {random,commerce} from 'faker';
import CartItem from './CartItem';

function ProductList({addToCart}) {
    // console.log(addToCart);
    const [products,setProducts] = useState([{}])

    const fetchTheProducts = async()=>{
 
        const URL = "https://api.pexels.com/v1/search?query=laptops&per_page=6";
        const API_KEY = "563492ad6f917000010000012e314eb018164af3a9f45d95070ca8ad";
        const {data} = await axios.get(URL,{
            headers : {
                Authorization : API_KEY,
            }
        })
        console.log(data);
        const {photos} = data;
        console.log(photos);

        // For Every Object an mediumImage,tiny,random text, random price

        const allProducts = photos.map(photo=>(
        {
            mediumImage : photo.src.medium,
            tinyImage :  photo.src.tiny,
            productName : commerce.productName(),
            productPrice : commerce.price(),
            id : random.uuid()

        }
        ))
        // console.log(allProducts);
        setProducts(allProducts);
          
    }

    useEffect(()=>{
      fetchTheProducts()
    },[])
    return (
        <div>
            <div className="container-fluid">

                <h2 className="text-primary text-center">
                    Product Listing 
                </h2>
                <section className="row">

                   {
                       products && products.length>0 && products.map((product)=>(
                          <div className="col-md-4" key={product.id}>
                           <CartItem product={product} addToCart={addToCart}  />
                          </div>
                       ))
                   }

                </section>

            </div>
        </div>
    )
}

export default ProductList
