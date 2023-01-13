import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import AppLayout from '../component/AppLayout';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { GET_ITEMS_REQUEST } from '../reducers/item';
import { END } from 'redux-saga';
import wrapper from '../store/configureStore';
// CSS
import {} from '../styles/getItemPage.styled.component';
// custom hooks
import useInput from '../hooks/useInput';
// axios
import axios from 'axios';

const GetItemPage = () => {
  const dispatch = useDispatch();

  const { mainItems } = useSelector((state) => state.item);
  const { me } = useSelector((state) => state.user);
  console.log('mainItems: ', mainItems);

  useEffect(() => {
    dispatch({
      type: GET_ITEMS_REQUEST,
    });
  }, []);

  return (
    <AppLayout>
      {mainItems.data?.map((item) => {
        return (
          <>
            <div>{item.title}</div>
            <div>{item.price}</div>
            <div>
              {item.ItemColors.map((v) => (
                <>
                  <div>{v.color}</div>
                </>
              ))}
            </div>
            {item.OptionSizes.map((v) => (
              <>
                <div>{v.size}</div>
                <div>{v.count}</div>
              </>
            ))}
            <div>{item.ItemInformation.content}</div>
            <div>{item.ItemInformation.material}</div>
            <div>
              {item.OptionImages.map((v) => (
                <img src={v.src} />
              ))}
            </div>
          </>
        );
      })}
    </AppLayout>
  );
};

export default GetItemPage;

// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
//   console.log('getServerSideProps start');
//   // console.log('req.headers: ', req.headers);
//   const cookie = req ? req.headers.cookie : ''; // req가 있다면 cookie에 요청에 담겨진 cookie를 할당한다.
//   console.log('cookie: ', cookie);

//   const Bearer = `Bearer ${cookie.split('=')[1]}`;

//   axios.defaults.headers.authorization = ''; // 요청이 들어올 때마다 초기화 시켜주는 것이다. 여기는 클라이언트 서버에서 실행되므로 이전 요청이 남아있을 수 있기 때문이다
//   if (req && Bearer) {
//     axios.defaults.headers.authorization = Bearer; // 서버일때랑 cookie를 써서 요청을 보낼 때만 headers에 cookie를 넣어준다
//   }
//   store.dispatch({
//     type: LOAD_MY_INFO_REQUEST,
//   });
//   store.dispatch({
//     type: GET_ITEMS_REQUEST,
//   });
//   store.dispatch(END);
//   console.log('getServerSideProps end');
//   await store.sagaTask.toPromise(); // store/configureStore.js > store.sagaTask
// });
