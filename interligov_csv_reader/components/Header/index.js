import React, { useState, useEffect } from "react";
// import Link from 'next/link'
import styles from "./styles.module.scss";
import courier from "../../public/database.csv";
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import Router from "next/router";
import RenderResult from "next/dist/server/render-result";

function Header() {
  const [showLogin, setLogin] = useState(false);
  const [csv_array, setCSV] = useState(null);

  const csv_URL = "../../public/database.csv";

  const parse_csv = (text) => {
    const text_result = {
      header: [],
      data: [],
    };

    const [header, ...content] = text.split("/n");

    text_result.header = header.split(",");

    content.forEach((data_lines) => {
      text_result.data.push(data_lines.split(","));
    });
  };

  useEffect(() => {
    fetch(csv_URL)
      .then((response) => response.text())
      .then((text) => {
        setCSV(parse_csv(text));
      });
  }, []);

  const get_user = async () => {
    await fetch("https://dario.marbr.net/wp-json/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userData")}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => console.log(json), notify_loggin("success"));
  };

  // função de jwt, validação e sign in
  const handle_sign_in = async () => {
    await get_token();

    await validate_token();

    await get_user();

    return Router.reload(window.location.pathname);
  };

  return (
    <div className={styles.headerContainer}>
      <header></header>
    </div>
  );
}

export default Header;
