import '../styles/globals.css';
import Head from 'next/head';
import PropTypes from 'prop-types';

import wrapper from '../store/configureStore';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Prada Admin Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default wrapper.withRedux(App);
