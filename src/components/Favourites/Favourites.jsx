import React from 'react';
import { useSelector } from 'react-redux';
import style from '../People/People.module.css';
import { Link } from 'react-router-dom';
import Item from '../People/Item';

const Favourites = () => {

    const fav = useSelector(state => state.slice);

    return(
        <div className={style.wrapper} >
      {
        fav.map(item => (
          <Link to={`/person/${item.id}`} >
            <Item person={item} key={item.id} />
          </Link>
        ))
      }
      </div>
    )
}

export default Favourites;