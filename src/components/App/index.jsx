import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import EmptyRequestPage from "../../pages/EmptyRequestPage";
import Layout from "../Layout";
import { Context } from "../../context";
import HomePage from "../../pages/HomePage";
import { useSelector } from "react-redux";

function App() {
  const videous_array = useSelector((state) => state.videous);
  const [currentPage, setCurrentPage] = useState(1);
  const [videousPerPage] = useState(4);
  const [roles, setRoles] = useState([]);

  const [emptyRequest, setEmptyRequest] = useState('');

  useEffect(() => {
    const getRoles = async () => {
      const response = await fetch(`http://localhost:8089/api/roles`);
      const data = await response.json();
      setRoles(data);
    };
    getRoles();
  }, []);

  const lastVideoIndex = currentPage * videousPerPage;
  const firstVideoIndex = lastVideoIndex - videousPerPage;
  const currentVideo =
    videous_array?.length > 4
      ? videous_array?.slice(firstVideoIndex, lastVideoIndex)
      : videous_array;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const scrollToVideo = () => {
    const videoElement = document.querySelector('#header');
    videoElement.scrollIntoView({ behavior: 'smooth' });
  }


  return (
    <Context.Provider
      value={{
        currentVideo,
        videousPerPage,
        setCurrentPage,
        paginate,
        scrollToVideo,
        emptyRequest,
        setEmptyRequest,
        roles
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="video_search/:id" element={<MainPage />} />
          <Route path='*' element={<EmptyRequestPage/>} />
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;
