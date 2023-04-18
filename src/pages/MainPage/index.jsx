import React, { useEffect } from "react";
import Filtration from "../../components/Filtration";
import SearchBar from "../../components/SearchBar";
import VideoContainer from "../../components/VideoContainer";
import s from "./index.module.css";
import { useParams } from "react-router-dom";
import { loadVideous } from "../../store/asyncAction/videos";
import { useDispatch } from "react-redux";

export default function MainPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadVideous(id));
  }, []);

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.search}>
          <SearchBar type='mainPage'/>
        </div>
        <div className={s.content}>
          <Filtration id={id} />
          <VideoContainer id={id} />
        </div>
      </div>
    </>
  );
}
