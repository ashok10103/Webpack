import React from 'react';
import classes from './itemimage.css';
import PizzaImage from '../../assets/pizza.jpg';

const itemImage = (props)=>(
    <div className={classes.ItemImage}>
        <img src = {PizzaImage} className = {classes.ItemImg} />
    </div>
)

export default itemImage;