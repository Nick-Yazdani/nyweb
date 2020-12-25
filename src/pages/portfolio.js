import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout, Contact, Soon } from '../components/index';

export default function PortfolioPage() {
  return (
    <Layout>
      <Helmet>
        <title>Our work and projects - NY Web Development</title>
        <meta
            name="description"
            content="Our projects always end up the same, great looking, performant and lightning fast."
          />
      </Helmet>
      <main>
        <Soon title={`Coming soon...`} />
        <Contact
          title={`Contact us!`}
          btnText={`submit`}
          bgColor={`#03ecf5`}
          titleColor={`#fff`}
        />
      </main>
    </Layout>
  );
}
