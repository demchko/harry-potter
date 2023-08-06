import React, {useState} from "react";
import './global.css';
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import People from "./components/People/People";
import Search from "./components/Search/Search";
import ItemCart from "./components/People/ItemCart";
import {useGetArrQuery} from './api/api'
import Favourites from "./components/Favourites/Favourites";


const App = () => {

  const { data: arr } = useGetArrQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  let imgArr;
  if (Array.isArray(arr)) {
    imgArr = arr.filter(item => item.image);
  }

  // Обчислюємо індекси початку та кінця для поточної сторінки
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(imgArr) ? imgArr.slice(indexOfFirstItem, indexOfLastItem) : [];

  console.log(currentItems);

  // Функція для перехіду до попередньої сторінки
  const goToPreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  // Функція для переходу до наступної сторінки
  const goToNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className="wrapper" >
        <Header />
        <div style={{width: '80%', margin: '4% auto'}} >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/people" element={<People 
                                          data={currentItems} 
                                          currentPage={currentPage}
                                          goToNextPage={goToNextPage} 
                                          itemsPerPage={itemsPerPage}
                                          goToPreviousPage={goToPreviousPage} />} />
            <Route path="/search" element={<Search data={imgArr} />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/person/:id" element={<ItemCart data={imgArr} />} />
          </Routes>
        </div>
    </div>
  );
};

export default App;
