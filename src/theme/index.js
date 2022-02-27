export default {
  // example colors with dark mode
  breakpoints: ['376px', '576px', '768px', '992px', '1200px', '1441px'],
  colors: {
    text: '#343D48', // body color and primary color
    text_secondary: '#02073E', // secondary body color
    heading: '#0F2137', // primary heading color
    heading_secondary: '#343D48', // heading color
    background: '#FFFFFF', // body background color
    background_secondary: '#F9FBFD', // secondary background color
    border_color: '#E9EDF5', // border color
    primary: '#EF9E48', // primary button and link color
    primaryLight: '#FCF2E8',
    black: '#0F2137',
    secondary: '#30c', // secondary color - can be used for hover states
    muted: '#7B8188', // muted color
    accent: '#609', // a contrast color for emphasizing UI

    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111',
      },
    },
  },
  fonts: {
    body: 'DM Sans',
    // body:
    //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'DM Sans',
    // heading: 'Bree Serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 28, 32, 36, 48, 64, 72],
  fontWeights: {
    body: 'normal',
    // body: 400,
    heading: 500,
    // heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: '30px',
    // body: 1.5,
    heading: '50px',
    // heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px',
  },
  // space: [0, 4, 8, 16, 32, 64],
  sizes: {
    container: ['1210px'],
  },
  // variants can use custom, user-defined names
  layout: {
    container: {
      px: ['20px', null, null, null, '30px', '20px'],
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'space-between',
    },
    main: {},
    footer: {
      backgroundColor: 'background_secondary',
    },
  },
  section: {
    banner: {
      borderTop: (t) => `1px solid ${t.colors.border_color}`,
      borderBottom: (t) => `1px solid ${t.colors.border_color}`,
      backgroundColor: 'background_secondary',
      py: [3, 5],
    },
    feature: {
      py: 5,
    },
    workflow: {
      py: 5,
    },
    product: {
      borderTop: (t) => `1px solid ${t.colors.border_color}`,
      borderBottom: (t) => `1px solid ${t.colors.border_color}`,
      backgroundColor: 'background_color',
      py: 5,
    },
    offer: {
      py: 5,
    },
    package: {
      py: 5,
    },
    support: {
      py: 5,
    },
    testimonial: {
      py: 5,
    },
    faq: {
      py: 5,
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      letterSpacing: 'heading',
      color: 'heading',
    },
    heroPrimary: {
      fontSize: [5, 55],
      fontWeight: 'normal',
      lineHeight: ['40px', '80px'],
      letterSpacing: '-1px',
      textAlign: ['center', 'left'],
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      // fontSize: [6, 7, 8],
      // fontWeight: 'display',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: '30px',
      color: '#0F2137',
    },
    heroSecondary: {
      color: 'text_secondary',
      lineHeight: ['30px', '42px'],
      letterSpacing: '0.1em',
      textAlign: ['center', 'left'],
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137',
    },
    muted: {
      lineHeight: '26px',
      color: 'muted',
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px',
    },
  },
  links: {
    bold: {
      fontWeight: 'bold',
    },
    nav: {
      display: ['none', null, 'inline-block'],
      p: 2,
      // transitionProperty: 'background-color',
      // transitionTimingFunction: 'ease-out',
      // transitionDuration: '.2s',
      // borderRadius: 2,
      // '&:hover': {
      //   bg: 'highlight',
      // },
      // '&.active': {
      //   color: 'primary',
      //   bg: 'highlight',
      // },
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none'],
    }, // default variant for MenuButton
    // you can reference other values defined in the theme
    primary: {
      outline: 'none',
      display: 'inline-block',
      fontWeight: 'bold',
      color: 'primary',
      bg: 'primaryLight',
      cursor: 'pointer',
      transition: '500ms',
      fontSize: ['14px', null, null, '16px'],
      letterSpacing: '-0.16px',
      padding: '10px 19px',
      borderRadius: '5px',
      textDecoration: 'none',
      '&:hover': {
        bg: 'primary',
        color: '#fff',
      },
    },
    secondary: {
      color: 'text',
      bg: 'secondary',
    },
    text: {
      backgroundColor: 'transparent',
      color: '#3183FF',
      pl: 0,
    },
  },
  blockTitle: {
    p: {
      margin: 0,
      fontSize: '14px',
      fontWeight: 'Bold',
      textTransform: 'uppercase',
      color: 'primary',
      lineHeight: 1,
      letterSpacing: '2.1px',
      marginBottom: '12px',
    },
    h3: {
      margin: 0,
      fontSize: ['24px', null, null, , '30px', null, null, '36px'],
      color: 'black',
      fontWeight: 'bold',
      lineHeight: 1.53,
      whiteSpace: 'pre-line',
      letterSpacing: ['-0.5px', null, null, '-1.5px'],
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      // boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5,
    },
    featureCard: {
      display: 'flex',
      alignItems: ['center', 'flex-start'],
      flexDirection: ['column', 'row'],
      p: [0, 3],
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },

  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },

  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      WebkitFontSmoothing: 'antialiased',
      '@media(max-width: 479px)': {
        WebkitTextSizeAdjust: '100%',
      },
      button: {
        cursor: 'pointer',
        outline: 'none',
      },
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7',
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    button: {
      cursor: 'pointer',
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important',
    },
  },
};
