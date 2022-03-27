import { Box, Grid, Container } from "theme-ui";
import React from "react";
import BlockTitle from "components/block-title";
import FavoriteCard from "components/favorite-card";
import fevCardImageOne from "assets/yt_3.png";
import fevCardImageTwo from "assets/yt_1.png";
import fevCardImageThree from "assets/yt_2.png";

import { Swiper, SwiperSlide } from "swiper/react";

const favoriteCourseData = [
  {
    title: "How we save you money by using a trailer instead of a truck",
    image: fevCardImageOne,
    watchCount: "253 people watched",
    videoLink: "DRWrlu7xhKg",
    starCount: 5,
  },
  {
    title:
      "How we transport your goods safely and efficiently with our trailer",
    image: fevCardImageTwo,
    watchCount: "353 people watched",
    videoLink: "1ob8hhm6Szg",
    starCount: 4,
  },
  {
    title: "How we use our proprietary trailer to keep your goods safe",
    image: fevCardImageThree,
    watchCount: "103 people watched",
    videoLink: "3iG8bFOEQWE",
    starCount: 5,
  },
];

const FavoriteCourse = () => {
  const FavoriteCarousel = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      376: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };
  return (
    <Box as="section" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <BlockTitle
          sx={styles.fevCourse.blockTitle}
          tagline="Quality features"
          heading="Tutorials that people love most"
        />
        <Swiper {...FavoriteCarousel} sx={styles.carousel}>
          {favoriteCourseData.map((course, index) => (
            <SwiperSlide key={index}>
              <FavoriteCard
                starCount={course.starCount}
                title={course.title}
                image={course.image}
                reviewCount={course.reviewCount}
                watchCount={course.watchCount}
                videoLink={course.videoLink}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default FavoriteCourse;

const styles = {
  fevCourse: {
    paddingTop: ["60px", null, null, "80px", "110px"],
    pb: [null, null, null, "30px", "50px", "0"],
    container: {
      maxWidth: 1440,
      "@media(max-width:1440px)": {
        maxWidth: 1240,
      },
      ".swiper-container": {
        pb: "30px",
        overflow: [null, null, null, null, null, "visible"],
      },
    },
    blockTitle: {
      textAlign: "center",
      marginBottom: "30px",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridGap: 30,
      "@media(max-width: 991px)": {
        gridTemplateColumns: "1fr 1fr",
      },
      "@media(max-width: 575px)": {
        gridTemplateColumns: "1fr",
      },
    },
    col: {
      display: "flex",
    },
  },
};
