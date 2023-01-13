import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Router from 'next/router';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction, LOAD_MY_INFO_REQUEST, LOG_OUT_REQUEST } from '../reducers/user';
import { END } from 'redux-saga';
import wrapper from '../store/configureStore';
// CSS
import { Main, Logo, Form, InputWrapper, BtnWrapper, LinkToBtn } from '../styles/home.styled.component';
// custom hooks
import useInput from '../hooks/useInput';
// axios
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [emailWarning, setEmailWarning] = useState(true);
  const [passwordWarning, setPasswordWarning] = useState(true);

  const { logInLoading, logInDone, logInError, me } = useSelector((state) => state.user);
  console.log('token: ', me?.token); //! 여기서 token을 headers에 담아주고 넘어가기 useEffect 확인

  // useEffect(() => {
  //   if (me) {
  //     Router.push('/getItemPage');
  //   }
  // });

  useEffect(() => {
    if (logInDone) {
      Router.push('/');
    }
  }, [logInDone]);

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onClickSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // if (!email) {
      //   return setEmailWarning(false);
      // } else {
      //   setEmailWarning(true);
      // }

      // if (!password) {
      //   return setPasswordWarning(false);
      // } else {
      //   setPasswordWarning(true);
      // }

      dispatch(
        loginRequestAction({
          email: 'test@test.com',
          password: 'a123123123!',
        })
      );
    },
    [email, password]
  ); // 해당 값이 변할 때 함수를 기억

  const onClickLogout = () => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  };

  return (
    <Main>
      <Logo>Admin Login</Logo>
      <Form onSubmit={onClickSubmit}>
        <InputWrapper>
          <label>로그인 페이지</label>
          <div>
            <label>아이디</label>
            <p>
              이메일
              {emailWarning ? null : <span className="warning">이메일을 입력하세요</span>}
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
            <label>비밀번호</label>
            <p>
              비밀번호
              {passwordWarning ? null : <span className="warning">비밀번호를 입력하세요.</span>}
            </p>
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

          <button type="button" onClick={onClickLogout}>
            로그아웃
          </button>
        </BtnWrapper>
      </Form>
    </Main>
  );
};

export default Home;

// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
//   console.log('getServerSideProps start');
//   console.log('req.headers: ', req.headers);
//   const cookie = req ? req.headers.cookie : ''; // req가 있다면 cookie에 요청에 담겨진 cookie를 할당한다.
//   console.log('cookie: ', cookie);
//   console.log('axios.defaults.headers.Cookie: ', axios.defaults.headers);
//   axios.defaults.headers.authorization = ''; // 요청이 들어올 때마다 초기화 시켜주는 것이다. 여기는 클라이언트 서버에서 실행되므로 이전 요청이 남아있을 수 있기 때문이다
//   if (req && cookie) {
//     axios.defaults.headers.authorization = cookie; // 서버일때랑 cookie를 써서 요청을 보낼 때만 headers에 cookie를 넣어준다
//   }
//   store.dispatch({
//     type: LOAD_MY_INFO_REQUEST,
//   });
//   store.dispatch(END);
//   console.log('getServerSideProps end');
//   await store.sagaTask.toPromise(); // store/configureStore.js > store.sagaTask
// });
