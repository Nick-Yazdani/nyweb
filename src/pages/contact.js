import React from 'react';

import { ContactTwo, Layout } from '../components/index';

export default function ContactPage() {
  return (
    <Layout>
      <main>
        <ContactTwo title={`let's talk business`} btnText={`submit`} />
      </main>
    </Layout>
  );
}
