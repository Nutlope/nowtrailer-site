import { Button } from 'theme-ui';
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { useVideoDispatch } from 'contexts/video/video.provider';

const VideoBtn = (props) => {
  const dispatch = useVideoDispatch();
  const handleVideoOpen = () => {
    dispatch({ type: 'SET_OPEN', url: props.path });
  };
  return (
    <Button
      className="videoBtn"
      aria-label="play Video"
      sx={styles.videoBtn}
      onClick={handleVideoOpen}
    >
      <FaPlay />
    </Button>
  );
};

export default VideoBtn;

const styles = {
  videoBtn: {
    width: '92px',
    borderRadius: '50%',
    height: '92px',
    backgroundColor: 'rgba(255,255,255, .5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    textAlign: 'center',
    color: '#fff',
    cursor: 'pointer',
    transition: '500ms',
    svg: {
      position: 'relative',
      left: '5px',
      fontSize: '35px',
    },
    '&:hover': {
      backgroundColor: 'primary',
      color: '#fff',
    },
  },
};
