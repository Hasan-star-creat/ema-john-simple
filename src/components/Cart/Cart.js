import React from 'react';

const Cart = (props) => {
     const cart= props.cart;
     console.log(cart)
    //  const total = cart.reduce((total,prd) => total + prd.price , 0)
     let total = 0; 
     for(let i=0; i<cart.length; i++){
          const product = cart[i];
          total = total + product.price;
     }
     let shipping = 0; 
      if(total > 35){
          shipping = 0;
      }
      else if (total > 15){
          shipping = 4.12;
      }
      else if(total > 0){
          shipping = 12.2;
      }
       
      const tax  = (total * 0.1).toFixed(2);
      const totalAmount = (total + shipping + Number(tax)).toFixed(2);
    return (
        <div>
           <h2>Order Summary</h2> 
           <h4>Items ordered:{cart.length}</h4>
           <p>Items: ${(total).toFixed(2)}</p>
           <p>Shippin Cost: {shipping}</p>
            <p>Total before tax: {(total).toFixed(2)}</p>
            <p>Estimated Tax:  {tax}</p>
           <h4>Order Total: {total + shipping + Number(tax)}</h4>
        </div>
    );
};

export default Cart;