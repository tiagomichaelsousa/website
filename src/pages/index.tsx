import * as React from 'react';
import { Layout } from '@components';
import Technologies from '@sections/home/Technologies';
import Banner from '@sections/home/Banner';
import Blog from '@sections/home/Blog';
import About from '@sections/home/About';
import Job from '@sections/home/Job';

const IndexPage: React.FC = () => {
  return (
    <Layout page="Home">
      <Banner />
      <About />
      <Job />
      <Technologies />
      <Blog />
    </Layout>
  );
};

export default IndexPage;
