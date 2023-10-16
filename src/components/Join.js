import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Join.css";

function Join() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(""); // 회원가입 메시지 상태

  useEffect(() => {
    if (message) {
      alert(message);
    }
  }, [message]);

  const signUp = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const id = formData.get("id");
    const password = formData.get("password");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const addr1 = formData.get("addr1");
    const addr2 = formData.get("addr2");
    const office = formData.get("office");

    try {
      const response = await fetch("/Join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          id,
          password,
          phone,
          email,
          addr1,
          addr2,
          office,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success) {
          setMessage(`환영합니다, ${name}님!`);
          alert(message); // 현재 상태 값을 사용
          navigate("/login"); // 로그인 페이지로 이동
        } else {
          setMessage("회원가입에 실패했습니다.");
          alert(message); // 현재 상태 값을 사용
        }
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
    }
  };

  // 초기값 세팅 - 아이디, 비밀번호, 비밀번호확인, 이름, 이메일, 전화번호, 주소
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // 오류메세지 상태 저장
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [addressMessage, setAddressMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isname, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isAddress, setIsAddress] = useState(false);

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("4~16문자 이내의 대/소문자 또는 숫자만 입력해 주세요!");
      setIsId(false);
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setIsId(true);
    }
  };
  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage("숫자+영문자+특수문자 조합으로 8~16자 입력해주세요!");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };
  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("다시 입력해주세요.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("비밀번호가 일치합니다!");
      setIsPasswordConfirm(true);
      const pwdConfirm = document.getElementById("pwd_confirm"); // 비밀번호가 일치하는 경우 안내 메세지 녹색으로
      pwdConfirm.style.color = "green";
    }
  };
  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);

    if (currentName.length < 2 || currentName.length > 5) {
      setNameMessage("이름은 2글자 이상 5글자 이하로 입력해주세요!");
      setIsName(false);
    } else {
      setIsName(true);
    }
  };
  const onChangePhone = (getNumber) => {
    const currentPhone = getNumber;
    setPhone(currentPhone);
    const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (!phoneRegExp.test(currentPhone)) {
      setPhoneMessage("올바른 형식이 아닙니다!");
      setIsPhone(false);
    } else {
      setPhoneMessage("사용 가능한 번호입니다:-)");
      setIsPhone(true);
    }
  };
  const addHyphen = (e) => {
    const currentNumber = e.target.value;
    setPhone(currentNumber);
    if (currentNumber.length == 3 || currentNumber.length == 8) {
      setPhone(currentNumber + "-");
      onChangePhone(currentNumber + "-");
    } else {
      onChangePhone(currentNumber);
    }
  };
  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmail(false);
    } else {
      setEmailMessage("사용 가능한 이메일 입니다.");
      setIsEmail(true);
    }
  };
  const onChangeAddress = (e) => {
    const currentAddress = e.target.value;
    setAddress(currentAddress);
  };

  return (
    <>
      <div class="Join_body">
        <h3>ROBO-CAR</h3>
        <h3>회원가입</h3>
        <br />
        <form className="form" action="/Join" method="post" onSubmit={signUp}>
          <div className="form-el">
            <label class="red_star">*</label>
            <label htmlFor="id">아이디</label> <br />
            <input
              class="id_textbox"
              id="id"
              name="id"
              value={id}
              onChange={onChangeId}
            />
            <button class="id_confirm" onClick="test()">
              중복확인
            </button>
            <p className="message"> {idMessage} </p>
          </div>

          <div className="form-el">
            <label class="red_star">*</label>
            <label htmlFor="password">비밀번호</label> <br />
            <input
              type="password"
              class="textbox"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
            <p className="message">{passwordMessage}</p>
          </div>

          <div className="form-el">
            <label class="red_star">*</label>
            <label htmlFor="passwordConfirm">비밀번호 확인</label> <br />
            <input
              type="password"
              class="textbox"
              id="passwordConfirm"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
            <p id="pwd_confirm" className="message">
              {passwordConfirmMessage}
            </p>
          </div>

          <div className="form-el">
            <label class="red_star">*</label>
            <label htmlFor="name">이름</label> <br />
            <input
              class="textbox"
              id="name"
              name="name"
              value={name}
              onChange={onChangeName}
            />
            <p className="message">{nameMessage}</p>
          </div>

          <div className="form-el">
            <label class="red_star">*</label>
            <label htmlFor="phone">전화번호</label> <br />
            <input
              class="textbox"
              id="phone"
              name="phone"
              value={phone}
              onChange={addHyphen}
            />
            <p className="message">{phoneMessage}</p>
          </div>

          <div className="form-el">
            <label htmlFor="email">이메일</label> <br />
            <input
              class="textbox"
              id="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
            />
            <p className="message">{emailMessage}</p>
          </div>

          <div className="form-el">
            <label class="red_star">*</label>
            <label htmlFor="address">주소</label> <br />
            <div class="addr_form">
              <input class="addr_input" type="text" name="addr1"></input>
              <button class="addr_find" type="submit">
                주소찾기
              </button>
              <input class="textbox" type="text" name="addr2"></input>
            </div>
          </div>

          <div className="form-el">
            <label class="red_star">*</label>
            <label htmlFor="office">회사명</label> <br />
            <input class="textbox" id="office" name="office" />
          </div>
          <br />
          <button class="join" type="submit">
            회원가입
          </button>
        </form>
      </div>
    </>
  );
}

export default Join;
