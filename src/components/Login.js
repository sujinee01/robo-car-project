import React, { useState } from "react";
import styles from "../style/Login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // 여기에서 서버로 로그인 요청을 보내는 로직을 추가할 수 있습니다.
    // 서버로 요청을 보내어 로그인이 성공하면 setLoggedIn(true)를 호출하여 로그인 상태를 업데이트할 수 있습니다.
    // 이 예제에서는 단순히 username과 password가 일치하는지 확인하는 방식으로 로그인을 시뮬레이션합니다.
    if (username === "user" && password === "password") {
      setLoggedIn(true);
    } else {
      alert("아이디와 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className={styles.login_body}>
      <div className={styles.login_form}>
        <div className={styles.login_tit_wrapper}>
          <h3 className={styles.login_tit}>
            ROBO-CAR
            <br />
            아이디와
            <br />
            비밀번호를 입력해주세요
          </h3>
        </div>
        {loggedIn ? (
          <p>Welcome, {username}!</p>
        ) : (
          <div className={styles.login_input_wrapper}>
            <label className={styles.login_label}>아이디</label>
            <input
              className={styles.id}
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
            <br />
            <label className={styles.login_label}>비밀번호</label>
            <input
              className={styles.password}
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <br />
            <button className={styles.login_comple} onClick={handleLogin}>
              <strong>로그인</strong>
            </button>
            <br />
            <br />
            <button className={styles.go_join}>
              <a href="/join">회원가입</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
