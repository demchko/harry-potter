import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import style from './People.module.css';
import {FcLikePlaceholder} from 'react-icons/fc';
import {FcLike} from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/addFav';

const ItemCart = ({data}) => {

    let person;
    if(Array.isArray(data)){
        const {id} = useParams();
        person = data.find(p => p.id === id);
    }

    const dispatch = useDispatch();
    const fav = useSelector(state => state.slice);
    const [ico, setIco] = useState(Array.isArray(fav) && fav.some(p => p.id === person.id));


    const addToFav = (person) => {
        if(fav.find(p => p.id === person.id)){
            setIco(false);
        } else{
            setIco(true);
        }
        dispatch(addItem(person));
    }

    return(
        <div className={style.container} >
            {
                Array.isArray(data) && <div className={style.person} >
                    <div className={style.infoImg} >
                        <img src={person.image} />
                        {
                            ico
                            ? <FcLike  className={style.icon} onClick={() => addToFav(person)} />
                            : <FcLikePlaceholder className={style.icon} onClick={() => addToFav(person)} />
                        }
                    </div>
                    <div className={style.infoBlock} >
                        <div className={style.info} >
                            <p>Name:</p><span>{person.name}</span>
                        </div>
                        <div className={style.info} >
                            <p>Actor:</p><span>{person.actor}</span>
                        </div>
                        <div className={style.info} >
                            <p>Ancestry:</p><span>{person.ancestry}</span>
                        </div>
                       
                        <div className={style.info} >
                            <p>Gender:</p><span>{person.gender}</span>
                        </div>
                        <div className={style.info} >
                            <p>Eye Color:</p><span>{person.eyeColour}</span>
                        </div>
                        <div className={style.info} >
                            <p>Hair Colour:</p><span>{person.hairColour}</span>
                        </div>
                        <div className={style.info} >
                            <p>Patronus:</p><span>{person.patronus}</span>
                        </div>
                        <div className={style.info} >
                            <p>House:</p><span>{person.house}</span>
                        </div>
                        <div className={style.info} >
                            <p>Species:</p><span>{person.species}</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ItemCart;