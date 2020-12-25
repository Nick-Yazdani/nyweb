import React from 'react';
import { Helmet } from 'react-helmet';
import { ContactTwo, Layout } from '../components/index';

export default function ContactPage() {
  return (
    <Layout>
      <Helmet>
        <title>NY Web Development - Get in touch with us.</title>
        <meta
          name="description"
          content="Get in touch with us here to discuss our flexible options for your future project."
        />
      </Helmet>
      <main>
        <ContactTwo title={`let's talk business`} btnText={`submit`} />
      </main>
    </Layout>
  );
}
