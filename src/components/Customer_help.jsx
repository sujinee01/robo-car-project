import React, { useEffect, useState } from "react";
import styles from "../style/Custom_rating.module.css";
import s from "../style/Customer_help.module.css";
import styled from "styled-components";

import CustomMain from "./Customer_main";
import CustomRating from "./Customer_rating";

const Btn = styled.button`
  width: 400px;
  height: 50px;
  background: #f5f5f5;
  color: black;
  font-size: 15px;
  border: none;
  font-weight: 500;
  cursor: pointer;
`;

/** 고객 센터 페이지 */
const CustomerHelp = () => {
  const [activeTab, setActiveTab] = useState("자주 묻는 질문");

  useEffect(() => {
    if (activeTab) {
    }
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    console.log(activeTab);
  };

  return (
    <div className={styles.customratingcontainer}>
      <div className={styles.ratingcontainer}>
        <h1 className={styles.rating_topic}>고객센터</h1>
        <div className={styles.rating_btn}>
          <Btn
            type="radio"
            name="tab"
            className={` ${s.btn} ${
              activeTab === "자주 묻는 질문" ? s.active : ""
            }`}
            onClick={() => handleTabClick("자주 묻는 질문")}
          >
            자주 묻는 질문
          </Btn>
          <Btn
            type="radio"
            name="tab"
            className={` ${s.btn} ${
              activeTab === "서비스 평가" ? s.active : ""
            }`}
            onClick={() => handleTabClick("서비스 평가")}
          >
            서비스 평가
          </Btn>
        </div>
      </div>
      {activeTab === "자주 묻는 질문" ? <CustomMain /> : <CustomRating />}
    </div>
  );
};

export default CustomerHelp;
