import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import SEO from '../../next-seo.config';
import '../styles/styles.scss';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Utils - A Cool Repo</title>
    </Head>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </>
);

export default App;
