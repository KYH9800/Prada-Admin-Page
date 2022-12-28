import React, { useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
// CSS
import { Navbar } from '../styles/AppLayout.styled.component';

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar>
        <div>
          <Link href="/">메인 페이지</Link>
        </div>
        <div>
          <Link href="/addPage">상품추가</Link>
        </div>
      </Navbar>

      <main>{children}</main>
    </>
  );
};

export default AppLayout;
