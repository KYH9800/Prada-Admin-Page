import React, { useState } from 'react';
import Link from 'next/link';
// CSS
import { Main, Logo, Form, InputWrapper, BtnWrapper } from '../styles/home.styled.component';
// custom hooks
import useInput from '../hooks/useInput';
// axios
import axios from 'axios';

const Home = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onClickSubmit = (e) => {
    e.preventDefault();
    console.log('클릭');
    console.log('email: ', email);
    console.log('password: ', password);
  };

  return (
    <Main>
      <Logo>Admin Login</Logo>
      <Form onSubmit={onClickSubmit}>
        <InputWrapper>
          <label>로그인 페이지</label>
          <div>
            <label>아이디</label>
            <input
              className="userID"
              type="email"
              placeholder="email을 입력해주세요."
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div>
            <label>비밀번호</label>
            <input
              className="userPW"
              type="password"
              placeholder="password 입력해주세요."
              value={password}
              onChange={onChangePassword}
            />
          </div>
        </InputWrapper>
        <BtnWrapper>
          <button type="submit">로그인</button>
          <Link href="/signup">
            <button type="button">회원가입</button>
          </Link>
        </BtnWrapper>
      </Form>
    </Main>
  );
};

export default Home;
