import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Layout,
  Cover,
  About,
  Call,
  Ethos,
  Contact,
} from '../components/index';
import videoSrc from '../videos/about.mp4';

const aboutWords = [
  {
    word: 'why',
  },
  {
    word: 'work',
  },
  {
    word: 'with',
  },
  {
    word: 'us?',
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>Learn more about us here - NY Web Development</title>
        <meta
          name="description"
          content="We are passionate developers with a taste for cutting edge tech. We take pride in engineering amazing and lightning fast websites."
        />
      </Helmet>
      <main>
        <Cover
          heading={`if you're looking for the best, we've got you sorted.`}
          video={videoSrc}
          btnText={`get in touch`}
          path={`/contact`}
        />
        <About
          words={aboutWords}
          paragraphOne={`We are dedicated to making our clients happy by providing high-quality products with efficiency and unwavering dedication to your vision.`}
          paragraphTwo={`Our success in meeting the brief and delivering on your needs ultimately translates to the success of your company. Get in touch today so we can begin your digital journey together.`}
        />
        <Call
          btnText={`let's chat`}
          title={`ready to get started?`}
          path={`/contact`}
        />
        <Ethos
          title={`our ethos`}
          paragraph={`From small businesses to large organisations, we are committed to companies of all beginnings. We see the importance of each business and strive to meet the needs of all our clients.`}
        />
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
