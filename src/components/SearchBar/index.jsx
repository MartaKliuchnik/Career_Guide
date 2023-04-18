import React, { useContext, useState } from "react";
import { useEffect, useRef } from "react";
import s from "./index.module.css";
import { FileSearchOutlined } from "@ant-design/icons";
import { Context } from "../../context";
import { loadVideous } from "../../store/asyncAction/videos";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import icon_search from '../../icons/free_search_icon.png';
import { ClearOutlined } from '@ant-design/icons';

function SearchBar({type}) {
  const { roles, setEmptyRequest, setCurrentPage } = useContext(Context);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const [isSearchRoles, setIsSearchRoles] = useState([]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target) &&
      !event.target.classList.contains(s.popUpMenu)
    ) {
      setIsMenuActive(false);
    }
  };


  function handleSearch(event) {
    event.preventDefault();
    const { search_value } = event.target;
    setCurrentPage(1);
    const current_roles = roles.find(
      (role) => role.name === search_value.value
    );
    if (current_roles?.id) {
      navigate(`/video_search/${current_roles.id}`)
      dispatch(loadVideous(current_roles.id));
    } else {
      setEmptyRequest(search_value.value);
      navigate('*');
    };
  }

    const searchValue = (value) => {
      setIsSearchRoles(roles.filter(role => role.name.toLowerCase().startsWith(value.toLowerCase())));
    };
  

  return (
    <div ref={containerRef} className={s.container}>
      <form onSubmit={handleSearch} className={[s.wrapper, s[type]].join(' ')}>
        <input
          className={s.search_input}
          name="search_value"
          type="text"
          placeholder="Search videos..."
          onFocus={() => setIsMenuActive(true)}
          value={inputValue}
          onChange={(event) => {
            console.log(event.target.value);
            searchValue(event.target.value);
            setInputValue(event.target.value)
          }}
        />
        {
          inputValue !== ''
            ? 
            <div
              className={s.clear_input}
              onClick={() => setInputValue("")}>
              <ClearOutlined />
            </div>
            : ''
        }
        <button
          className={s.search_container}
          disabled={inputValue ? false : true}
        >
          <FileSearchOutlined />
        </button>
      </form>

      <ul className={[s.popUpMenu, s[type], isMenuActive ? s.active : ""].join(" ")}>
        {
          isSearchRoles.length === 0
            ? 
            roles.map((role) => (
              <div className={s.search} key={role.id}>
                <div className={s.icon_container}>
                  <img src={icon_search} alt="icon" />
                </div>
                <li
                    key={role.id}
                    onClick={() => {
                      setInputValue(role.name);
                      setIsMenuActive(false);
                    }}
                  >
                    {role.name}
                </li>
              </div>
            ))
            :
            isSearchRoles.map((role) => (
              <div className={s.search} key={role.id}>
                <div className={s.icon_container}>
                  <img src={icon_search} alt="icon" />
                </div>
                <li
                    key={role.id}
                    onClick={() => {
                      setInputValue(role.name);
                      setIsMenuActive(false);
                    }}
                  >
                    {role.name}
                </li>
              </div>
            ))
        }
      </ul>
    </div>
  );
}

export default SearchBar;
