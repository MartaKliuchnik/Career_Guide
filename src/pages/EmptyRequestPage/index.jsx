import React, { useContext } from "react";
import SearchBar from "../../components/SearchBar";
import { Context } from "../../context";
import s from "./index.module.css";
import empty_icon from '../../icons/search-empty_icon.png';

export default function EmptyRequestPage() {
  const { emptyRequest } = useContext(Context);

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.search}>
          <SearchBar type='mainPage'/>
        </div>

        <div className={s.info_text_container}>
          <img src={empty_icon} alt="icon" />
          <div className={s.info_text_wrapper}>
            <h2>0 results</h2>
            <div className={s.info_text}>
              <p>We couldn't find anything for </p>
              <p className={s.users_word}>'{emptyRequest}'</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
