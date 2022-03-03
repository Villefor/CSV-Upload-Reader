import React, { useState, useEffect } from "react";
import Table from "../Table/index";
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

  return (
    <div className={styles.headerContainer}>
      <main>
        <div>
          <Table csv={csv} />
        </div>
      </main>
    </div>
  );
}

export default Header;
