import React, { useMemo, useState } from "react";
import Item from "../People/Item";
import { Link } from "react-router-dom";
import style from '../People/People.module.css';

const Search = ({data}) => {

    const [search, setSearch] = useState('');

    const filteredData = useMemo(() => {
        if(Array.isArray(data)){
            return data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }
    }, [search, data]);


    return(
        <div>
            <input
             type="text"
             value={search}
             onChange={e => setSearch(e.target.value)}
             placeholder="search"
             style={{width: '50%', borderRadius: '12px', padding: '5px'}}
            />
            <div className={style.wrapper} style={{marginTop: '3%'}} >
                {
                    search
                    ? Array.isArray(filteredData) && filteredData.map(item => (
                        <Link to={`/person/${item.id}`} >
                            <Item person={item} key={item.id} />
                        </Link>
                    ))
                    : Array.isArray(data) && data.slice(0, 5).map(item => (
                        <Link to={`/person/${item.id}`} >
                            <Item person={item} key={item.id} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Search;