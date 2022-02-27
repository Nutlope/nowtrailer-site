import { Box, Text, Flex, Image, Container } from 'theme-ui';
import React from 'react';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import ctaTwoImage from 'assets/free-course.png';

const CtaTwo = () => {
  return (
    <Box as="section" sx={styles.ctaTwo}>
      <Container>
        <Flex sx={styles.ctaTwo.row}>
          <Box sx={styles.ctaTwo.col}>
            <Image
              src={ctaTwoImage}
              sx={styles.ctaTwo.img}
              alt="cta two image"
            />
          </Box>
          <Box sx={styles.ctaTwo.col}>
            <Box sx={styles.ctaTwo.content}>
              <BlockTitle
                sx={styles.ctaTwo.blockTitle}
                tagline="Free tutorial"
                heading={
                  'More than thousand \n of free tutorial upload \n every weeks'
                }
              />
              <Text as="p" sx={styles.ctaTwo.text}>
                {
                  'Get your tests delivered at let home collect sample \n from the victory of the managments that supplies \n best design system  guidelines ever. Get your tests \n delivered at let home collect sample.'
                }
              </Text>
              <Link
                path="#"
                label="Explore details"
                variant="buttons.primary"
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CtaTwo;

const styles = {
  ctaTwo: {
    paddingBottom: '100px',
    '@media(min-width: 1200px)': {
      paddingTop: '100px',
    },
    '@media(max-width:1024px)': {
      paddingBottom: 80,
    },
    row: {
      flexWrap: 'wrap',
    },
    col: {
      flex: '0 0 50%',
      '@media(max-width:1024px)': {
        flex: '0 0 100%',
      },
    },
    img: {
      maxWidth: 'none',
      position: 'relative',
      right: '220px',
      bottom: '45px',
      '@media(max-width:1024px)': {
        maxWidth: '100%',
        right: 'auto',
        bottom: 'auto',
      },
    },
    content: {
      paddingLeft: '114px',
      '@media(max-width:1024px)': {
        paddingLeft: 0,
        maxWidth: 475,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
      },
      '@media(max-width:575px)': {
        maxWidth: '91%',
      },
    },
    blockTitle: {
      marginBottom: [20, null, null, 30],

      h3: {
        fontSize: ['24px', null, null, '36px', null, '48px'],
        lineHeight: 1.15,
        letterSpacing: ['-0.5px', null, null, '-1.5px'],
        whiteSpace: ['normal', null, null, null, null, 'pre-line'],
      },
    },
    text: {
      fontSize: [15, null, null, 18],
      lineHeight: 2.33,
      color: 'black',
      marginBottom: 25,
      mb: [20, null, null, null, null],
      whiteSpace: ['normal', null, null, null, 'pre-line'],
    },
  },
};
