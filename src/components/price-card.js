import { Box, Card, Text, Flex, Heading, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React from 'react';
import PricingList from './pricing-list';

export default function PriceCard({
  data: {
    header,
    name,
    description,
    priceWithUnit,
    pricePeriod,
    buttonText = 'Start Free Trial',
    points,
  },
}) {
  return (
    <Card className={header ? 'active' : ''} sx={styles.pricingBox}>
      {header && <Text sx={styles.header}>{header}</Text>}
      <Box>
        <Flex sx={styles.pricingHeader}>
          <Box>
            <Heading className="package__name" sx={styles.heading}>
              {name}
            </Heading>
            <Text
              as="p"
              sx={{
                color: '#343D48',
                '@media screen and (max-width: 480px)': {
                  fontSize: 14,
                },
              }}
            >
              {description}
            </Text>
          </Box>
          {header ? (
            <Text className="package__price" sx={styles.price}>
              <span>Starting from</span>
              <div className="price">
                {priceWithUnit}
                <sub>{pricePeriod}</sub>
              </div>
            </Text>
          ) : null}
        </Flex>
        <PricingList items={points} childStyle={styles.listItem} />
        <Box
          sx={{
            textAlign: 'center',
            mt: 70,
            '@media screen and (max-width: 768px)': {
              mt: 40,
            },
          }}
        >
          <Button variant="buttons.primary" sx={styles.button}>
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  pricingBox: {
    p: '62px 70px 50px 40px',
    flex: '0 1 38.5%',
    backgroundColor: '#fff',
    border: '1px solid #F3F4F5',
    borderRadius: 10,
    ml: 30,
    position: 'relative',
    '@media screen and (max-width: 1366px)': {
      pr: '40px',
    },
    '@media screen and (max-width: 1024px)': {
      flex: '0 1 50%',
    },
    '@media screen and (max-width: 992px)': {
      p: '62px 25px 50px 25px',
    },
    '@media screen and (max-width: 768px)': {
      p: '50px 15px 30px',
    },
    '@media screen and (max-width: 620px)': {
      ml: 0,
      flex: '0 1 80%',
      mt: '40px',
    },
    '@media screen and (max-width: 480px)': {
      flex: '0 1 calc(100% - 10px)',
    },
    '&:first-of-type': {
      ml: 0,
      '@media screen and (max-width: 620px)': {
        mt: 0,
      },
    },
    '&.active': {
      border: '2.5px solid #25CB9E',
      '.package__name': {
        color: 'heading_secondary',
      },
      '.package__price > span': {
        color: 'text',
      },
      '.open': {
        color: 'text',
      },
      '.closed': {
        color: 'text',
        opacity: 0.6,
      },
    },
    'ul li': {
      animation: `${fadeIn2} 0.7s linear`,
    },
  },
  header: {
    height: 32,
    backgroundColor: '#EF9E48',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    position: 'absolute',
    top: '20px',
    letterSpacing: '-.14px',
    px: '10px',
    animation: `${fadeIn2} 0.7s linear`,
    '@media screen and (max-width: 768px)': {
      top: '15px',
      height: 28,
    },
  },

  heading: {
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: '23px',
    color: 'black',
    marginBottom: ['5px', null, null, null, '12px'],
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: [35, null, null, null, 50],
    animation: `${fadeIn} 0.9s linear`,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 1,
    display: 'flex',
    letterSpacing: '-0.55px',
    color: '#0F2137',
    marginBottom: 0,
    flexWrap: 'wrap',
    flexDirection: 'column',
    textAlign: 'right',
    mt: '2px',
    '@media screen and (max-width: 768px)': {
      fontSize: 20,
    },
    '> span': {
      fontWeight: 'body',
      fontSize: 16,
      lineHeight: 1.25,
      display: 'block',
      marginBottom: '10px',
      color: 'white',
    },
    '> .price': {
      marginBottom: 0,
      color: '#25CB9E',
      '> sub': {
        position: 'relative',
        bottom: '6px',
      },
    },
  },
  listItem: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: '26px',
    marginBottom: 22,
    alignItems: 'flex-start',
    color: '#343D48',
    pr: 25,
    '@media screen and (max-width: 480px)': {
      fontSize: 15,
      lineHeight: 1.8,
      pr: 10,
      marginBottom: 12,
    },
    '&.closed': {
      opacity: 0.6,
      button: {
        color: '#788FB5',
      },
    },
  },
  button: {
    p: '10px 48.5px',
    animation: `${fadeIn2} 0.7s linear`,
  },
};
