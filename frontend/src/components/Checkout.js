import React , {useState} from 'react';
import Cards from 'react-credit-cards';
import './Checkout.css';
import { Link } from "react-router-dom";


import 'react-credit-cards/es/styles-compiled.css';
import { useSelector, useDispatch } from "react-redux";




const Checkout = () => {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry , setExpiry] = useState('')
    const [cvc , setCvc] = useState('')
    const [focus, setFocus] = useState('')



    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    onsubmit=()=>{
        if(name.leng>11){
            return ''
        }
    }
  
    return (
        <div>

        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />





  {  
  cartItems.map((item)=>(
  
  <div className="cartitem">
      <div className="cartitem__image">
      </div>
      
      <p className="cartitem__price"> Price: ${item.price}</p>
    </div>

))}
<form>
<input type="tel"  name="number"  placeholder="Card Number"
            value={number}
            onChange={e=>setNumber(e.target.value)}
            onFocus={e=>setFocus(e.target.name)}
          />
       
    <input type="tel"  name="name"  placeholder="Card Name"
    value={name} onChange={e=>setName(e.target.value)}
onFocus={e=>setFocus(e.target.name)}
          />

    
<input type="tel"  name="expiry"  placeholder="MM/YY Expiry"
    value={expiry} onChange={e=>setExpiry(e.target.value)}
onFocus={e=>setFocus(e.target.name)}
          />
    

<input type="tel"  name="cvc"  placeholder="CVC"
    value={cvc} onChange={e=>setCvc(e.target.value)}
onFocus={e=>setFocus(e.target.name)}
          />    


<button className='button button2' type="button">Submit</button>   
        </form>
    


            
        </div>
    )
}

export default Checkout
