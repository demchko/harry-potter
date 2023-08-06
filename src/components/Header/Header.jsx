import React, { useState } from "react";
import style from './Header.module.css';
import {FcBookmark} from 'react-icons/fc';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const [menu] = useState([
        {id: 1, name: 'Home', link: '/home'},
        {id: 2, name: 'People', link: '/people'},
        {id: 3, name: 'Search', link: '/search'},
    ]);

    const fav = useSelector(state => state.slice);

    return(
        <header >
            <div className={style.list} >
                <img className={style.img} src='https://cdn2.iconfinder.com/data/icons/harry-potter-colour-collection/60/14_-_Harry_Potter_-_Colour_-_Hogwarts_Shield-512.png' />
                {
                    menu.map(item => (
                        <Link className={style.link} to={item.link} >{item.name}</Link>
                    ))
                }
            </div>
            <div className={style.mark} >
                <Link to='/favourites' >
                    <FcBookmark className={style.icon} />
                    {fav.length
                        ?<p>{fav.length}</p>
                        :<p>0</p>
                    }
                </Link>
            </div>
        </header>
    )
}

export default Header;