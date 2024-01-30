import { Heading, Box, Container } from "theme-ui";
import React from "react";
import { Link } from "components/link";

const CtaOne = () => {
  return (
    <Box as="section" sx={styles.ctaBox}>
      <Container>
        <Heading as="h3">{"Ready to deliver \n with NowTrailer?"}</Heading>
        <Link
          path="#"
          label="Contact us at (508) 971-1501"
          sx={styles.ctaBox.button}
          variant="buttons.primary"
        />
      </Container>
    </Box>
  );
};

export default CtaOne;

const styles = {
  ctaBox: {
    textAlign: "center",
    paddingTop: [70, null, null, null, 140],
    paddingBottom: [80, null, null, null, 150],
    p: {
      margin: 0,
      color: "primary",
      fontWeight: "bold",
      fontSize: "14",
      letterSpacing: "2.1px",
      textTransform: "uppercase",
    },
    h3: {
      margin: 0,
      lineHeight: [1.25, 1.3],
      fontWeight: 700,
      whiteSpace: "pre-line",
      marginBottom: ["20px", "45px", "68px"],
      marginTop: "10px",
      fontSize: ["24px", null, null, "36px", null, "36px", "45px", "50px"],
    },
    button: {
      paddingLeft: "25px",
      paddingRight: "25px",
    },
  },
};
