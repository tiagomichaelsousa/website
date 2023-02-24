import { PropsWithChildren, useEffect, useState } from 'react';
import { Box } from '@components';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import { Helmet } from 'react-helmet-async';
import useAllowedTokens from '@hooks/useAllowedTokens';
import { MAINTENANCE_MODE } from '@utils/env';
import Maintenance from '@sections/maintenance/Maintenance';
import { globalStyles } from '@theme/globalCss';
import ScrollTop from 'components/ScrollTop/ScrollTop';

const FONT_MONTSERRAT = 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap';

export const Layout = ({ children, page, paper = 'default' }: PropsWithChildren<LayoutProps>) => {
  globalStyles();
  const allowed = useAllowedTokens();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      setScroll((scrollTop / (scrollHeight - clientHeight)) * 100);
    };

    document.addEventListener('scroll', onScroll, { passive: true });

    // clean up the event handler when the component unmounts
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box data-testid="layout" paper={paper}>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <meta charSet="utf-8" />
        <title>tiagomichaelsousa | {page}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={FONT_MONTSERRAT} rel="preload" as="style" />
        <link href={FONT_MONTSERRAT} rel="stylesheet" media="all" />
      </Helmet>

      <Box
        css={{
          position: 'fixed',
          top: '0',
          width: `${scroll}%`,
          height: '$4',
          linearGradient: 'to right, #4389A2, #5C258D',
          zIndex: '$max',
        }}
      />
      {MAINTENANCE_MODE && !allowed ? (
        <Maintenance />
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
          <ScrollTop />
        </>
      )}
    </Box>
  );
};

type LayoutProps = {
  page: string;
  paper?: 'default' | 'inherit';
};

export default Layout;
