import React from "react";
import "../style/Notice_main.css";

function Notice_main() {
  return (
    <section class="notice">
      <div class="page-title">
        <div class="container">
          <h3>공지사항</h3>
        </div>
      </div>
      <div id="board-search">
        <div class="container">
          <div class="search-window">
            <form action="">
              <div class="search-wrap">
                <label for="search" class="blind">
                  공지사항 내용 검색
                </label>
                <input
                  id="search"
                  type="search"
                  name=""
                  placeholder="검색어를 입력해주세요."
                  value=""
                />
                <button type="submit" class="btn btn-search">
                  검색
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="board-list">
        <div class="container">
          <table class="board-table">
            <thead>
              <tr>
                <th scope="col" class="th-num">
                  번호
                </th>
                <th scope="col" class="th-title">
                  제목
                </th>
                <th scope="col" class="th-date">
                  작성자
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>5</td>
                <th>
                  <a href="#!">[공지사항] 개인정보 처리방침 변경안내처리방침</a>
                  <p>테스트</p>
                </th>
                <td>관리자</td>
              </tr>

              <tr>
                <td>4</td>
                <th>
                  <a>공지사항입니다. 이용해주셔서 감사합니다</a>
                </th>
                <td>관리자</td>
              </tr>

              <tr>
                <td>3</td>
                <th>
                  <a>공지사항입니다. 이용해주셔서 감사합니다</a>
                </th>
                <td>관리자</td>
              </tr>

              <tr>
                <td>2</td>
                <th>
                  <a>공지사항입니다. 이용해주셔서 감사합니다</a>
                </th>
                <td>관리자</td>
              </tr>

              <tr>
                <td>1</td>
                <th>
                  <a>공지사항입니다. 이용해주셔서 감사합니다</a>
                </th>
                <td>관리자</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <div class="page-list">
        <div class="num-btn">
          <button class="btn btn-page">1</button>
        </div>
        <div class="num-btn">
          <button class="btn btn-page">2</button>
        </div>
      </div>
    </section>
  );
}

export default Notice_main;
