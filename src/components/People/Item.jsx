import React from "react";
import style from './People.module.css';

const Item = ({person}) => {
    return(
        <div className={style.item} >
            <img src={person.image} />
            <p>{person.name}</p>
        </div>
    )
}

export default Item;