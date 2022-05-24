import React, { PropsWithChildren } from 'react';
import { Box } from '@components';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import { Helmet } from 'react-helmet';
import useAllowedTokens from '@hooks/useAllowedTokens';
import { MAINTENANCE_MODE } from '@utils/env';
import Maintenance from '@sections/maintenance/Maintenance';
import { globalStyles } from '@theme/globalCss';

const FONT_MONTSERRAT = 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap';

export const Layout = ({ children, page, paper = 'default' }: PropsWithChildren<LayoutProps>) => {
  globalStyles();
  const allowed = useAllowedTokens();

  return (
    <Box paper={paper}>
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

      {MAINTENANCE_MODE && !allowed ? (
        <Maintenance />
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
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
