import React, {Fragment} from "react";

import mealImg from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) =>{
return<Fragment>
    <header className={classes.header}>
        <h1>Meal App</h1>
        <HeaderCartButton changeShowcartVal={props.changeShowcartVal}/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealImg} alt="Table full of delicious food"></img>
    </div>
</Fragment>
}

export default Header;
