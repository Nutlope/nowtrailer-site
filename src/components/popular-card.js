import React, { useState } from 'react';
import { keyframes } from '@emotion/core';
import { jsx, Box, Heading, Text, Button, Image } from 'theme-ui';
import { Link } from 'components/link';
import VideoBtn from 'components/video-btn';
import { FaStar, FaAngleDown, FaAngleUp, FaCheckCircle } from 'react-icons/fa';
import eyeIcon from 'assets/eye-2.svg';

const PopularCard = (props) => {
  const [status, setStatus] = useState(props.expanded);
  const handleClick = () => {
    setStatus(!status);
  };
  return (
    <Box
      sx={styles.popularCard}
      className={`${status === true ? 'active' : ''}`}
    >
      <Box sx={styles.popularCard.videoBtn}>
        <VideoBtn path={props.videoLink} />
      </Box>
      <Box sx={styles.popularCard.main}>
        <Box sx={styles.popularCard.top}>
          <Box sx={styles.popularCard.content}>
            <Box sx={styles.popularCard.meta}>
              <Box
                sx={styles.popularCard.stars}
                className={`starCount-${props.starCount}`}
              >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <Text as="span">{props.reviewCount}</Text>
              </Box>
              <Box sx={styles.popularCard.watch}>
                <Image src={eyeIcon} alt="" /> {props.watchCount}
              </Box>
            </Box>
            <Heading as="h3">
              <Link path="/" label={props.title} />
            </Heading>
            <Text as="p">
              Get your tutorials delivered at let home collect sample from the
              victory of the managments.
            </Text>
          </Box>
          <Box sx={styles.popularCard.buttonBox}>
            <Button
              sx={styles.popularCard.courseBtn}
              onClick={handleClick}
              varient="buttons.primary"
            >
              7 Video Classes
              <Text as="span">4 hrs</Text>
            </Button>
            {status === true ? (
              <>
                <FaAngleUp onClick={handleClick} width={16} />
              </>
            ) : (
              <>
                <FaAngleDown onClick={handleClick} width={16} />
              </>
            )}
          </Box>
        </Box>
        {status === true ? (
          <Box sx={styles.popularCard.list}>
            {props.listData.map((listItem, index) => (
              <Box sx={styles.popularCard.listItem} key={index}>
                <FaCheckCircle width={22} /> {listItem.content}
              </Box>
            ))}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default PopularCard;
const popularListAnim = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;
const styles = {
  popularCard: {
    marginBottom: '20px',
    backgroundColor: '#fff',

    borderRadius: '10px',
    pt: ['25px', null, null, 0],
    paddingLeft: ['25px', null, null, '170px'],
    paddingRight: ['25px', null, null, '40px'],
    position: 'relative',
    border: '1px solid #F3F4F5',
    '&.active': {
      borderColor: 'transparent',
      boxShadow: '0px 25px 100px rgba(69, 88, 157, 0.08)',
    },
    videoBtn: {
      position: ['relative', null, null, 'absolute'],
      top: ['0', null, null, '40px'],
      left: ['0', null, null, '40px'],
      '.videoBtn': {
        backgroundColor: 'rgba(239, 158, 72, .07)',
        color: '#EF9E48',
        '@media(max-width:710px)': {
          width: '70px',
          height: '70px',
          fontSize: '15px',
          svg: {
            left: 0,
          },
        },

        '&:hover': {
          backgroundColor: 'rgba(239, 158, 72, 1)',
          color: '#fff',
        },
      },
    },
    main: {
      paddingTop: '32px',
      paddingBottom: '32px',
      '@media(max-width:575px)': {
        paddingTop: '25px',
        paddingRight: '0px',
        paddingBottom: '15px',
      },
      '@media(max-width:320px)': {
        paddingRight: '0px',
      },
    },
    top: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '@media(max-width:1199px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
    },
    content: {
      h3: {
        fontSize: ['20px', null, null, '22px'],
        lineHeight: 1.36,
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
        fontSize: ['15px', null, null, '15px'],
        color: '#5D646D',
      },
    },
    meta: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '7px',
      '@media(max-width:575px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
    },
    stars: {
      display: 'flex',
      alignItems: 'center',
      fontSize: ['15px', null, null, '15px'],
      color: '#0F2137',
      opacity: 0.8,
      marginRight: '17px',
      '@media(max-width: 575px)': {
        lineHeight: 1,
        marginRight: 0,
      },
      svg: {
        color: '#FFCE1F',
        fontSize: ['14px', null, null, '16px'],
        opacity: 1,
        '&:last-of-type': {
          marginRight: '10px',
          '@media(max-width: 575px)': {
            marginRight: '5px',
          },
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
    watch: {
      mt: ['10px', null, null, 0],
      color: '#343D48',
      opacity: 0.8,
      display: 'flex',
      alignItems: 'center',
      fontSize: ['15px', null, null, '16px'],
      img: {
        marginRight: ['5px', null, '15px'],
      },
    },
    watchCount: {},
    buttonBox: {
      display: 'flex',
      alignItems: 'center',
      '@media(max-width:1199px)': {
        marginTop: '20px',
      },
      svg: {
        color: '#02073E',
        opacity: 0.4,
        marginLeft: '15px',
        cursor: 'pointer',
      },
    },
    courseBtn: {
      backgroundColor: '#3FDBB1',
      borderRadius: '6px',
      fontSize: '15px',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#2FB994',
      },
      span: {
        borderLeft: '1px solid rgba(255,255,255,.5)',
        marginLeft: '10px',
        paddingLeft: '10px',
      },
    },
    list: {
      flexWrap: 'wrap',
      marginTop: '25px',
      display: 'grid',
      gridColumnGap: '30px',
      gridTemplateColumns: ['1fr', null, null, null, '1fr 1fr'],
      animation: `${popularListAnim} .7s linear`,
    },
    listItem: {
      fontSize: ['15px', null, null, '15px'],
      lineHeight: [1.73, null, null, 1.5],
      color: '#0F2137',
      position: 'relative',
      paddingLeft: ['30px', null, '30px'],
      marginBottom: '15px',
      svg: {
        color: '#B5C3CB',
        marginRight: '10px',
        position: 'absolute',
        top: '4px',
        left: 0,
        fontSize: '18px',
        '@media(max-width:575px)': {
          top: '5px',
          fontSize: [18],
          transform: 'translateY(0)',
        },
      },
    },
  },
};
