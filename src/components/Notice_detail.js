import React from "react";
import "../style/Notice_detail.css";

function Notice_detail() {
  return (
    <section class="notice_page">
      <body>
        <div id="wrap">
          <h1 id="title">공지사항</h1>
          <nav id="nav">
            <table class="board-table">
              <thead>
                <tr>
                  <th scope="col" class="th-num">
                    04 &nbsp; &nbsp; &nbsp;공지
                  </th>
                  <th scope="col" class="th-title">
                    공지사항입니다 이용해주셔서 감사합니다
                  </th>
                  <th scope="col" class="th-date">
                    관리자
                  </th>
                </tr>
              </thead>
            </table>
          </nav>
          <section id="container">
            <div class="content">
              차량관제 서비스를 시연해 보실 수 있는 관리자화면 주소입니다.{" "}
              <br />
              <br />
              https://robocar.co.kr
              <br />
              <br />
              설명이 필요하신 경우 당사 고객센터로 연락을 주신 후 업체명 /
              담당자명 / 연락처 / 도입사유등 말씀해 주시면 시연 및 안내가
              가능합니다.
            </div>
            <button class="btn btnlist">목록</button>
          </section>
        </div>
      </body>
    </section>
  );
}

export default Notice_detail;
