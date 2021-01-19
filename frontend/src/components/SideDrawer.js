import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom';


const SideDrawer = ({show , click}) => {
    console.log(show);

const sideDrawerClass =['sidedrawer'];

if(!show){
    sideDrawerClass.push('show')
}
    return (
        <div className={sideDrawerClass.join("")}>

<ul className='sidedrawer__links' onClick={click}>
        <li>
            <Link to='/cart'>
            
            <i className='fas fa-shopping-cart' />
        <span>
                        Cart
            <span className='cartlogo__cartbadge'>0</span>
        
            </span>

            </Link>
        </li>


        <li>
            <Link to='/shop'>
                Shop
            </Link>
        </li>
    </ul>


              


            
        </div>
    )
}

export default SideDrawer 
 