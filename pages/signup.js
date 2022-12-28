import React, { useState } from 'react';
import Link from 'next/link';
// CSS
import { Main, Logo, Form, InputWrapper, BtnWrapper, LinkToBtn } from '../styles/signup.styled.component';
// custom hooks
import useInput from '../hooks/useInput';
// axios
import axios from 'axios';

const Signup = () => {
  const [name, onChangeName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [emailCheck, onChangeEmailCheck] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');

  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log('클릭');
    console.log('email: ', email);
    console.log('password: ', password);
  };

  return (
    <Main>
      <Logo>Admin Signup</Logo>
      <Form onSubmit={onClickSubmit}>
        <InputWrapper>
          <label>회원가입 페이지</label>
          <div>
            <label>이름</label>
            <p>
              이름
              {true ? <span className="warning">이름을 입력하세요</span> : null}
            </p>

            <input
              className="userID"
              type="email"
              placeholder="email을 입력해주세요."
              value={name}
              onChange={onChangeName}
            />
          </div>
          <div>
            <label>아이디</label>
            <p>
              이메일
              {false ? (
                <span className="warning">이메일을 입력하세요</span>
              ) : (
                <span className="success">사용가능한 이메일 입니다.</span>
              )}
            </p>
            <input
              className="userID"
              type="email"
              placeholder="email을 입력해주세요."
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div>
            <label>아이디 확인</label>
            <p>
              이메일 확인
              {false ? (
                <span className="warning">이메일이 일치하지 않습니다.</span>
              ) : (
                <span className="success">이메일이 일치합니다.</span>
              )}
            </p>
            <input
              className="userID"
              type="email"
              placeholder="email을 입력해주세요."
              value={emailCheck}
              onChange={onChangeEmailCheck}
            />
          </div>
          <div>
            <label>비밀번호</label>
            <p>
              비밀번호
              {false ? <span className="warning">비밀번호를 입력하세요.</span> : null}
            </p>
            <input
              className="userPW"
              type="password"
              placeholder="password 입력해주세요."
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label>비밀번호 확인</label>
            <p>
              비밀번호 확인
              {false ? (
                <span className="warning">비밀번호가 일치하지 않습니다.</span>
              ) : (
                <span className="success">비밀번호가 일치합니다.</span>
              )}
            </p>
            <input
              className="userPW"
              type="password"
              placeholder="password 입력해주세요."
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
        </InputWrapper>
        <BtnWrapper>
          <button type="submit">회원가입</button>
          <button type="button">취소</button>
          <div>
            <label>로그인 페이지로 이동 버튼</label>
            <Link href="/">
              <LinkToBtn>로그인 페이지로</LinkToBtn>
            </Link>
          </div>
        </BtnWrapper>
      </Form>
    </Main>
  );
};

export default Signup;
