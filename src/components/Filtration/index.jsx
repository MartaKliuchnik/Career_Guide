import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.css";
import {
  loadMajorFiltration,
  loadIndustriesFiltration,
  loadSizeFiltration,
} from "../../store/asyncAction/filtration";
import { load_videous_action } from "../../store/reducer/videoReducer";

export default function Filtration({ id }) {
  const dispatch = useDispatch();
  const major_array = useSelector((state) => state.major_filtration);
  const industries_array = useSelector((state) => state.industry_filtration);
  const size_array = useSelector((state) => state.size_filtration);

  const [majorName, setMajor] = useState("");
  const [industriesName, setIndustries] = useState("");
  const [sizeName, setSize] = useState("");
  let apiUrl = `http://localhost:8089/api/articles?roleId=${id}`;

  useEffect(() => {
    const major = major_array.find((el) => el.name === majorName);
    const size = size_array.find((el) => el.name === sizeName);
    const industries = industries_array.find(
      (el) => el.name === industriesName
    );

    const getAllFilters = async () => {
      
        if (industries !== undefined) {
          apiUrl += `&industryId=${industries.id}`;
        }
      
        if (major !== undefined) {
          apiUrl += `&majorId=${major.id}`;
        }
      
        if (size !== undefined) {
          apiUrl += `&sizeId=${size.id}`;
        }
      const response = await fetch(apiUrl);

      const data = await response.json();
      dispatch(load_videous_action(data));
    };
    getAllFilters();
  }, [majorName, industriesName, sizeName]);

  useEffect(() => {
    setMajor("");
    setIndustries("");
    setSize("");
  }, [id]);

  return (
    <div className={s.filtration}>
      <form className={s.form}>
        <select
          name="major_filtr"
          className={s.search}
          value={majorName}
          onChange={(event) => setMajor(event.target.value)}
          onClick={() => dispatch(loadMajorFiltration())}
        >
          <option value="" selected>
            Major
          </option>
          {major_array.map((major) => (
            <option
              value={major.name}
              key={major.id}
              onClick={() => setMajor(major.name)}
            >
              {major.name}
            </option>
          ))}
        </select>

        <select
          name="industrie_filtr"
          className={s.search}
          value={industriesName}
          onChange={(event) => setIndustries(event.target.value)}
          onClick={() => dispatch(loadIndustriesFiltration())}
        >
          <option value="" selected>
            Industries
          </option>
          {industries_array.map((industrie) => (
            <option
              value={industrie.name}
              key={industrie.id}
              onClick={() => setIndustries(industrie.name)}
            >
              {industrie.name}
            </option>
          ))}
        </select>

        <select
          name="size_filtr"
          className={s.search}
          value={sizeName}
          onChange={(event) => setSize(event.target.value)}
          onClick={() => dispatch(loadSizeFiltration())}
        >
          <option value="" selected>
            Size
          </option>
          {size_array.map((size) => (
            <option
              value={size.name}
              key={size.id}
              onClick={() => setSize(size.name)}
            >
              {size.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
