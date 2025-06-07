// write product card here
import React from 'react'
import ViewProductButton from '../components/button';

const productcard = () => {
    const image = "https://magicstudio.com/blog/content/images/2023/10/props-product-photography.webp";
    const name="sai mani"
    const price = 1000;
    
  return (
    <div>
        <img src={image} alt="product" />
        <h2>Name: {name}</h2>
        <h2>Price: {price}</h2>
        <ViewProductButton />
    </div>
  )
}

export default productcard
