import React from "react";
import Item from "./Item";
import style from './People.module.css';
import { Link } from "react-router-dom";

const People = ({data, goToNextPage, goToPreviousPage, currentPage, itemsPerPage}) => {
  console.log(data);
  return (
    <div>
      <div className={style.btns} >
        <button disabled={currentPage === 1} onClick={goToPreviousPage}>Prev</button>
        <button disabled={data.length < itemsPerPage} onClick={goToNextPage}>Next</button>
      </div>
      <div className={style.wrapper} >
      {
        data.map(item => (
          <Link to={`/person/${item.id}`} >
            <Item person={item} key={item.id} />
          </Link>
        ))
      }
      </div>
    </div>
  );
};

export default People;
