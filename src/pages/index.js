import React from 'react';

import { Layout, Cover, About, Services, Responsive, Work, Contact } from '../components/index';

import sliderOne from '../images/placeholder_one.png'
import sliderTwo from '../images/placeholder_two.png'
import sliderThree from '../images/placeholder_three.png'
import sliderFour from '../images/placeholder_four.png'
import sliderFive from '../images/placeholder_five.png'
import sliderSix from '../images/placeholder_six.png'

const sliders = [
  {
    image: sliderOne
  },
  {
    image: sliderTwo
  },
  {
    image: sliderThree
  },
  {
    image: sliderFour
  },
  {
    image: sliderFive
  },
  {
    image: sliderSix
  }
]


export default function IndexPage() {
  return (
    <Layout>
      <main>
      <Cover heading={`development you can depend on`} btnText={`read more`} />
      <About
        paragraphOne={`We're a team of highly skilled developers who have what it takes to build you the perfect website or app.`}
        paragraphTwo={`Our innovative design team are digital artists, specialising in unique and stunning designs and templates. Our experienced developers have all the tools necessary to engineer top-of-the-line websites in no time at all.`}
        paragraphThree={`We listen to our clients, and we know they like to browse tech of all shapes and sizes. All our websites are built completely responsive and market-ready, with platforms that speak directly to inexperience and intuitive users alike.`}
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
      <Responsive
        heading={`fully responsive websites`}
        paragraph={`When it comes to your client base we know they like to browse on tech of all shapes and sizes, this is why all of our websites are built fully responsive.`}
      />
      <Work heading={`our work`} sliders={sliders} />
      <Contact title={`Contact us!`} btnText={`submit`} />
      </main>
    </Layout>
  );
}
