import React from "react";
import { Box, Container } from "theme-ui";
import Accordion from "components/accordion/accordion";
import BlockTitle from "components/block-title";

const accordionData = [
  {
    isExpanded: false,
    title: "How are we different?",
    contents: (
      <div>
        Why we are different Trailers like our Versatile and Unique Proprietary
        4’X8’ utility trailers can adapt to your needs and application. It can
        be a close cargo or open trailer to accommodate your needs, provide a
        soft ride and have low loading decks, which make it easy to both load
        and tow. The 4’×8’ trailer has a loading capacity of 1,000 lbs which
        should be more than enough for any delivery for any professional
        contractor or home-improvement job!
      </div>
    ),
  },
  {
    isExpanded: true,
    title: "App installation failed, how to update system information?",
    contents: (
      <div>
        An FAQ is a list of frequently asked questions (FAQs) and answers on a
        particular topic (also known as Questions and Answers [Q&A] or
        Frequently Asked Questions). The format is often used in articles,
        websites, email lists, and online forums where common questions tend to
        recur, for example through posts or queries by new users related to
        common knowledge gaps. The purpose of an FAQ is generally provide
        information.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Website reponse taking time, how to improve?",
    contents: (
      <div>
        An FAQ is a list of frequently asked questions (FAQs) and answers on a
        particular topic (also known as Questions and Answers [Q&A] or
        Frequently Asked Questions). The format is often used in articles,
        websites, email lists, and online forums where common questions tend to
        recur, for example through posts or queries by new users related to
        common knowledge gaps. The purpose of an FAQ is generally provide
        information.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "New update fixed all bug and issues",
    contents: (
      <div>
        An FAQ is a list of frequently asked questions (FAQs) and answers on a
        particular topic (also known as Questions and Answers [Q&A] or
        Frequently Asked Questions). The format is often used in articles,
        websites, email lists, and online forums where common questions tend to
        recur, for example through posts or queries by new users related to
        common knowledge gaps. The purpose of an FAQ is generally provide
        information.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" id="faq" sx={styles.accordion}>
      <Container sx={styles.accordion.container}>
        <BlockTitle
          sx={styles.accordion.blockTitle}
          tagline="Frequent Question"
          heading="Do you have any question?"
        />
        <Accordion items={accordionData} />
      </Container>
    </Box>
  );
};
export default FAQ;

const styles = {
  accordion: {
    container: {
      maxWidth: "900px",
    },
    blockTitle: {
      marginBottom: [25, null, null, 65],
      textAlign: "center",
    },
  },
};
