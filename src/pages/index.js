import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import { VideoProvider } from 'contexts/video/video.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Modal from 'components/modal';
import Banner from 'sections/banner';
import CtaOne from 'sections/cta-one';
import FAQ from 'sections/faq';
import CtaTwo from 'sections/cta-two';
import WorkFlow from 'sections/workflow';
import Pricing from 'sections/pricing';
import PopularCourse from 'sections/popular-course';
import CtaThree from 'sections/cta-three';
import FavoriteCourse from 'sections/favorite-course';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <VideoProvider>
          <Layout>
            <SEO
              description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
              title="Startup Online Course Landing"
            />
            <Banner />
            <FavoriteCourse />
            <CtaThree />
            <PopularCourse />
            <WorkFlow />
            <Pricing />
            <CtaTwo />
            <FAQ />
            <CtaOne />
            <Modal />
          </Layout>
        </VideoProvider>
      </StickyProvider>
    </ThemeProvider>
  );
}
