import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Context } from "../../context";
import s from "./index.module.css";

export default function Pagination() {
  const { videousPerPage, paginate, scrollToVideo } = useContext(Context);
  const videous_array = useSelector((state) => state.videous);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(videous_array?.length / videousPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {videous_array?.length > 4 ? (
        <ul className={s.pagination}>
          {pageNumbers.map((number) => (
            <button
              onClick={() => {
                paginate(number);
                scrollToVideo()
              }}
              className={s.page_item}
              key={number}
            >
              <div>{number}</div>
            </button>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
