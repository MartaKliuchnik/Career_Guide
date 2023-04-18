import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import s from "./index.module.css";

export default function Layout() {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
