import React from "react";
import "../style/Main_page.css";
import racingicon from "../assets/racing.png";
import calendar from "../assets/calendar.png";
import packagepick from "../assets/packagepick.png";
import delivery from "../assets/delivery-truck.png";
import laptop from "../assets/laptop.png";
import arrow from "../assets/arrow.png";
import effectimage01 from "../assets/effectimage_01.jpg";
import effectimage02 from "../assets/effectimage_02.jpg";

import ImageSlider from "./Image_slider";

const MainPage = () => {
  return (
    <>
      <ImageSlider />
      <div className="main_wrap">
        <div className="main_service">
          <div className="service_title">
            <h1>
              ROBO-CAR만의 <br /> 특별한 서비스를 만나보세요!
            </h1>
          </div>
          <div className="service_wrap">
            <div className="service_inner">
              <img src={racingicon} className="racingicon" alt="React" />
              <p>고객맞춤 운송예약</p>
              <span>
                배송물품의 종류와 무게에 따라 운송차량선택가능, <br /> 24시간
                운송서비스로 원하는 픽업시간 선택가능!
              </span>
            </div>
            <div className="service_inner">
              <img src={racingicon} className="racingicon" alt="React" />
              <p>차량관제시스템으로 실시간 위치 확인</p>
              <span>
                차량관제시스템으로 차량의 경로 실시간 확인가능! <br /> 무인
                차량으로 배차와 이동 경로의 효율성 UP!
              </span>
            </div>
            <div className="service_inner">
              <img src={racingicon} className="racingicon" alt="React" />
              <p>24시간 운송서비스</p>
              <span>
                24시간 운송 서비스로 원하는 날짜 시간대 선택 가능, <br />{" "}
                무인차량으로 언제든 빠른 픽업과 배송!
              </span>
            </div>
            <div className="service_inner">
              <img src={racingicon} className="racingicon" alt="React" />
              <p>고객맞춤 운송예약</p>
              <span>
                배송물품의 종류와 무게에 따라 운송차량선택가능, <br /> 24시간
                운송서비스로 원하는 픽업시간 선택가능!
              </span>
            </div>
          </div>
          <div className="service_button_wrap">
            <div className="service_button">
              <a href="#">서비스 더보기</a>
            </div>
          </div>
        </div>

        <div className="main_step">
          <div className="stitle_wrap">
            <div className="step_title">
              <h1>
                ROBO-CAR의 간편한 <br /> 운송서비스 단계
              </h1>
            </div>
          </div>
          <div className="step_wrap">
            <div className="icon_wrap">
              <div className="icon_inner">
                <img src={calendar} className="stepicon" alt="React" />
              </div>
              <div className="icon_arrow">
                <img src={arrow} className="arrowicon" alt="React" />
              </div>
              <div className="icon_inner">
                <img src={packagepick} className="stepicon" alt="React" />
              </div>
              <div className="icon_arrow">
                <img src={arrow} className="arrowicon" alt="React" />
              </div>
              <div className="icon_inner">
                <img src={delivery} className="stepicon" alt="React" />
              </div>
              <div className="icon_arrow">
                <img src={arrow} className="arrowicon" alt="React" />
              </div>
              <div className="icon_inner">
                <img src={laptop} className="stepicon" alt="React" />
              </div>
            </div>
          </div>

          <div className="step_text">
            <div className="text_wrap">
              <div className="text_inner">
                <p>STEP01</p>
                <span>
                  운송차량과 날짜 선택후
                  <br />
                  운송예약 진행
                </span>
              </div>
              <div className="text_inner">
                <p>STEP02</p>
                <span>
                  예약건의 무인차량 배정후
                  <br />
                  물품 픽업 시작
                </span>
              </div>
              <div className="text_inner">
                <p>STEP03</p>
                <span>
                  운송차량 관제 시스템을 통해
                  <br />
                  실시간 이동 경로 확인
                </span>
              </div>
              <div className="text_inner">
                <p>STEP04</p>
                <span>
                  예약내역 페이지를 통해
                  <br />
                  배송 진행 상황 확인
                </span>
              </div>
            </div>
          </div>
          <div className="step_button_wrap">
            <div className="step_button">
              <a href="#">운송 예약하기</a>
            </div>
          </div>
        </div>

        <div className="effect_back">
          <div className="main_effect">
            <div className="title_effect">
              <h1>
                ROBO-CAR의 <br />
                무인차량관제 시스템 도입 효과
              </h1>
            </div>

            <div className="effect_wrap">
              <div className="effect_inner">
                <img src={effectimage01} className="effect_image" alt="React" />
                <p>
                  운송 서비스를 이용하는
                  <br />
                  고객님들의 만족도를 향상시켜드립니다.
                </p>
                <span>
                  무인 운송 차량으로 24시간 서비스 이용이 가능하고
                  <br />
                  빠른 픽업과 배송이 보장됩니다. <br />
                  실시간 위치 및 배송상태 확인으로 신뢰도를 형성합니다.{" "}
                </span>
              </div>
              <div className="effect_inner">
                <img src={effectimage02} className="effect_image" alt="React" />
                <p className="exception">차량관리의 효율성이 증가합니다.</p>
                <span>
                  차량 관제 시스템으로 차량을 실시간 관리할 수 있고
                  <br />
                  무인 운송 차량의 효율적인 배차와 이동경로로
                  <br />
                  운송 비용을 절감하여 저렴한 비용으로 이용이 가능합니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      /*main_wrap*/
    </>
  );
};

export default MainPage;
