import React from 'react';
import { Layout, Contact, Soon } from '../components/index';

export default function PortfolioPage() {
  return (
    <Layout>
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
