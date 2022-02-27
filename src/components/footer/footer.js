/** @jsx jsx */
import { jsx, Heading, Box, Divider, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';
import menuItems from './footer.data';
export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Divider sx={styles.footer.divider} />
      <Container sx={styles.footer.container}>
        {menuItems.map(({ header, items }, i) => (
          <Box key={i} sx={styles.footer.widget}>
            <Heading sx={styles.footer.title}>{header}</Heading>
            {items.map(({ path, label }, i) => (
              <Link
                sx={styles.footer.text}
                path={path}
                key={i}
                label={label}
                variant="footer"
              />
            ))}
          </Box>
        ))}
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    paddingBottom: '60px',
    '@media(max-width: 1024px)': {
      paddingBottom: '70px',
    },
    '@media(max-width: 991px)': {
      paddingBottom: '30px',
    },
    divider: {
      borderColor: '#E5ECF4',
      margin: 0,
      borderWidth: '1px',
      width: '100%',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '55px',
    },
    container: {
      maxWidth: '930px',
      paddingLeft: '15px',
      paddingRight: '15px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      '@media(max-width: 991px)': {
        gridTemplateColumns: '1fr 1fr',
      },
    },
    widget: {
      '@media(max-width: 991px)': {
        marginBottom: '30px',
      },
      'a:hover': {
        color: 'primary',
        cursor: 'pointer',
      },
      'a+a': {
        marginTop: '6px',
      },
    },
    title: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.67,
      margin: 0,
      marginBottom: '14px',
    },
    text: {
      fontSize: '14px',
      cursor: 'pointer',
    },
  },
};
