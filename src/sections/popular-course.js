import { Box, Container } from "theme-ui";
import React from "react";
import BlockTitle from "components/block-title";
import PopularCard from "components/popular-card";

const popularCourseData = [
  {
    title:
      "Professional graphic design tutorial full course with exercise file",
    reviewCount: "5.0 (392 reviews)",
    watchCount: "2,538 students watched",
    videoLink: "DRWrlu7xhKg",
    starCount: 5,
    expanded: true,
    list: [
      {
        content: "How to reduce file pixel dimentions without loosing quality",
      },
      {
        content: "How to make logo pixel perfects with different extension",
      },
      {
        content: "Create vector file from restarize layer styles",
      },
      {
        content: "Make color gradient with photoshop build-in tools",
      },
    ],
  },
  {
    title: "Become ultimate photoshop expert within 30 days",
    reviewCount: "4.5 (524 reviews)",
    watchCount: "3,532 students watched",
    videoLink: "DRWrlu7xhKg",
    starCount: 4,
    expanded: false,
    list: [
      {
        content: "How to reduce file pixel dimentions without loosing quality",
      },
      {
        content: "How to make logo pixel perfects with different extension",
      },
      {
        content: "Create vector file from restarize layer styles",
      },
      {
        content: "Make color gradient with photoshop build-in tools",
      },
    ],
  },
  {
    title: "After effects animation tutorial with photoshop documents",
    reviewCount: "5.0 (392 reviews)",
    watchCount: "1,037 students watched",
    videoLink: "DRWrlu7xhKg",
    starCount: 5,
    expanded: false,
    list: [
      {
        content: "How to reduce file pixel dimentions without loosing quality",
      },
      {
        content: "How to make logo pixel perfects with different extension",
      },
      {
        content: "Create vector file from restarize layer styles",
      },
      {
        content: "Make color gradient with photoshop build-in tools",
      },
    ],
  },
  {
    title: "Adobe illustrator vector art design mockup",
    reviewCount: "5.0 (392 reviews)",
    watchCount: "1,037 students watched",
    videoLink: "DRWrlu7xhKg",
    starCount: 5,
    expanded: false,
    list: [
      {
        content: "How to reduce file pixel dimentions without loosing quality",
      },
      {
        content: "How to make logo pixel perfects with different extension",
      },
      {
        content: "Create vector file from restarize layer styles",
      },
      {
        content: "Make color gradient with photoshop build-in tools",
      },
    ],
  },
];

const PopularCourse = () => {
  return (
    <Box as="section" id="courses" sx={styles.popularCourse}>
      <Container>
        <br></br>
        <br></br>
        <BlockTitle
          sx={styles.popularCourse.blockTitle}
          tagline="Now Trailer LLC"
          heading="Our Trailer Features"
        />
        {popularCourseData.map((course, index) => (
          <Box sx={styles.popularCourse.col} key={index}>
            <PopularCard
              key={index}
              listData={course.list}
              expanded={course.expanded}
              starCount={course.starCount}
              title={course.title}
              reviewCount={course.reviewCount}
              watchCount={course.watchCount}
              videoLink={course.videoLink}
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default PopularCourse;

const styles = {
  popularCourse: {
    paddingBottom: ["100px"],
    "@media(max-width: 575px)": {
      paddingBottom: "60px",
    },
    blockTitle: {
      textAlign: "center",
      marginBottom: "60px",
      "@media(max-width: 575px)": {
        marginBottom: "30px",
      },
    },
    col: {},
  },
};
