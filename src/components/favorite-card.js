import { Box, Image, Heading, Text } from 'theme-ui';
import React from 'react';
import { Link } from 'components/link';
import VideoBtn from 'components/video-btn';
import { FaStar } from 'react-icons/fa';
import eyeIcon from 'assets/eye-2.svg';

const FavoriteCard = (props) => {
  return (
    <Box sx={styles.fevCard}>
      <Box sx={styles.fevCard.image}>
        <Image src={props.image} alt="content image" />
        <VideoBtn path={props.videoLink} />
      </Box>
      <Box sx={styles.fevCard.content}>
        <Box
          sx={styles.fevCard.stars}
          className={`starCount-${props.starCount}`}
        >
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <Text as="span">{props.reviewCount}</Text>
        </Box>
        <Heading as="h3">
          <Link path="/" label={props.title} />
        </Heading>
        <Text as="p">
          <Image src={eyeIcon} alt="" /> {props.watchCount}
        </Text>
      </Box>
    </Box>
  );
};

export default FavoriteCard;

const styles = {
  fevCard: {
    backgroundColor: '#fff',
    transition: '500ms',
    border: '1px solid #F3F4F5',
    display: 'flex',
    flexDirection: 'column',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    width: '100%',
    '&:hover': {
      boxShadow: '0px 15px 50px rgba(69, 88, 157, 0.1)',
    },
    image: {
      position: 'relative',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      overflow: 'hidden',
      width: '100%',
      display: 'flex',
      img: {
        display: 'block',
        width: '100%',
      },
      '.videoBtn': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
    content: {
      padding: ['10px 20px 20px', null, null, '10px 30px 20px'],
      h3: {
        fontSize: ['18px', null, null, '16px', null, '18px', '20px'],
        lineHeight: 1.5,
        color: 'black',
        margin: 0,
        fontWeight: 700,
        marginTop: '5px',
        marginBottom: '10px',
        a: {
          cursor: 'pointer',
          transition: '500ms',
          '&:hover': {
            color: 'primary',
          },
        },
      },
      p: {
        margin: 0,
        color: '#343D48',
        opacity: 0.8,
        display: 'flex',
        alignItems: 'center',
        fontSize: ['14px', null, null, '16px'],
        img: {
          marginRight: '15px',
        },
      },
    },
    stars: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '15px',
      color: '#0F2137',
      opacity: 0.8,
      marginTop: ['0px', null, '10px'],
      svg: {
        color: '#FFCE1F',
        fontSize: ['14px', null, null, '16px'],
        opacity: 1,
        '&:last-of-type': {
          marginRight: '10px',
        },
      },
      'svg + svg': {
        marginLeft: '5px',
      },
      '&.starCount-4': {
        'svg:last-of-type': {
          color: '#F0ECDF',
        },
      },
      '&.starCount-3': {
        'svg:nth-of-type(4), svg:last-of-type': {
          color: '#F0ECDF',
        },
      },
      '&.starCount-2': {
        'svg:nth-of-type(3), svg:nth-of-type(4), svg:last-of-type': {
          color: '#F0ECDF',
        },
      },
      '&.starCount-1': {
        'svg:nth-of-type(2), svg:nth-of-type(3), svg:nth-of-type(4), svg:last-of-type': {
          color: '#F0ECDF',
        },
      },
      '&.starCount-0': {
        svg: {
          color: '#F0ECDF',
        },
      },
    },
  },
};
