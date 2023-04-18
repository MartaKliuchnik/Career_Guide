import React, { useContext, useEffect } from "react";
import VideoItem from "../VideoItem";
import { useDispatch } from "react-redux";
import s from "./index.module.css";
import { Context } from "../../context";
import Pagination from "../../components/Pagination";
import { loadVideous } from "../../store/asyncAction/videos";

export default function VideoContainer({ id }) {
  const { currentVideo } = useContext(Context);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadVideous(id));
  }, []);

  
  return (
    <div className={s.wrapper}>
      {currentVideo?.length === 0
        ? <p className={s.empty_result}>Sorry, no matches were found.</p>
        :
          <div className={s.videous_container}>
            {currentVideo?.map((el) => <VideoItem key={el.id} {...el} />)}
          </div>
      }
      

      <Pagination />
    </div>
  );
}
