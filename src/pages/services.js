import React from 'react';
import { Helmet } from 'react-helmet';
import {
  About,
  Layout,
  Services,
  Contact,
  More,
  ServicesCover,
} from '../components/index';

import animation from '../videos/animation.mp4';

const aboutWords = [
  {
    word: 'how',
  },
  {
    word: 'we',
  },
  {
    word: 'do it!',
  },
];

const paragraphs = [
  {
    paragraph:
      'We do all we can to provide efficient results for our clients. We start by building comprehensive briefs that encapsulate your vision.',
  },
  {
    paragraph:
      "We take the time to cultivate a working relationship built on understanding and trust, where rigorous testing and honest feedback is essential to delivering the right product, first time, every time. Let's get it crystal clear from step one!",
  },
  {
    paragraph:
      'From the initial drafting process, all the way through to development and launch. When we hit the go button, rest assured that we are supremely confident in delivering exactly what you envisioned.',
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      <Helmet>
        <title>
          Specialising in development and design - NY Web Development
        </title>

        <meta
          name="description"
          content="We provide services that allow your business to flourish. With a slick, modern and lightning fast website or store, you will blitz the competition."
        />
      </Helmet>
      <main>
        <ServicesCover
          heading={`we have what it takes`}
          btnText={`get in touch`}
        />
        <About
          words={aboutWords}
          paragraphOne={`Do you want a new and engaging website or e-commerce store? A digital masterpiece that feels sleek, modern and robust? An online platform that loads as fast as lightning and immediately sets you apart from your competitors?`}
          paragraphTwo={`Contact us today and let us help you give a seamless first impression. If you're looking for the best in web design, development, and support, then we've got you covered.`}
        />
        <Services
          heading={`our services`}
          subHeadingOne={`web development`}
          subHeadingTwo={`web design`}
          subHeadingThree={`app development`}
          paragraphOne={`Our experienced developers provide top of the line websites in no time at all.`}
          paragraphTwo={`Our design team can provide unique and stunning designs, and templates.`}
          paragraphThree={`We can build you a fresh and engaging app that sets you apart from the competitors.`}
        />
        <More
          title={`it's more than just code`}
          paragraphs={paragraphs}
          video={animation}
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
