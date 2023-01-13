import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Router from 'next/router';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { END } from 'redux-saga';
import wrapper from '../store/configureStore';
// CSS
import { Main, Logo, Form, InputWrapper, BtnWrapper, LinkToBtn } from '../styles/signup.styled.component';
// custom hooks
import useInput from '../hooks/useInput';
// axios
import axios from 'axios';

const Signup = () => {
  const dispatch = useDispatch();

  const [lastName, onChangeLastname] = useInput('');
  const [firstName, onChangeFirstName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [emailCheck, onChangeEmailCheck] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [country, onChangeCountry] = useInput('');

  const [firstNameWarning, setFirstNameWarning] = useState(true);
  const [lastNameWarning, setLastNameWarningWarning] = useState(true);
  const [emailWarning, setEmailWarning] = useState(true);
  const [emailCheckWarning, setEmailCheckWarning] = useState(true);
  const [passwordWarning, setPasswordWarning] = useState(true);
  const [passwordCheckWarning, setPasswordCheckWarning] = useState(true);
  const [countryWarning, setCountryWarning] = useState(true);

  const { signUpLoading, signUpDone, signUpError, me } = useSelector((state) => state.user);

  useEffect(() => {
    if (me && me.id) {
      Router.replace('/'); // 페이지가 없어짐
    }
  }, [me && me.id]);

  useEffect(() => {
    if (signUpDone) {
      Router.push('/');
    }
  }, [signUpDone]);

  useEffect(() => {
    console.log('signUpError: ', signUpError);
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const AreYouSureMoveToLoginPage = () => {
    if (confirm('로그인 페이지로 이동하시겠습니까?')) Router.push('/');
  };

  const AreYouSureCancleToSignup = () => {
    if (confirm('회원가입을 취소하시겠습니까?')) Router.push('/');
  };

  const onClickSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // if (!lastName) {
      //   return setLastNameWarningWarning(false);
      // } else {
      //   setLastNameWarningWarning(true);
      // }

      // if (!firstName) {
      //   return setFirstNameWarning(false);
      // } else {
      //   setFirstNameWarning(true);
      // }

      // if (!email) {
      //   return setEmailWarning(false);
      // } else {
      //   setEmailWarning(true);
      // }

      // if (email !== emailCheck) {
      //   return setEmailCheckWarning(false);
      // } else {
      //   setEmailCheckWarning(true);
      // }

      // if (!password) {
      //   return setPasswordWarning(false);
      // } else {
      //   setPasswordWarning(true);
      // }

      // if (password !== passwordCheck) {
      //   return setPasswordCheckWarning(false);
      // } else {
      //   setPasswordCheckWarning(true);
      // }

      // if (!country) {
      //   return setCountryWarning(false);
      // } else {
      //   setCountryWarning(true);
      // }

      dispatch({
        type: SIGN_UP_REQUEST,
        data: {
          email: email,
          password: password,
          nickName: firstName,
          // emailConfirm: emailCheck,
          // passwordConfirm: passwordCheck,
          // lastName: lastName,
          // country: country,
        },
      });
    },
    [email, emailCheck, password, passwordCheck, firstName, lastName, country]
  );

  return (
    <Main>
      <Logo>Admin Signup</Logo>
      <Form onSubmit={onClickSubmit}>
        <InputWrapper>
          <label>회원가입 페이지</label>
          <div>
            <label>성</label>
            <p>성{lastNameWarning ? null : <span className="warning">성을 입력하세요</span>}</p>

            <input
              className="userID"
              type="text"
              placeholder="성을 입력해주세요."
              value={lastName}
              onChange={onChangeLastname}
            />
          </div>
          <div>
            <label>이름</label>
            <p>
              이름
              {firstNameWarning ? null : <span className="warning">이름을 입력하세요</span>}
            </p>

            <input
              className="userID"
              type="text"
              placeholder="이름을 입력해주세요."
              value={firstName}
              onChange={onChangeFirstName}
            />
          </div>
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
            <label>아이디 확인</label>
            <p>
              이메일 확인
              {emailCheckWarning ? null : <span className="warning">이메일이 일치하지 않습니다.</span>}
            </p>
            <input
              className="userID"
              type="email"
              placeholder="email을 다시 입력해주세요."
              value={emailCheck}
              onChange={onChangeEmailCheck}
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
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label>비밀번호 확인</label>
            <p>
              비밀번호 확인
              {passwordCheckWarning ? null : <span className="warning">비밀번호가 일치하지 않습니다.</span>}
            </p>
            <input
              className="userPW"
              type="password"
              placeholder="비밀번호를 다시 입력하세요."
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          <div>
            <label>국적</label>
            <p>
              국적
              {countryWarning ? null : <span className="warning">비밀번호가 일치하지 않습니다.</span>}
            </p>
            <input
              className="userPW"
              type="text"
              placeholder="국적을 입력하세요."
              value={country}
              onChange={onChangeCountry}
            />
          </div>
        </InputWrapper>
        <BtnWrapper>
          <button type="submit">회원가입</button>
          <button type="button" onClick={AreYouSureCancleToSignup}>
            취소
          </button>
          <div>
            <label>로그인 페이지로 이동 버튼</label>
            <LinkToBtn onClick={AreYouSureMoveToLoginPage}>로그인 페이지로</LinkToBtn>
          </div>
        </BtnWrapper>
      </Form>
    </Main>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  console.log('getServerSideProps start');
  // console.log('req.headers: ', req.headers);
  const cookie = req ? req.headers.cookie : ''; // req가 있다면 cookie에 요청에 담겨진 cookie를 할당한다.
  console.log('cookie: ', cookie);

  const Bearer = undefined;

  console.log('Bearer: ', Bearer);

  // if (cookie) {
  //   Bearer = `Bearer ${cookie?.split('=')[1]}`;
  //   console.log('Bearer: ', Bearer);
  // }

  axios.defaults.headers.authorization = ''; // 요청이 들어올 때마다 초기화 시켜주는 것이다. 여기는 클라이언트 서버에서 실행되므로 이전 요청이 남아있을 수 있기 때문이다
  if (req && Bearer) {
    axios.defaults.headers.authorization = Bearer; // 서버일때랑 cookie를 써서 요청을 보낼 때만 headers에 cookie를 넣어준다
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch(END);
  console.log('getServerSideProps end');
  await store.sagaTask.toPromise(); // store/configureStore.js > store.sagaTask
});

export default Signup;
